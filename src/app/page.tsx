'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { StorybookLinkButton } from '@/components/storybook-link-button';
import { Button } from '@/components/button';
import { InputField } from '@/components/input-field';

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
  const [alertsEnabled, setAlertsEnabled] = useState(false);
  const [thresholdF, setThresholdF] = useState('85');
  const [thresholdError, setThresholdError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const storybookUrl =
    process.env.NEXT_PUBLIC_STORYBOOK_URL ?? 'https://bop-mini-demo-storybook.vercel.app';

  useEffect(() => {
    fetch('/api/temperature')
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

  const handleSaveThreshold = async () => {
    setThresholdError('');
    const tempValue = parseFloat(thresholdF);

    if (isNaN(tempValue) || tempValue < -50 || tempValue > 200) {
      setThresholdError('Temperatura deve estar entre -50°F e 200°F');
      return;
    }

    setIsSaving(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log('Limiar de temperatura salvo:', tempValue);
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggleAlerts = () => {
    setAlertsEnabled(!alertsEnabled);
  };

  return (
    <main className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold text-slate-900">BOP Monitoring Solution</h1>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/bernardooduarte/bop-mini-demo/actions/workflows/playwright.yml"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
              data-testid="playwright-tests-link"
            >
              Ver testes do Playwright
            </a>
            <StorybookLinkButton href={storybookUrl} />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Chart Section - 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div
              className="h-96 rounded-lg bg-white p-4 shadow-md"
              data-testid="chart-container"
            >
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
                <p className="flex items-center justify-center h-full text-slate-500">
                  Carregando dados do PI System...
                </p>
              )}
            </div>
          </div>

          {/* Alert Configuration Section - 1 column */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-6 text-lg font-semibold text-slate-900">Configuração de Alertas</h2>

            {/* Alert Status */}
            <div className="mb-6 rounded-md bg-slate-100 p-4">
              <p className="text-sm text-slate-600">Estado dos Alertas</p>
              <p
                className="mt-2 text-xl font-bold"
                data-testid="alert-status"
                style={{ color: alertsEnabled ? '#10b981' : '#6b7280' }}
              >
                {alertsEnabled ? '🟢 Ativados' : '⚫ Desativados'}
              </p>
            </div>

            {/* Temperature Threshold Input */}
            <div className="mb-4">
              <InputField
                label="Limiar de Temperatura (°F)"
                placeholder="Ex: 85"
                type="number"
                value={thresholdF}
                onChange={(e) => {
                  setThresholdF(e.target.value);
                  setThresholdError('');
                }}
                error={thresholdError}
                data-testid="threshold-input"
              />
            </div>

            {/* Save Button */}
            <div className="mb-4">
              <Button
                label={isSaving ? 'Salvando...' : 'Salvar Limiar'}
                variant="primary"
                size="md"
                onClick={handleSaveThreshold}
                disabled={isSaving}
                loading={isSaving}
                data-testid="save-threshold-button"
              />
            </div>

            {/* Alert Toggle Button */}
            <div>
              <Button
                label={alertsEnabled ? 'Desativar Alertas' : 'Ativar Alertas'}
                variant={alertsEnabled ? 'danger' : 'secondary'}
                size="md"
                onClick={handleToggleAlerts}
                data-testid="toggle-alerts-button"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}