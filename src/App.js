import React, { useState, useEffect } from "react";
import Navbar from "./component/navbar";
import Header from "./component/Header";
import Caron from "./component/carousel";
import Home from "./Pages/homePage";
import Footer from "./component/Footer";

const App = () => {
  return <>
  <Navbar/>
  <Caron/>
  <Home/>
  <Footer/>
  </>;
}

export default App;