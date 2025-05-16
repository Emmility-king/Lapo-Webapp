
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  children: ReactNode;
};

const sidebarLinks = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Cards", path: "/cards" },
  { name: "Branches", path: "/branches" },
  { name: "Card Request", path: "/card-request" },
  { name: "Card Fulfilment", path: "/card-fulfilment" },
  { name: "Card Print", path: "/card-print" },
  { name: "Stock", path: "/stock" },
  { name: "Authorization", path: "/authorization" },
  { name: "User", path: "/user" },
  { name: "Account", path: "/account" },
];

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4 space-y-2 hidden md:block">
        <h2 className="text-xl font-bold mb-6 text-blue-700">LAPO</h2>
        <nav className="flex flex-col gap-3">
          {sidebarLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t">
          <button className="text-red-500 font-medium hover:text-red-700 transition">Logout</button>
        </div>
      </aside>

      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed bottom-4 right-4 z-10">
        <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold">Hi Nazeer, what would you like to do today?</h1>
            <p className="text-sm text-gray-500">Last login: 23/01/24 - 14:30:58</p>
          </div>
          <div className="text-sm text-gray-500 mt-2 md:mt-0">Today is Friday, 17 May 2024</div>
        </div>

        {/* Quick Access */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            "Manage a Card",
            "Issue Instant Card",
            "Issue Personalized Card",
            "Review Card Requests",
          ].map((action, idx) => (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition text-center"
            >
              {action}
            </motion.button>
          ))}
        </div>

        {/* Main content area */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
