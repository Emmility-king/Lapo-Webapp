'use client'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Active', value: 1200 },
  { name: 'Expired', value: 600 },
  { name: 'Blocked', value: 300 },
  { name: 'Inactive', value: 350 },
];

const COLORS = ['#34d399', '#f87171', '#60a5fa', '#a78bfa'];

export default function PieChartStatus() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md h-80">
      <h3 className="text-lg font-semibold mb-3">Card Status Distribution</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
