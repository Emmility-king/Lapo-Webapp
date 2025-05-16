"use client"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const incomeData = [
  { day: "Mon", income: 200 },
  { day: "Tue", income: 300 },
  { day: "Wed", income: 250 },
  { day: "Thu", income: 400 },
  { day: "Fri", income: 350 },
  { day: "Sat", income: 500 },
];

export default function IncomeChart() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md h-70">
      <h3 className="text-lg font-semibold mb-3">This Week&apos;s Income</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={incomeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#10b981"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
