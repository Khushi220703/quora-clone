import React, { useState } from "react";

const NotificationSidebar = ({ setHeading, isDropdown }) => {
  const filters = [
    "All Notifications",
    "Stories",
    "Questions",
    "Spaces",
    "People Updates",
    "Comments and Mentions",
    "Upvotes",
    "Your Content",
    "Your Profile",
    "Announcements",
    "Earnings and Subscriptions",
  ];

  return (
    <>
      {isDropdown ? (
        <select
          className="w-full p-2 border rounded-lg bg-white text-gray-700 mb-4"
          onChange={(e) => setHeading(e.target.value)}
        >
          {filters.map((filter, index) => (
            <option key={index} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      ) : (
        <div className=" md:flex-row  min-h-screen font-sans">
          {/* Header */}
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Filter</h2>
          <div className="border-b border-gray-300 mb-4"></div>

          {/* Filter Options */}
          <ul className="space-y-2">
            {filters.map((filter, index) => (
              <li
                key={index}
                className="cursor-pointer text-gray-700 hover:text-red-500 hover:bg-gray-100 p-2 rounded-lg"
                onClick={() => setHeading(filter)}
              >
                {filter}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const NotificationPage = () => {
  const [heading, setHeading] = useState("All Notifications");

  const notifications = [
    {
      id: 1,
      title: "John Doe upvoted your answer",
      description: "Your answer to 'What is React?' received an upvote.",
      time: "2 hours ago",
      category: "Upvotes",
    },
    {
      id: 2,
      title: "New follower",
      description: "Alice started following you.",
      time: "3 hours ago",
      category: "People Updates",
    },
    {
      id: 3,
      title: "Question posted in your space",
      description: "A new question was posted in the 'Technology' space.",
      time: "5 hours ago",
      category: "Questions",
    },
    {
      id: 4,
      title: "Comment on your post",
      description: "Jane commented on your recent post.",
      time: "6 hours ago",
      category: "Comments and Mentions",
    },
    {
      id: 5,
      title: "Weekly digest available",
      description: "Check out this week's highlights from your network.",
      time: "1 day ago",
      category: "Announcements",
    },
  ];

  const filteredNotifications =
    heading === "All Notifications"
      ? notifications
      : notifications.filter((notification) => notification.category === heading);

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen font-sans ">
      {/* Sidebar or Dropdown */}
      <div className="w-full p-4 bg-white md:w-auto md:block md:ml-40 md:mt-8">
        <NotificationSidebar
          setHeading={setHeading}
          isDropdown={window.innerWidth < 768} // Show dropdown for small viewports
        />
      </div>

      {/* Notifications */}
      <div className=" p-4 md:p-8 w-2/4">
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">{heading}</h1>

        {/* Notifications List */}
        {filteredNotifications.length > 0 ? (
          <div className="divide-y divide-gray-300">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className="bg-white p-4 hover:bg-gray-50 transition duration-200"
              >
                <h3 className="font-semibold text-lg text-gray-800">
                  {notification.title}
                </h3>
                <p className="text-gray-600">{notification.description}</p>
                <span className="text-sm text-gray-500">{notification.time}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p>No notifications available for {heading}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPage;
