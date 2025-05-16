'use client'
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

// Define the data structure type
interface IssuanceData {
  name: string;
  Instant: number;
  Personalized: number;
}

// Sample data for the chart
const defaultData: IssuanceData[] = [
  { name: 'Jun', Instant: 200, Personalized: 150 },
  { name: 'Jul', Instant: 250, Personalized: 180 },
  { name: 'Aug', Instant: 300, Personalized: 200 },
  { name: 'Sep', Instant: 280, Personalized: 230 },
  { name: 'Oct', Instant: 350, Personalized: 270 },
];

interface IssuanceBarChartProps {
  data?: IssuanceData[];
  title?: string;
}

export default function IssuanceBarChart({ 
  data = defaultData, 
  title = "Monthly Issuance" 
}: IssuanceBarChartProps) {
  return (
    <div className="w-full h-72 bg-white rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip 
            formatter={(value) => [`${value}`, '']}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Legend />
          <Bar dataKey="Instant" fill="#3b82f6" name="Instant Cards" />
          <Bar dataKey="Personalized" fill="#8b5cf6" name="Personalized Cards" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
