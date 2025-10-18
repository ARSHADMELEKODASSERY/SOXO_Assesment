import React from "react";
import "./Admin.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Admin Panel</h2>
        <ul className="menu">
          <li>Dashboard</li>
          <li>Users</li>
          <li>Reports</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1>Welcome, Admin 👋</h1>
        </header>

        <section className="stats">
          <div className="card">
            <h3>Total Users</h3>
            <p>100</p>
          </div>
          <div className="card">
            <h3>Active Projects</h3>
            <p>10</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>$50,500</p>
          </div>
        </section>

        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>New user registered: ARSHAD</li>
            <li>Project "Soxo" updated</li>
            <li>Payment received from Client X</li>
            <li>User is active</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
