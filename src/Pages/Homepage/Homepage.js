import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import FootSearch from "../../Components/Footer Search/FootSearch";
import Footer from "../../Components/Footer/Footer";
import mainImg from "../../Assets/Homepage/Title Image/homepage-main-image.webp";
import craving1 from "../../Assets/Homepage/Craving images/craving-1.webp";
import craving2 from "../../Assets/Homepage/Craving images/craving-2.webp";
import craving3 from "../../Assets/Homepage/Craving images/craving-3.webp";
import explore1 from "../../Assets/Homepage/Explore more images/explore-1.webp";
import explore2 from "../../Assets/Homepage/Explore more images/explore-2.webp";
import explore3 from "../../Assets/Homepage/Explore more images/explore-3.webp";
import explore4 from "../../Assets/Homepage/Explore more images/explore-4.webp";
import explore5 from "../../Assets/Homepage/Explore more images/explore-5.webp";
import explore6 from "../../Assets/Homepage/Explore more images/explore-6.webp";
import trending1 from "../../Assets/Homepage/Trending now images/trending-1.webp";
import trending2 from "../../Assets/Homepage/Trending now images/trending-2.webp";
import trending3 from "../../Assets/Homepage/Trending now images/trending-3.webp";
import trending4 from "../../Assets/Homepage/Trending now images/trending-4.webp";
import dontmiss1 from "../../Assets/Homepage/Dont miss images/dontmiss-1.webp";
import dontmiss2 from "../../Assets/Homepage/Dont miss images/dontmiss-2.webp";
import dontmiss3 from "../../Assets/Homepage/Dont miss images/dontmiss-3.webp";
import moreideas1 from "../../Assets/Homepage/More Ideas images/moreideas-1.webp";
import moreideas2 from "../../Assets/Homepage/More Ideas images/moreideas-2.webp";
import moreideas3 from "../../Assets/Homepage/More Ideas images/moreideas-3.webp";
import moreideas4 from "../../Assets/Homepage/More Ideas images/moreideas-4.webp";
import peeches from "../../Assets/Homepage/Peeches/peeches.webp";

import { Link } from "react-router-dom";
import "./homepage.css";
import Login from "../../Components/Authentication/Login";
import Register from "../../Components/Authentication/Register";
import NewNav from "../../Components/Navbar/NewNav";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../Feautes/Slice";

const Homepage = () => {
  const dispatch = useDispatch();

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [comments, setComments] = useState(null);

  const showAuth = () => {
    setShowLogin(true);
  };

  const toggleReg = () => {
    setShowRegister(true);
  };
  const toggleLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const closeAuth = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const checkLoggedIn = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const resp = await axios("http://localhost:5050/checkloggedin");

    console.log(resp);
    dispatch(setIsLoggedIn(resp.data.isLoggedIn));
  };

  function getRandomNumber() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomFraction = Math.random();

    // Scale the randomFraction to the desired range (0 to 11)
    const randomNumber = Math.floor(randomFraction * 12);

    return randomNumber;
  }
  const randomNum = getRandomNumber();

  const fetchComments = async () => {
    try {
      const resp = await axios.get("http://localhost:5050/getcomments");
      // console.log(resp.data);
      setComments(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  // for (let i = 0; data.length > 4; i++) {}

  useEffect(() => {
    checkLoggedIn();
    fetchComments();
  }, []);

  return (
    <>
      {/* <Navbar func={showAuth} showLogin={false} /> */}
      <NewNav />
      <main>
        <div className="main-post-container">
          <div className="main-post-wrapper">
            <div className="main-img-wrapper">
              <img src={mainImg} alt="Grilled Chicken"></img>
              <div className="main-post-title-wrapper">
                <h1>10 Grilled Chicken Recipes</h1>
                <Link to="/recipe?q=grilled chicken">SEE THEM ALL</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="below-main-ad-container"></div>

        {/* <div className="comments-container">
          <div className="comments-section-title">
            <h2>FRESH FROM OUR COMMUNITY</h2>
            <Link>View All</Link>
          </div>
          <div className="comments-wrapper">
            {comments
              ? comments
                  .splice(randomNum + 1, randomNum + 2)
                  .map((item, index) => {
                    return (
                      <div className="comments-card" key={index}>
                        <p>{item.user} commented</p>
                      </div>
                    );
                  })
              : "No Comments"}
          </div>
        </div> */}

        <div className="craving-container">
          <div className="craving-title">
            <h2>WHAT WE ARE CRAVING</h2>
          </div>
          <div className="craving-imgs-wrapper">
            <div className="craving-imgs">
              <Link to="/recipe?q=freezer friendly">
                <img src={craving1} alt="freezer friendly meals" />
                <div className="craving-title-wrapper">
                  <p className="collection">COLLECTION</p>
                  <p className="craving-title">10 FREEZER FRIENDLY MEALS</p>
                </div>
              </Link>
            </div>
            <div className="craving-imgs">
              <Link to="/recipe?q=kids lunch">
                <img src={craving2} alt="Lunch for Kids" />
                <div className="craving-title-wrapper">
                  <p className="">COLLECTION</p>
                  <p className="craving-title">10 LUNCH IDEAS FOR KIDS</p>
                </div>
              </Link>
            </div>

            <div className="craving-imgs">
              <Link to="/recipe?q=corn">
                <img src={craving3} alt="Corn Recipes" />
                <div className="craving-title-wrapper">
                  <p className="">COLLECTION</p>
                  <p className="craving-title">10 BEST CORN RECIPES</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="explore-more-container">
          <h2>EXPLORE MORE</h2>
          <div className="explore-more-img-wrapper">
            <div>
              <Link to="/recipe?q=grilling and bbq">
                <img src={explore1} alt="BBQ & GRILLING DISH" />
                <p className="explore-more-dishes">GRILLING & BBQ</p>
              </Link>
            </div>
            <div>
              <Link to="/recipe?q=international eats">
                <img src={explore2} alt="INTERNATIONAL EATS" />
                <p className="explore-more-dishes">INTERNATIONAL EATS</p>
              </Link>
            </div>{" "}
            <div>
              <Link to="/recipe?q=breakfast and brunch">
                <img src={explore3} alt="BREAKFAST & BRUNCH" />
                <p className="explore-more-dishes">BREAKFAST & BRUNCH</p>
              </Link>
            </div>{" "}
            <div>
              <Link to="/recipe?q=community picks">
                <img src={explore4} alt="COMMUNITY PICKS" />
                <p className="explore-more-dishes">COMMUNITY PICKS</p>
              </Link>
            </div>{" "}
            <div>
              <Link to="/recipe?q=quick and easy">
                <img src={explore5} alt="QUICK & EASY" />
                <p className="explore-more-dishes">QUICK & EASY</p>
              </Link>
            </div>{" "}
            <div>
              <Link to="/recipe?q=copycat">
                <img src={explore6} alt="COPYCAT RECIPES" />
                <p className="explore-more-dishes">COPYCAT RECIPES</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="below-explore-ad-container"></div>

        <div className="trending-now-container">
          <div className="trending-title">
            <h2>TRENDING NOW</h2>
            <Link>View All</Link>
          </div>

          <div className="trending-imgs-wrapper">
            <div className="trending-imgs">
              <Link>
                <img src={trending1} alt="PINEAPPLE ZUCCHINI BREAD" />
                <p>PINEAPPLE ZUCCHINI BREAD</p>
              </Link>
            </div>

            <div className="trending-imgs">
              <Link>
                <img src={trending2} alt="SPICY BROCCLI-CHEDDER SOUP" />
                <p>SPICY BROCCLI-CHEDDER SOUP</p>
              </Link>
            </div>

            <div className="trending-imgs">
              <Link>
                <img src={trending3} alt="QUICK & EASY CHICKEN ENCHILADAS" />
                <p>QUICK & EASY CHICKEN ENCHILADAS</p>
              </Link>
            </div>

            <div className="trending-imgs">
              <Link>
                <img src={trending4} alt="GLUTEN FREE LEMONADE SCONES" />
                <p>GLUTEN FREE LEMONADE SCONESS</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="dont-miss-container">
          <div className="dont-miss-title">
            <h2>DON'T MISS</h2>
          </div>
          <div className="dont-miss-imgs-wrapper">
            <div className="dont-miss-imgs">
              <Link to="/recipe?q=summer salads">
                <img src={dontmiss1} alt="freezer friendly meals" />
                <div className="dont-miss-title-wrapper">
                  <p className="collection">COLLECTION</p>
                  <p className="dont-miss-title">10 SUMMER SALADS</p>
                </div>
              </Link>
            </div>
            <div className="dont-miss-imgs">
              <Link to="/recipe?q=cucumber">
                <img src={dontmiss2} alt="Lunch for Kids" />
                <div className="dont-miss-title-wrapper">
                  <p className="">COLLECTION</p>
                  <p className="dont-miss-title">10 COOL CUCUMBER RECIPES</p>
                </div>
              </Link>
            </div>

            <div className="dont-miss-imgs">
              <Link to="/recipe?q=one pot">
                <img src={dontmiss3} alt="Corn Recipes" />
                <div className="dont-miss-title-wrapper">
                  <p className="">COLLECTION</p>
                  <p className="dont-miss-title">10 EASY ONE POT MEALS</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="more-ideas-now-container">
          <div className="more-ideas-title">
            <h2>MORE IDEAS</h2>
            <Link>View All</Link>
          </div>

          <div className="more-ideas-imgs-wrapper">
            <div className="more-ideas-imgs">
              <Link>
                <img src={moreideas1} alt="CHICKEN TIKKA MASALA" />
                <p>CHICKEN TIKKA MASALA</p>
              </Link>
            </div>

            <div className="more-ideas-imgs">
              <Link>
                <img src={moreideas2} alt="VEGAN BACON" />
                <p>VEGAN BACON</p>
              </Link>
            </div>

            <div className="more-ideas-imgs">
              <Link>
                <img src={moreideas3} alt="COPYCAT MC DONALD'S BIG MAC SAUCE" />
                <p>COPYCAT MC DONALD'S BIG MAC SAUCE</p>
              </Link>
            </div>

            <div className="more-ideas-imgs">
              <Link>
                <img src={moreideas4} alt="DIRT SHRIMP IN BUTTER BEER SAUCE" />
                <p>DIRTY SHRIMP IN BUTTER BEER SAUCE</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="below-more-ideas-ad-container"></div>

        <div className="peel-peaches-container">
          <div className="peech-img-wrapper">
            <img src={peeches} alt="HOW TO PEEL PEACHES" />
          </div>
          <div className="peech-desc-wrapper">
            <p>COLLECTION</p>
            <h3>HOW TO PEEL PEACHES,3 WAYS</h3>
            <p className="peeling-desc">
              There’s more than one way to peel a peach! Here are three ways to
              get the job done.
            </p>
          </div>
        </div>
      </main>
      {showLogin && <Login func={closeAuth} toggle={toggleReg} />}
      {showRegister && <Register func={closeAuth} toggle={toggleLogin} />}
      <FootSearch />
      <Footer />
    </>
  );
};

export default Homepage;
