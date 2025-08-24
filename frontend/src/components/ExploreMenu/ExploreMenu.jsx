import React, { useState, useContext } from "react";
import "./ExploreMenu.css";
import { StoreContext } from "../../Context/StoreContext";

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);

  // Sections (keys of menu_list)
  const sections = Object.keys(menu_list);

  // Track which section is active
  const [activeSection, setActiveSection] = useState("Foods");

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our {activeSection}</h1>
      <p className="explore-menu-text">
        Choose from a diverse selection of {activeSection.toLowerCase()}.
      </p>

      {/* Toggle bar */}
      <div className="toggle-bar">
        {sections.map((sec, i) => (
          <button
            key={i}
            onClick={() => setActiveSection(sec)}
            className={activeSection === sec ? "active-toggle" : ""}
          >
            {sec}
          </button>
        ))}
      </div>

      {/* Items list */}
      <div className="explore-menu-list">
        {menu_list[activeSection].map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="explore-menu-list-item"
          >
            <img
              src={item.menu_image}
              className={category === item.menu_name ? "active" : ""}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
