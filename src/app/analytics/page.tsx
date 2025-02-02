import Link from "next/link";

export default function Analytics() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-60 bg-white shadow-md p-4 fixed h-screen">
        <h1 className="text-xl font-bold">RANA</h1>
        <nav className="mt-4">
          <ul>
            <li className="p-2 bg-blue-500 text-white rounded-md">
              <Link href="/">Home</Link>
            </li>
            <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <Link href="/analytics">Analytics</Link>
            </li>
            <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <Link href="/settings">Settings</Link>
            </li>
            <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <Link href="/user-profile">User Profile</Link>
            </li>
          </ul>
        </nav>
      </aside>

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

        {/* Main content below header */}
        <main className="p-6 pt-20">
          <h2 className="text-2xl font-semibold mb-4">Analytics Page</h2>
          <p>Overview

              The Analytics page provides key insights into user activity, business performance, and engagement trends. It features visually appealing data representations, making it easy to track progress and make data-driven decisions.
              Key Features
              📊 Summary of Key Metrics

              A compact overview of crucial performance indicators, such as:

                  Total Users: The number of active users over a given period.
                  Engagement Rate: A measure of how frequently users interact with the platform.
                  Conversion Rate: The percentage of users completing key actions.
                  Revenue Trends: A quick snapshot of earnings and growth.

              📈 Data Visualization

              To enhance user experience, the Analytics page includes interactive charts with dummy data, offering valuable insights at a glance:

                  Bar Chart: Represents revenue trends over time.
                  Pie Chart: Displays user activity distribution (e.g., Morning, Afternoon, Evening).
                  Line Chart: Tracks order trends and variations in engagement.
                  Geo Chart: Highlights user locations and regional performance (optional).

              📌 Recent Activity Log

              A dynamic feed showcasing the latest user actions, such as:

                  Recent sign-ups or logins.
                  Transactions or purchases made.
                  Feature interactions (e.g., settings updates, dashboard visits).

              📱 Responsive & Interactive Design

              The Analytics page is fully responsive, ensuring a seamless experience across desktop, tablet, and mobile devices. The charts and data points update dynamically to enhance readability and usability.
          </p>
          {/* You can add more content here */}
        </main>
      </div>
    </div>
  );
}
