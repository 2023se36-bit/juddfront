
import { FaGavel } from "react-icons/fa";
import { useEffect, useState } from "react";
import "../styles/sidebar.css"
import { getLogo } from "../apis/api"; 

export default function SidebarHeader() {
  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        setLoading(true);
        const data = await getLogo();
        
        if (data.success && data.logo) {
          setLogo(data.logo);
        }
      } catch (error) {
        console.error("Failed to fetch logo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogo();
  }, []);

  return (
    <div className="sidebar-header">
      {loading ? (
        <div className="sidebar-logo-placeholder">
          <FaGavel className="sidebar-default-icon" />
        </div>
      ) : logo ? (
        <img src={logo} alt="Court Logo" className="sidebar-logo" />
      ) : (
        <FaGavel className="sidebar-default-icon" />
      )}
      <h2 className="sidebar-title">Personnel's Office</h2>
    </div>
  );
}