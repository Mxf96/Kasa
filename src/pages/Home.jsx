import React from "react";
import { Link } from "react-router-dom";
import data from "../data/locations.json";
import "../styles/pages/Home.scss";
import bannerImg from "../assets/img/_Section 1.png";

const Home = () => {
  return (
    <div className="home">
      {/* Bannière */}
      <section className="home__banner">
        <img src={bannerImg} alt="Bannière" className="home__banner-img" />
        <h1 className="home__banner-text">
          Chez vous, <span className="break">partout et ailleurs</span>
        </h1>
      </section>

      {/* Grille de logements */}
      <section className="home__grid">
        {data.map(({ id, title, cover }) => (
          <Link
            key={id}
            to={`/logement/${id}`}
            className="card"
            style={{ backgroundImage: `url(${cover})` }}
          >
            <span className="card__title">{title}</span>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
