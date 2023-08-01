import Numbers from "./Numbers";
import Colors from "./Colors";

// importation images du menu
import numbersMenu from "../assets/img/numbers/menu.png";
import colorsMenu from "../assets/img/colors/menu.png";

// importation sons du menu
import soundNumbers from "../assets/sounds/menu/chiffres.mp3";
import soundColors from "../assets/sounds/menu/couleurs.mp3";

import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [isNumbersOpen, setIsNumbersOpen] = useState(false);
  const [isColorsOpen, setIsColorsOpen] = useState(false);

  const audioRef = useRef(null);

  const toggleNumbersMenu = () => {
    if (!isNumbersOpen) {
      setIsNumbersOpen(true);
      setIsColorsOpen(false);

      // arrete l'audio si un autre élément du menu est cliqué
      if (audioRef.current) {
        audioRef.current.pause();
      }

      const audio = new Audio(soundNumbers);
      audio.volume = 0.5;
      audio.play();
      audioRef.current = audio;
    } else {
      setIsNumbersOpen(false);
    }
  };

  const toggleColorsMenu = () => {
    if (!isColorsOpen) {
      setIsColorsOpen(true);
      setIsNumbersOpen(false);

      // arrete l'audio si un autre élément du menu est cliqué
      if (audioRef.current) {
        audioRef.current.pause();
      }

      const audio = new Audio(soundColors);
      audio.volume = 0.5;
      audio.play();
      audioRef.current = audio;
    } else {
      setIsColorsOpen(false);
    }
  };

  return (
    <div className="main-container">
      <div className="select-menu">
        <div className="box-style" onClick={toggleNumbersMenu}>
          <img src={numbersMenu} alt="" />
        </div>
        <div className="box-style" onClick={toggleColorsMenu}>
          <img src={colorsMenu} alt="" />
        </div>
      </div>
      <div className="game-window">
        {isNumbersOpen ? <Numbers /> : null}
        {isColorsOpen ? <Colors /> : null}
        {!isNumbersOpen && !isColorsOpen ? (
          <div className="choose-a-game">
            <FontAwesomeIcon icon={faArrowUp} className="arrow-choose-a-game" />
            <h1>Choisis un mini jeu</h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Main;
