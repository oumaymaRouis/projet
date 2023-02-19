import React, { Component } from "react";
import "../styles/form.css";
import dell from "../assets/dell.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import Right from "./right";

class LastForm extends Component {
  state = {};
  render() {
    return (
      <div className="main-form-container1">
        <form>
          <div className="main">
            <div className="title-container1">
              <h1> 959,000 TND</h1>
            </div>
            <div className="img-container">
              <img className="dell" src={dell} />
            </div>
            <div className="name-container">
              <h2>Dell Vostro 3400</h2>
              <br></br>
              <div className="nom-container">
                <h3>
                  <span className="mytech">Mytech · </span>
                  <span className="in-stock">En Stock </span>
                  <FontAwesomeIcon icon={faFloppyDisk} className="icon" />
                </h3>
                <div className="icon2-container">
                  <FontAwesomeIcon icon={faBookmark} className="icon2" />
                  <FontAwesomeIcon icon={faShareAlt} className="icon3" />
                </div>
                <div className="icon2-writing">
                  <h1>
                    <span className="category"> PC category · </span>
                    <span className="gaming"> gaming , Ultrabook </span>
                  </h1>
                </div>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Écran</th>
                  <th>Processeur</th>
                  <th>Mémoire RAM</th>
                  <th>Disque dur</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>14 Pouces HD</td>
                  <td>i3-1115G4</td>
                  <td>4 Go</td>
                  <td>1 To HDD</td>
                </tr>
              </tbody>
            </table>
            <div className="description-container">
              <h1>Overview</h1>
              <p>
                Écran 14" HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to
                4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système
                d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To
                HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth,
                1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x
                RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir -
                Garantie: 1 an
              </p>
            </div>
            <div className="fiche-container">
              <h1>Fiche Technique</h1>
              <div className="checkbox-container">
                <label class="container">
                  <div className="words">Marque: DELL</div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <div className="words">Processeur: Intel Core i3</div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <div className="words">Mémoire: 4 Go</div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <div className="words">
                    Fréquence Processeur: 3.00 GHz up to 4,10 GHz Turbo max
                  </div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <div className="words">
                    Résolution Ecran: 1366 x 768 pixels
                  </div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <div className="words">Type Processeur Dual Core</div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <div className="words">
                    Carte Graphique: Graphique Intégrée
                  </div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <div className="words">TGarantie 1 an</div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="line-container">
              <hr />
            </div>
            <div className="underline-container">
              <h1>Are You Interested In This Laptop ?</h1>
              <div className="btn-container">
                <button className="btn btn-yellow">Check it out</button>
              </div>
            </div>
          </div>
        </form>
        <div className="right-side-container">
          <Right></Right>
        </div>
      </div>
    );
  }
}

export default LastForm;
