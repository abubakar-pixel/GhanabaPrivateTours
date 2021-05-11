import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./icon-font.css";
// import TourGuides from "./pages/TourGuides";
// import Navigation from "./components/Navigation";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Popup from "./components/Popup";
import HomePage from "./components/RoutingPath";

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
    {/* <TourGuides /> */}
    {/* <Navigation />
    <Header />
    <Main />
    <Footer />
    <Popup /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
