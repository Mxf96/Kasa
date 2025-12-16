import { useParams, Navigate } from "react-router-dom";
import data from "../data/locations.json";
import "../styles/pages/Logement.scss";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";

function Logement() {
  const { id } = useParams();
  const listing = data.find((item) => item.id === id);

  // si l'id n'existe pas -> 404
  if (!listing) return <Navigate to="*" replace />;

  const {
    title,
    location,
    tags,
    host,
    rating,
    description,
    equipments,
    pictures,
    cover,
  } = listing;

  const pics = pictures && pictures.length ? pictures : cover ? [cover] : [];

  return (
    <div className="logement">
      <Carousel images={pics} />

      <div className="logement__top">
        <div className="logement__left">
          <h1 className="logement__title">{title}</h1>
          <p className="logement__location">{location}</p>

          <div className="logement__tags">
            {tags?.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="logement__right">
          <div className="host">
            <div className="host__name">
              <span>{host?.name?.split(" ")[0]}</span>
              <span>{host?.name?.split(" ")[1]}</span>
            </div>
            {host?.picture ? (
              <img
                src={host.picture}
                alt={host.name}
                className="host__avatar"
              />
            ) : (
              <div className="host__avatar" aria-hidden />
            )}
          </div>

          <div className="rating" aria-label={`Note ${rating} sur 5`}>
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={`star ${i <= rating ? "is-on" : ""}`}
                aria-hidden="true"
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 3.1c.3 0 .6.2.7.5l2.3 4.6 5.1.7c.3 0 .6.3.6.6 0 .2-.1.4-.3.6l-3.7 3.6.9 5.1c0 .3-.1.6-.4.7-.2.1-.5.1-.7 0L12 17.8l-4.5 2.4c-.2.1-.5.1-.7 0-.3-.1-.4-.4-.4-.7l.9-5.1-3.7-3.6c-.2-.2-.3-.4-.3-.6 0-.3.3-.6.6-.6l5.1-.7 2.3-4.6c.1-.3.4-.5.7-.5z" />
                </svg>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse title="Description">{description}</Collapse>

        <Collapse title="Équipements">
          <ul className="equip-list">
            {equipments?.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;
