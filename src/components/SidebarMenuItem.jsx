
import React from "react";
import "../styles/sidebar.css";

export default function SidebarMenuItem({ icon: Icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`sidebar-menu-item ${active ? "sidebar-menu-item-active" : ""}`}
    >
      <Icon className="sidebar-icon" />
      <span className="sidebar-label">{label}</span>
    </div>
  );
}