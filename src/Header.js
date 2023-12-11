import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header_icon" fontSize="large" />
      </IconButton>

      <img
        className="header_logo"
        src="https://w7.pngwing.com/pngs/698/493/png-transparent-tinder-hd-logo-thumbnail.png"
        alt="tinder logo"
      />

      <IconButton>
        <ForumIcon className="header_icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
