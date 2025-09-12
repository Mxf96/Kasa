import "../styles/pages/Logement.scss";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";

const listing = {
  title: "Cozy loft on the Canal Saint-Martin",
  location: "Paris, Île-de-France",
  tags: ["Cozy", "Canal", "Paris 10"],
  host: { name: "Alexandre Dumas", picture: null },
  rating: 4,
  description:
    "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l’été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d’affaires. Vous êtes à 7 minutes à pied de la gare de l’est.",
  equipments: [
    "Climatisation",
    "Wi-Fi",
    "Cuisine",
    "Espace de travail",
    "Fer à repasser",
    "Sèche-cheveux",
    "Cintres",
  ],
  // le Carousel.jsx charge déjà l'image par défaut, mais faire un tableau ici :
  // pictures: [img1, img2, img3, img4]
};

function Logement() {
  const { title, location, tags, host, rating, description, equipments } =
    listing;

  return (
    <div className="logement">
      <Carousel />

      <div className="logement__top">
        <div className="logement__left">
          <h1 className="logement__title">{title}</h1>
          <p className="logement__location">{location}</p>

          <div className="logement__tags">
            {tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="logement__right">
          <div className="host">
            <span className="host__name">{host.name}</span>
            <div className="host__avatar" aria-hidden />
          </div>

          <div className="rating" aria-label={`Note ${rating} sur 5`}>
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className={`star ${i <= rating ? "is-on" : ""}`}>
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
            {equipments.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;