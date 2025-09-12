import React from "react";
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
        <div className="card">Titre de la location</div>
        <div className="card">Titre de la location</div>
        <div className="card">Titre de la location</div>
        <div className="card">Titre de la location</div>
        <div className="card">Titre de la location</div>
        <div className="card">Titre de la location</div>
      </section>
    </div>
  );
};

export default Home;