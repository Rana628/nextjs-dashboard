import Link from "next/link";
import { LineChart, PieChart, BarChart } from "./chart";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-60 bg-white shadow-md p-4 fixed h-screen">
        <h1 className="text-xl font-bold">RANA</h1>
        <nav className="mt-4">
          <ul>
            <li className="p-2 bg-blue-500 text-white rounded-md"><Link href="/">Home</Link></li>
            <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer"><Link href="/analytics">Analytics</Link></li>
            <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer"><Link href="/settings">Settings</Link></li>
            <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer"><Link href="/user-profile">User Profile</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      {/* Main Content */}
      <div className="flex-1 ml-60">
        {/* Header */}
        <header className="bg-white shadow-md p-2 flex justify-between items-center fixed w-full top-[-5px] left-0 z-10 h-12">
          {/* Left: Search Bar */}
          <div className="flex items-center space-x-2">
          <input
          type="text"
          className="px-3 py-1 border rounded-md text-sm"
          placeholder="Search..."
          />
          </div>

          {/* Right: Profile */}
          <div className="flex items-center space-x-3">
          <span className="font-medium text-sm">Profile</span>
          </div>
        </header>

      <main className="p-6 pt-20">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>

        {/* Charts Row */}
        <div className="w-full flex gap-4 mb-4">
          {/* Revenue Card (Bar Chart) */}
          <div className="w-[70%] h-[350px] bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-semibold">Revenue</h3>
            <p className="text-xl font-bold">IDR 7.852.000</p>
            <p className="text-green-500 text-md">▲ 2.1% vs last week</p>
            <div className="w-full h-[250px]">
              <BarChart data={[1, 2, 3, 4, 5, 6, 7]} />
            </div>
          </div>

          {/* Order Time (Pie Chart) */}
          <div className="w-[30%] h-[350px] bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-semibold">Order Time</h3>
            <div className="w-full h-[250px] flex justify-center items-center">
              <PieChart data={{ Afternoon: 40, Evening: 32, Morning: 28 }} />
            </div>
          </div>
        </div>

        {/* Second Row - Summary, Activity Log, Line Chart */}
        <div className="grid grid-cols-3 gap-4">
          {/* Summary of Key Metrics */}
          <div className="bg-white shadow-md rounded-md p-4">
            <h4 className="text-md font-semibold mb-2">Summary of Key Metrics</h4>
            <p className="text-sm text-gray-600">
              User acquisition, active users, conversion rate, session duration, ARPU, CLTV, engagement rate, bounce rate, churn rate, and KPIs.
            </p>
          </div>

          {/* Recent Activity Log */}
          <div className="bg-white shadow-md rounded-md p-4">
            <h4 className="text-md font-semibold mb-2">Recent Activity Log</h4>
            <p className="text-sm text-gray-600 mb-2">Displaying recent actions taken by users</p>

            {/* Activity List */}
            {[
              { item: "Fresh Salad Bowl", price: "IND 4,025", color: "bg-red-400" },
              { item: "Chicken Noodles", price: "IND 3,500", color: "bg-blue-400" },
              { item: "Smoothie Fruits", price: "IND 2,800", color: "bg-green-400" },
              { item: "Hot Chicken Wings", price: "IND 3,750", color: "bg-yellow-400" },
            ].map((activity, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <div className="flex items-center space-x-2">
                  <span className={`w-6 h-6 ${activity.color} rounded-full`}></span>
                  <p className="text-sm text-gray-600">{activity.item}</p>
                </div>
                <span className="text-sm">{activity.price}</span>
              </div>
            ))}
          </div>



          {/* Line Chart */}
          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-semibold">Order Trends</h3>
            <div className="w-full h-[250px]">
              <LineChart data={[1, 2, 3, 4, 5, 6, 7]} />
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
}
