import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel1111@gmail.com",
    address: "Kingston, 5236, United States",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user changes (mock logic here)
    console.log("User information updated:", user);
  };

  return (
    <div className="profile">
      <h1 className="ml-4 md:ml-10"> Home / My Account</h1>

      <div className="flex flex-col md:flex-row p-4 md:p-10">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 md:pr-10 mb-6 md:mb-0">
          <h2 className="font-semibold text-lg mb-4">Manage My Account</h2>
          <ul className="space-y-4">
            <li className="text-red-500 font-bold">My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
            <li>My Orders</li>
            <li>My Returns</li>
            <li>My Cancellations</li>
            <li>My Wishlist</li>
          </ul>
        </aside>

        {/* Profile Form */}
        <main className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-500 mb-6">Edit Your Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Address</label>
                <input
                  type="text"
                  name="address"
                  value={user.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            {/* Password Change */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Password Changes</h3>
              <div>
                <label className="block mb-2 font-semibold">Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={user.currentPassword}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={user.newPassword}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-2 bg-gray-200 rounded-md text-gray-700 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 rounded-md text-white font-semibold"
              >
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Profile;
