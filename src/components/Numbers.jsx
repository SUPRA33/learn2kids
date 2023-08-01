// importation images des chiffres
import num0 from "../assets/img/numbers/0.png";
import num1 from "../assets/img/numbers/1.png";
import num2 from "../assets/img/numbers/2.png";
import num3 from "../assets/img/numbers/3.png";
import num4 from "../assets/img/numbers/4.png";
import num5 from "../assets/img/numbers/5.png";
import num6 from "../assets/img/numbers/6.png";
import num7 from "../assets/img/numbers/7.png";
import num8 from "../assets/img/numbers/8.png";
import num9 from "../assets/img/numbers/9.png";
import num10 from "../assets/img/numbers/10.png";

// importation images des doigts
import finger0 from "../assets/img/fingers/0.png";
import finger1 from "../assets/img/fingers/1-bis.png";
import finger2 from "../assets/img/fingers/2-bis.png";
import finger3 from "../assets/img/fingers/3-bis.png";
import finger4 from "../assets/img/fingers/4.png";
import finger5 from "../assets/img/fingers/5.png";
import finger6 from "../assets/img/fingers/6.png";
import finger7 from "../assets/img/fingers/7.png";
import finger8 from "../assets/img/fingers/8.png";
import finger9 from "../assets/img/fingers/9.png";
import finger10 from "../assets/img/fingers/10.png";

// importation sons des chiffres
import sound0 from "../assets/sounds/numbers/0.mp3";
import sound1 from "../assets/sounds/numbers/1.mp3";
import sound2 from "../assets/sounds/numbers/2.mp3";
import sound3 from "../assets/sounds/numbers/3.mp3";
import sound4 from "../assets/sounds/numbers/4.mp3";
import sound5 from "../assets/sounds/numbers/5.mp3";
import sound6 from "../assets/sounds/numbers/6.mp3";
import sound7 from "../assets/sounds/numbers/7.mp3";
import sound8 from "../assets/sounds/numbers/8.mp3";
import sound9 from "../assets/sounds/numbers/9.mp3";
import sound10 from "../assets/sounds/numbers/10.mp3";

import { useState, useRef } from "react";

const Numbers = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const audioRef = useRef(null);

  const handleNumberClick = (number) => {
    setSelectedNumber(number);

    // arrete de jouer le son si un autre est sélectionné
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Joue le son du chiffre sélectionné
    const audio = new Audio(sounds[number]);
    audioRef.current = audio;
    audio.play();
  };

  const numberImages = [
    num0,
    num1,
    num2,
    num3,
    num4,
    num5,
    num6,
    num7,
    num8,
    num9,
    num10,
  ];

  const fingerImages = [
    finger0,
    finger1,
    finger2,
    finger3,
    finger4,
    finger5,
    finger6,
    finger7,
    finger8,
    finger9,
    finger10,
  ];

  const sounds = [
    sound0,
    sound1,
    sound2,
    sound3,
    sound4,
    sound5,
    sound6,
    sound7,
    sound8,
    sound9,
    sound10,
  ];

  return (
    <div id="numbers">
      <div className="numbers-container">
        {numberImages.map((numberImage, index) => (
          <div
            key={`number-${index}`}
            id={`number-${index}`}
            className="box-style"
            onClick={() => handleNumberClick(index)}
          >
            <img src={numberImage} alt={`numero ${index}`} />
          </div>
        ))}
      </div>
      {/* affichage du nombre de doigts en fonction du numéro sélectionné */}
      {selectedNumber !== null && (
        <div className="finger-container">
          <img
            src={fingerImages[selectedNumber]}
            alt={`main pour ${selectedNumber} doigts`}
          />
        </div>
      )}
    </div>
  );
};

export default Numbers;
