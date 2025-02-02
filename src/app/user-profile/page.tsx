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
          <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
          <p>
          Overview

                The User Profile page allows users to view and manage their personal details, account settings, and activity history in one place. It features a clean and intuitive interface for seamless profile management.
                Key Features
                👤 Personal Information

                Users can update and view their profile details, including:

                    Profile Picture: Upload or change the profile picture.
                    Full Name: Edit display name.
                    Email Address: View or update the registered email.
                    Phone Number: Add or modify contact details.
                    Bio: Write a short description about themselves.

                📅 Recent Activity

                A quick overview of the latest user interactions on the dashboard, such as:

                    Last Login Details: Date, time, and device used.
                    Recent Transactions: List of recent purchases or subscriptions.
                    Feature Usage: Actions like settings updates, analytics visits, etc.

                🔒 Privacy & Security

                Users can manage their security settings directly from their profile, including:

                    Change Password: Secure their account with a new password.
                    Two-Factor Authentication (2FA): Enable an extra layer of protection.
                    Manage Connected Devices: View and log out from active sessions.

                🎨 Profile Customization

                Users can personalize their experience with:

                    Theme Preferences: Toggle between light and dark mode.
                    Dashboard Layout Settings: Customize widgets and content visibility.
          </p>
          {/* You can add more content here */}
        </main>
      </div>
    </div>
  );
}
