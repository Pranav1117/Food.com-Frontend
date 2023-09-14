import React, { useEffect, useState } from "react";
import NewNav from "../../Components/Navbar/NewNav";
import "./profile.css";
import avatar from "../../Assets/Nav-buttons-icons/user-icon.jpg";
import axios from "axios";

const Profile = () => {
  const [date, setDate] = useState(null);
  const [name, setName] = useState(null);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const resp = await axios("https://food-com-backend.onrender.com/getuserdata");
    console.log(resp.data.User.createdAt.split("T")[0]);
    setDate(resp.data.User.createdAt.split("T")[0]);
    setName(resp.data.User.email.split("@")[0]);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <NewNav />
      <div className="profile-main-container">
        <header className="profile-header">
          <div className="header-cover"></div>

          <div className="avatar-container">
            <div className="profile-photo-container">
              <div className="profile-avatar">
                <img src={avatar} alt="User Profile" />
                <p>@{name && name}</p>
              </div>

              <div className="followers-wrapper">
                <div className="followers">
                  <p>FOLLOWERS</p>
                  <p>0</p>
                </div>
                <hr />
                <div className="following">
                  <p>FOLLOWING</p>
                  <p>0</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="join-data-container">
              <p>Joined {date && date}</p>
            </div>
          </div>
        </header>

        <div className="activity-container">
          <div className="filters-wrapper">
            <p className="filter-title">Filters</p>
            <ul>
              <li>Activity</li>
              <li>Recipes</li>
              <li>Photos</li>
              <li>Reviews</li>
              <li>Tweaks</li>
              <li>Questions</li>
              <li>Following</li>
              <li>Followers</li>
            </ul>
          </div>
          <div className="all-activity-wrapper">
            <p>All Activity</p>
            <div className="activity-list">
              <h3>UH OH</h3>
              <p>Looks like has no activity</p>
            </div>
          </div>
          <div className="profile-ad-container"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
