import { useEffect, useRef, useState } from "react";
import "../styles/components/Collapse.scss";

function Collapse({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isOpen) {
      // Mesure la hauteur puis anime
      el.style.height = el.scrollHeight + "px";
    } else {
      el.style.height = "0px";
    }
  }, [isOpen]);

  // Pour lisser l'animation si le contenu change une fois ouvert
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      if (isOpen) el.style.height = el.scrollHeight + "px";
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [isOpen]);

  return (
    <div className={`collapse ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="collapse__header"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
      >
        <span className="collapse__title">{title}</span>

        {/* Chevron SVG inline */}
        <svg
          className="collapse__chevron"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {/* Chevron type "V" (pointe vers le bas par défaut) */}
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="collapse__content" ref={contentRef}>
        <div className="collapse__inner">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;