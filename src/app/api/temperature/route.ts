import { NextResponse } from 'next/server';

type TemperaturePoint = {
  time: string;
  temp: number;
};

const temperatureSeries: TemperaturePoint[] = [
  { time: '10:00', temp: 85 },
  { time: '11:30', temp: 88 },
  { time: '13:10', temp: 92 },
  { time: '15:15', temp: 90 },
  { time: '18:20', temp: 95 },
];

export async function GET() {
  return NextResponse.json(temperatureSeries);
}
