import { useState, useRef } from "react";

// importation des couleurs
import whiteColor from "../assets/img/colors/blanc.png";
import blueColor from "../assets/img/colors/bleu.png";
import greyColor from "../assets/img/colors/gris.png";
import yellowColor from "../assets/img/colors/jaune.png";
import brownColor from "../assets/img/colors/marron.png";
import blackColor from "../assets/img/colors/noir.png";
import orangeColor from "../assets/img/colors/orange.png";
import pinkColor from "../assets/img/colors/rose.png";
import redColor from "../assets/img/colors/rouge.png";
import greenColor from "../assets/img/colors/vert.png";
import purpleColor from "../assets/img/colors/violet.png";

// importation des images
import cloud from "../assets/img/objects/nuage.png";
import sea from "../assets/img/objects/mer.png";
import mouse from "../assets/img/objects/souris.png";
import banana from "../assets/img/objects/banane.png";
import chocolate from "../assets/img/objects/chocolat.png";
import spider from "../assets/img/objects/araignee.png";
import carrot from "../assets/img/objects/carotte.png";
import pig from "../assets/img/objects/cochon.png";
import tomato from "../assets/img/objects/tomate.png";
import frog from "../assets/img/objects/grenouille.png";
import eggplant from "../assets/img/objects/aubergine.png";

// importation des sons
import soundCloud from "../assets/sounds/objects/nuage.mp3";
import soundSea from "../assets/sounds/objects/mer.mp3";
import soundMouse from "../assets/sounds/objects/souris.mp3";
import soundBanana from "../assets/sounds/objects/banane.mp3";
import soundChocolate from "../assets/sounds/objects/chocolat.mp3";
import soundSpider from "../assets/sounds/objects/araignee.mp3";
import soundCarrot from "../assets/sounds/objects/carotte.mp3";
import soundPig from "../assets/sounds/objects/cochon.mp3";
import soundTomato from "../assets/sounds/objects/tomate.mp3";
import soundFrog from "../assets/sounds/objects/grenouille.mp3";
import soundEggplant from "../assets/sounds/objects/aubergine.mp3";

const Colors = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const audioRef = useRef(null);

  const handleColorClick = (selectedObject) => {
    // arrete le son joué si on clique sur une autre couleur
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setSelectedColor(selectedObject);

    const selectedObjectIndex = colorsArray.findIndex(
      (color) => color.object === selectedObject
    );

    // Joue le son de l'objet de la couleur sélectionnée
    const audio = new Audio();
    switch (selectedObjectIndex) {
      case 0:
        audio.src = soundCloud;
        break;
      case 1:
        audio.src = soundSea;
        break;
      case 2:
        audio.src = soundMouse;
        break;
      case 3:
        audio.src = soundBanana;
        break;
      case 4:
        audio.src = soundChocolate;
        break;
      case 5:
        audio.src = soundSpider;
        break;
      case 6:
        audio.src = soundCarrot;
        break;
      case 7:
        audio.src = soundPig;
        break;
      case 8:
        audio.src = soundTomato;
        break;
      case 9:
        audio.src = soundFrog;
        break;
      case 10:
        audio.src = soundEggplant;
        break;
      default:
        break;
    }

    audio.volume = 0.4;
    audio.play();

    audioRef.current = audio;
  };

  const colorsArray = [
    { nameColor: whiteColor, id: "white", description: "blanc", object: cloud },

    { nameColor: blueColor, id: "blue", description: "bleu", object: sea },
    { nameColor: greyColor, id: "grey", description: "gris", object: mouse },
    {
      nameColor: yellowColor,
      id: "yellow",
      description: "jaune",
      object: banana,
    },
    {
      nameColor: brownColor,
      id: "brown",
      description: "marron",
      object: chocolate,
    },
    { nameColor: blackColor, id: "black", description: "noir", object: spider },
    {
      nameColor: orangeColor,
      id: "orange",
      description: "carotte",
      object: carrot,
    },
    { nameColor: pinkColor, id: "pink", description: "rose", object: pig },
    { nameColor: redColor, id: "red", description: "rouge", object: tomato },
    { nameColor: greenColor, id: "green", description: "vert", object: frog },
    {
      nameColor: purpleColor,
      id: "purple",
      description: "violet",
      object: eggplant,
    },
  ];

  return (
    <div id="colors">
      <div className="colors-container">
        {colorsArray.map((color) => (
          <div key={color.id} id={color.id} className="box-style">
            <img
              src={color.nameColor}
              alt={"couleur " + color.description}
              onClick={() => handleColorClick(color.object)}
            />
          </div>
        ))}
      </div>
      {/* affichage de l'objet en fonction de la couleur selectionnée */}
      {selectedColor !== null && (
        <div className="object-container">
          <img src={selectedColor} alt={"image" + colorsArray.object} />
        </div>
      )}
    </div>
  );
};

export default Colors;
