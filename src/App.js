import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Holder from "./components/ImageHolder/Holder";
import Logo from "./images/grady_logo.png";
import { BsBag } from "react-icons/bs";
import Bottle from "./images/cold_brew_greed.png";
import Slider from "./components/Slider/Slider";
import Offer from "./components/Offer/Offer";
import Can from "./images/brew_can.png";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="app">
      <div className="row">
        <div className="col-md-6">
          <Header />

          <div className="heading__main mt-5">
            <div className="container__img">
              <img src={Logo} alt="logo" className="title__image__logo" />
            </div>

            <h1 className="heading__title">
              COLD <br />
              BREW
            </h1>

            <button className="coffee">COFFEE CONCENTRATE</button>

            <div className="price">
              <span className="price__number">$ 60.00</span>
              <span className="price__logo">
                <BsBag />
              </span>
            </div>
            <din className="content my-5">
              A New concentrate cold brew with Concentrate <br />
              Ready to Drink,and Brew-it-Yourself products available <br />
              nationwide.Enjoy the perfect batch of cold.
            </din>
          </div>
        </div>
        <div className="col-md-6 px-0">
          <Holder image={Bottle} reverse="false" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Slider reverse="false" />
        </div>
        <div className="col-md-6">
          <Offer />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Holder image={Can} reverse="true" />
        </div>
        <div className="col-md-6">
          <div className="heading__main mt-5">
            <div className="container__img">
              <img src={Logo} alt="logo" className="title__image__logo" />
            </div>

            <h1 className="heading__title">
              COLD <br />
              BREW
            </h1>

            <button className="coffee">COFFEE CONCENTRATE</button>

            <div className="price">
              <span className="price__number">$ 13.00</span>
              <span className="price__logo">
                <BsBag />
              </span>
            </div>
            <din className="content my-5">
              Grady's Cold Brew Bean Bags are a Brew It Yourself kit <br />
              that lets anyone make cold-brewed iced coffee fresh <br />
              at hpme. The Bean Bags are uper-easy.
            </din>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="details content p-5">
            Phone :{" "}
            <b>
              (718)860-1600 <br />
            </b>
            Redesign of this website <br />
            <a
              href="https://www.gradyscoldbrew.com/collections/shop-online"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "red" }}
            >
              Click to see original
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <Slider reverse="true" />
        </div>
      </div>
      <hr style={{ color: "grey" }} />
      <Footer />
    </div>
  );
}

export default App;
