import { useState } from "react";
import "../styles/components/Carousel.scss";
import slide from "../assets/img/Carrousel.png";

function Carousel({ images = [slide, slide, slide, slide] }) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="carousel" role="region" aria-label="Galerie photos">
      <img
        className="carousel__img"
        src={images[index]}
        alt={`Photo ${index + 1} sur ${total}`}
      />

      {total > 1 && (
        <>
          <button
            className="carousel__btn carousel__btn--prev"
            onClick={prev}
            aria-label="Précédent"
          >
            ‹
          </button>
          <button
            className="carousel__btn carousel__btn--next"
            onClick={next}
            aria-label="Suivant"
          >
            ›
          </button>
          <div className="carousel__count">
            {index + 1}/{total}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;