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
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <p>
          Overview

                The Settings page allows users to personalize their dashboard experience by managing account preferences, notifications, and security settings. It provides a user-friendly interface with easy-to-use controls for seamless customization.
                Key Features
                👤 Account Settings

                Users can update their personal details, including:

                    Profile Picture: Upload or change the profile picture.
                    Username & Email: Edit display name and contact email.
                    Language Preferences: Choose a preferred language for the dashboard.

                🔔 Notification Preferences

                Users can control how they receive updates by toggling notification settings:

                    Email Notifications: Receive alerts for activity, updates, and reminders.
                    Push Notifications: Enable or disable push notifications on different devices.
                    Activity Alerts: Get notified about login attempts, purchases, or account changes.

                🔒 Security & Privacy

                Ensuring user data safety is a priority. Users can:

                    Change Password: Update their password with security guidelines.
                    Two-Factor Authentication (2FA): Enable or disable additional login security.
                    Login History: View recent logins and recognize any unauthorized access.

                🎨 Appearance & Theme

                Users can personalize the dashboard’s look and feel by choosing:

                    Light / Dark Mode: Toggle between light and dark themes.
                    Custom Color Schemes: Select a preferred color palette for the interface.
          </p>
          {/* You can add more content here */}
        </main>
      </div>
    </div>
  );
}
