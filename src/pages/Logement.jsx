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
            <span className="host__name">{host?.name}</span>
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
                className={`star ${i <= parseInt(rating, 10) ? "is-on" : ""}`}
              >
                ★
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