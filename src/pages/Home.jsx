import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Home.scss";
import bannerImg from "../assets/img/_Section 1.png";

const Home = () => {
  return (
    <div className="home">
      {/* Bannière */}
      <section className="home__banner">
        <img src={bannerImg} alt="Bannière" className="home__banner-img" />
        <h1 className="home__banner-text">Chez vous, partout et ailleurs</h1>
      </section>

      {/* Grille de logements */}
      <section className="home__grid">
        <Link to="/logement" className="card">
          Titre de la location
        </Link>
        <Link to="/logement" className="card">
          Titre de la location
        </Link>
        <Link to="/logement" className="card">
          Titre de la location
        </Link>
        <Link to="/logement" className="card">
          Titre de la location
        </Link>
        <Link to="/logement" className="card">
          Titre de la location
        </Link>
        <Link to="/logement" className="card">
          Titre de la location
        </Link>
      </section>
    </div>
  );
};

export default Home;