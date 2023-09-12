import Homepage from "./Pages/Homepage/Homepage";
import Router from "./Routes/Router";
import './style.css'
import FootSearch from "./Components/Footer Search/FootSearch";
import Footer from "./Components/Footer/Footer";
import NewNav from "./Components/Navbar/NewNav";
import Login from "./Components/Authentication/Login";

function App() {
  return (
    <>
    <NewNav/>
        
        <Homepage />

      <FootSearch/>
      <Footer/>
    </>
  );
}

export default App;
