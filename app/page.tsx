'use client'
import { motion } from "framer-motion";
import CardStats from "@/app/components/CardStats";
import IssuanceBarChart from "@/app/components/IssuanceBarChart";
import IncomeChart from "@/app/components/IncomeChart";
import PieChartStatus from "@/app/components/PieChartStatus";
import RequestTable from "@/app/components/RequestTable";
import { FaCreditCard } from "react-icons/fa"; 

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-6">Hi Emmanuel, what would you like to do today?</h1>

      {/* Quick Access */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {['Manage a Card', 'Issue Instant Card', 'Issue Personalized Card', 'Review Card Requests'].map((label, idx) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={idx}
            className="bg-white shadow-md p-4 rounded-xl text-center text-sm font-medium text-blue-600 border border-blue-100 flex flex-col items-center justify-center"
          >
            <FaCreditCard className="text-2xl mb-2 flex items-center justify-center" />
            {label}
          </motion.button>
        ))}
      </div>

      {/* Analytics Cards */}
      <CardStats />

      <div className="grid grid-cols-2 gap-6 mt-6">
        <IssuanceBarChart />
        <IncomeChart />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <RequestTable />
        <PieChartStatus />
      </div>
    </div>
  );
}
