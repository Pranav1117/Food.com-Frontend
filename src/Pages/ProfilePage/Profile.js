import React from "react";
import NewNav from "../../Components/Navbar/NewNav";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <NewNav />
      <header>
        <div className="header-cover"></div>
        <div className="avatar-container">
          <div className="profile-photo-container"></div>
          <div className="join-data-container"></div>
        </div>
      </header>
    </>
  );
};

export default Profile;
