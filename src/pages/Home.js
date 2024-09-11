import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Flavors Of India</h1>
          <p>
            Embark on a culinary journey <br/> through India's diverse and vibrant<br/>
            cuisine, where every bite<br/> tells a story of rich tradition,<br/> bold
            spices, and unforgettable flavors.
          </p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
