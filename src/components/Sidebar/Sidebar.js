import React, { useState } from "react";
import "./Sidebar.css";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Sidebar = () => {
  const [isSidebar, setisSidebar] = useState(false);

  //TOGGLE SIDEBAR
  const handleMouseOverSideBar = () => {
    setisSidebar(true);
  };
  const handleMouseOutSideBar = () => {
    setisSidebar(false);
  };
  return (
    <div
      className={`sidebar ${isSidebar ? "sidebar-hover" : ""}`}
      onMouseOver={handleMouseOverSideBar}
      onMouseOut={handleMouseOutSideBar}
      style={{ width: isSidebar ? "250px" : "80px" }}
    >
      <div
        className={`sidebar-item active-item ${
          isSidebar ? "sidebar-active-item" : ""
        }`}
      >
        <LightbulbOutlinedIcon style={{ marginLeft: "47" }} />
        <span className="sidebar-text">Notes</span>
      </div>

      <div className="sidebar-item">
        <NotificationsNoneOutlinedIcon style={{ marginLeft: "47" }} />
        <span className="sidebar-text">Reminders</span>
      </div>

      <div className="sidebar-item">
        <EditOutlinedIcon style={{ marginLeft: "47" }} />
        <span className="sidebar-text">Edit Labels</span>
      </div>
      <div className="sidebar-item">
        <ArchiveOutlinedIcon style={{ marginLeft: "47" }} />
        <span className="sidebar-text">Archive</span>
      </div>

      <div className="sidebar-item">
        <DeleteOutlineOutlinedIcon style={{ marginLeft: "47" }} />
        <span className="sidebar-text">Trash</span>
      </div>
    </div>
  );
};
export default Sidebar;