'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

type ApiTemperaturePoint = {
  time: string;
  temp: number;
};

type ChartTemperaturePoint = {
  time: string;
  tempF: number;
  tempC: number;
};

function fahrenheitToCelsius(tempF: number): number {
  return Number((((tempF - 32) * 5) / 9).toFixed(1));
}

function formatTimeToMeridiem(time24: string): string {
  const [hourText, minuteText] = time24.split(':');
  const hour = Number(hourText);

  if (!Number.isInteger(hour) || !minuteText) {
    return time24;
  }

  const period = hour >= 12 ? 'PM' : 'AM';
  const normalizedHour = hour % 12 === 0 ? 12 : hour % 12;

  return `${normalizedHour}:${minuteText} ${period}`;
}

export default function Dashboard() {
  const [data, setData] = useState<ChartTemperaturePoint[]>([]);

  useEffect(() => {
    fetch('https://api.pisystem.local/bop/temperature')
      .then((res) => res.json())
      .then((apiData: ApiTemperaturePoint[]) => {
        const normalizedData = apiData.map((point) => ({
          time: formatTimeToMeridiem(point.time),
          tempF: point.temp,
          tempC: fahrenheitToCelsius(point.temp),
        }));

        setData(normalizedData);
      })
      .catch((err) => console.error("Erro de conexão", err));
  }, []);

  return (
    <main className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">BOP Monitoring Solution</h1>
      <div className="w-full h-96 bg-white p-4 shadow-md rounded-lg" data-testid="chart-container">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis yAxisId="fahrenheit" orientation="left" unit="°F" />
              <YAxis yAxisId="celsius" orientation="right" unit="°C" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="fahrenheit"
                type="monotone"
                dataKey="tempF"
                name="Temperatura (°F)"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ className: 'recharts-dot' }}
              />
              <Line
                yAxisId="celsius"
                type="monotone"
                dataKey="tempC"
                name="Temperatura (°C)"
                stroke="#0ea5e9"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p>Carregando dados do PI System...</p>
        )}
      </div>
    </main>
  );
}