import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import closeIcon from "../../Assets/cancel_8618474.png";
import fbIcon from "../../Assets/Auth/fb.png";
import gmailIcon from "../../Assets/Auth/gmail.jpeg";
import { useState } from "react";
import axios from "axios";

const Register = (props) => {
  const [user, setUser] = useState({
    email: null,
    password: null,
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(user);
    // const token = localStorage.getItem("token");
    // axios.defaults.headers.common["Authorization"] = `Bearer `;
    const resp = await axios.post("http://localhost:5050/register", user);
    console.log(resp);
    if ((resp.data.msg = "User registred successfully")) {
      props.closeFunc();
      localStorage.setItem("token", resp.data.token);
    }
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="register-container">
        <div className="close-btn-wrapper">
          <img onClick={props.closeFunc} alt="close button" src={closeIcon} />
        </div>

        <div className="register-form-container">
          <h2>CREATE AN ACOUNT</h2>

          <p className="register-desc-txt">
            Save recipes across devices, write reviews, and share your own
            photos
          </p>

          <form className="auth-form login-form register-form">
            <label>EMAIL</label>
            <input
              type="email"
              onChange={onChange}
              name="email"
              placeholder="your@email.com"
            />
            <div className="err-msg">{""}</div>
            <label>PASSWORD</label>
            <input
              type="password"
              onChange={onChange}
              name="password"
              placeholder="Password"
            />
            <div className="err-msg"> </div>

            <div className="terms">
              {" "}
              <input type="checkbox" />
              <p>
                By creating an account, you agree to the Terms of Use and have
                read our Privacy Policy. Discovery and its affiliates may use
                your email address to provide updates, ads, and offers. You can
                opt out or learn more about your rights via the Privacy Policy.
              </p>
            </div>

            <button onClick={handleClick}>CREATE ACCOUNT</button>
          </form>
        </div>

        <Link className="forgot-pass">FORGOT PASSWORD?</Link>

        <div className="auth-socials-container">
          <p className="continue-txt"> OR CONTINUE WITH</p>
          <div className="icons-container">
            <Link>
              <img src={fbIcon} alt="Icon" />
            </Link>
            <Link>
              <img src={gmailIcon} alt="Icon" />
            </Link>
          </div>

          <div className="bottom-section">
            <p>Already Member?</p>
            <Link onClick={props.toggleLogin}>Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;