import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer.js";
import { Switch, Route, Redirect } from "react-router-dom";

// Services Sub Pages
import WebDev from "./Pages/SubServicesPage/WebDev";
import BlockChain from "./Pages/SubServicesPage/BlockChain";
import AppDev from "./Pages/SubServicesPage/AppDev";
import IotApp from "./Pages/SubServicesPage/IotApp";
import CloudApp from "./Pages/SubServicesPage/CloudApp";
import AppMarket from "./Pages/SubServicesPage/AppMarket";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        {/* Services Sub Pages */}
        <Route exact path="/block-chain-dev" component={BlockChain} />
        <Route exact path="/web-dev" component={WebDev} />
        <Route exact path="/app-dev" component={AppDev} />
        <Route exact path="/iot-app" component={IotApp} />
        <Route exact path="/cloud-app" component={CloudApp} />
        <Route exact path="/app-marketing" component={AppMarket} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
