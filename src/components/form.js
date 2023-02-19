import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Card from "../utils/card";
import "../styles/lastForm.css";
import logo from "../assets/Logo.png";
import logo1 from "../assets/Logo1.png";
import logo2 from "../assets/Logo2.png";
import logo3 from "../assets/Logo3.png";
import logo4 from "../assets/Logo4.png";
import logo5 from "../assets/Logo5.png";
import logo7 from "../assets/Logo7.png";
import logo8 from "../assets/Logo8.png";
import logo9 from "../assets/Logo9.png";

const options = [
  { label: "Best Value", value: "option1" },
  { label: "Price", value: "option2" },
  { label: "Date of Release", value: "option3" },
];

const Form = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const toggleSortDropdown = () => {
    setIsSortOpen(!isSortOpen);
  };

  return (
    <div className="main-form-container">
      <form>
        <div className="title-container">
          <div className="title">
            <p>Showing 125 Laptops</p>
          </div>
          <div className="sort">
            <button className="sort-button" onClick={toggleSortDropdown}>
              Sort by:
              <FontAwesomeIcon icon={faChevronDown} />
            </button>

            {isSortOpen && (
              <div className="dropdown-options">
                {options.map((option) => (
                  <label key={option.value}>{option.label}</label>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="content-container">
          <Card
            image={logo}
            title="ASUS ExpertBook L1"
            description="Écran 14 HD /- Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max 
                , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation:"
            societe="Mytek  ."
            stock="  En Stock"
          ></Card>
          <Card
            image={logo1}
            title="ASUS ExpertBook L1"
            description="Écran 14 HD /- Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max 
                , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation:"
            societe="Mytek  ."
            stock="  En Stock"
          ></Card>
          <Card
            image={logo2}
            title="ASUS ExpertBook L1"
            description="Écran 14 HD /- Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max 
                , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation:"
            societe="Mytek  ."
            stock="  En Stock"
          ></Card>
          <Card
            image={logo3}
            title="ASUS ExpertBook L1"
            description="Écran 14 HD /- Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max 
                , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation:"
            societe="Mytek  ."
            stock="  En Stock"
          ></Card>
          <Card
            image={logo4}
            title="ASUS ExpertBook L1"
            description="Écran 14 HD /- Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max 
                , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation:"
            societe="Mytek  ."
            stock="  En Stock"
          ></Card>
          <Card
            image={logo5}
            title="ASUS ExpertBook L1"
            description="Écran 14 HD /- Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max 
                , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation:"
            societe="Mytek  ."
            stock="  En Stock"
          ></Card>
          <Card
            image={logo7}
            title="ASUS ExpertBook L1"
            description="Écran 14 HD /- Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max 
                , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation:"
            societe="Mytek  ."
            stock="  En Stock"
          ></Card>
          <Card
            image={logo8}
            title="ASUS ExpertBook L1"
            description="Écran 14 HD /- Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max 
                , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation:"
            societe="Mytek  ."
            stock="  En Stock"
          ></Card>
          <Card
            image={logo9}
            title="ASUS ExpertBook L1"
            description="Écran 14 HD /- Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max 
                , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation:"
            societe="Mytek  ."
            stock="  En Stock"
          ></Card>
        </div>
      </form>
    </div>
  );
};

export default Form;
