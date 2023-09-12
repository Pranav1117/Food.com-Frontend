import React, { useEffect, useState } from "react";
import NewNav from "../../Components/Navbar/NewNav";
import { useLocation } from "react-router-dom";
import { fetchRecipeDetails } from "../../Utilities/utilities";
import "./recipeDetail.css";
import { Link } from "react-router-dom";
import FootSearch from "../../Components/Footer Search/FootSearch";
import Footer from "../../Components/Footer/Footer";
import userIcon from "../../Assets/DetailPage/icon.png";
import saveIcon from "../../Assets/DetailPage/saved-icons.png";
import downloadIcon from "../../Assets/DetailPage/download-icon.webp";
import printIcon from "../../Assets/DetailPage/print-icon.jpg";
import shareIcon from "../../Assets/DetailPage/share-icon.png";
import cameraIcon from "../../Assets/DetailPage/camera-icon.png";
import axios from "axios";

const RecipeDetails = () => {
  const [data, setData] = useState(null);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  //  getting query params from url
  const query = queryParams.get("q");

  console.log(query);

  const handleSaveRecipe = async (recipe) => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios.put("http://localhost:5050/saverecipe", recipe).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    fetchRecipeDetails(query).then((res) => {
      console.log(res);
      setData(res.hits);
    });
  }, []);
  console.log(data);
  return (
    <>
      <NewNav />

      <div className="yellow-container">
        <div>
          <Link>PREVIOUS RECIPE</Link>
          <Link>NEXT RECIPE</Link>
        </div>
      </div>
      {data ? (
        <div className="detail-main-container">
          <div className="detail-wrapper">
            <div className="title-wrapper">
              <p>
                <Link>Recipe</Link> \<Link>{data[0].recipe.dishType}</Link>
              </p>
              <h2>{data[0].recipe.label}</h2>
              <p></p>
            </div>

            <div className="submitted-wrapper">
              <div>
                <img src={userIcon} alt="Icon" />
                <p>Submitted By {data[0].recipe.source}</p>
              </div>
            </div>

            <div className="save-download-wrapper">
              <div className="saved-print-wrapper">
                <img
                  onClick={() => {
                    handleSaveRecipe(data[0].recipe);
                  }}
                  src={saveIcon}
                  alt="Icon"
                />
                <img src={downloadIcon} alt="Icon" />
                <img src={printIcon} alt="Icon" />
                <img src={shareIcon} alt="Icon" />
              </div>

              <div className="i-made-this-wrapper">
                <img src={cameraIcon} alt="icon" />
                <p>I made This</p>
              </div>
            </div>

            <div className="imgs-wrapper">
              <div className="big-img-wrapper">
                <img
                  src={data[0].recipe.images.REGULAR.url}
                  alt={data[0].recipe.label}
                />
              </div>

              <div className="small-imgs-wrapper">
                <img
                  src={data[0].recipe.images.SMALL.url}
                  alt={data[0].recipe.label}
                />
                <img
                  src={data[0].recipe.images.SMALL.url}
                  alt={data[0].recipe.label}
                />
                <img
                  src={data[0].recipe.images.SMALL.url}
                  alt={data[0].recipe.label}
                />
              </div>
            </div>

            <div className="ready-in-wrapper">
              <div className="">
                <div>
                  <p>Ready In:{data[0].recipe.totalTime} min</p>

                  <p className="ingredients-wrapper"></p>
                </div>

                <div>
                  <p>Serve</p>
                </div>
              </div>

              <div className="Nutrients-info-wrapper">
                <p>Sees</p>
              </div>
            </div>

            <div className="direction-ingredient-wrapper">
              <div className="direction-wrapper"></div>
              <div className="ingredient-wrapper"></div>
            </div>
          </div>

          <div className="ad-container">
            <div className="social-icons"></div>
            <div className="ad-wrapper"></div>
          </div>
        </div>
      ) : (
        "Loading"
      )}

      <FootSearch />
      <Footer />
    </>
  );
};

export default RecipeDetails;
