// importation images des lettres
import a from "../assets/img/letters/a.png";
import b from "../assets/img/letters/b.png";
import c from "../assets/img/letters/c.png";
import d from "../assets/img/letters/d.png";
import e from "../assets/img/letters/e.png";
import f from "../assets/img/letters/f.png";
import g from "../assets/img/letters/g.png";
import h from "../assets/img/letters/h.png";
import i from "../assets/img/letters/i.png";
import j from "../assets/img/letters/j.png";
import k from "../assets/img/letters/k.png";
import l from "../assets/img/letters/l.png";
import m from "../assets/img/letters/m.png";
import n from "../assets/img/letters/n.png";
import o from "../assets/img/letters/o.png";
import p from "../assets/img/letters/p.png";
import q from "../assets/img/letters/q.png";
import r from "../assets/img/letters/r.png";
import s from "../assets/img/letters/s.png";
import t from "../assets/img/letters/t.png";
import u from "../assets/img/letters/u.png";
import v from "../assets/img/letters/v.png";
import w from "../assets/img/letters/w.png";
import x from "../assets/img/letters/x.png";
import y from "../assets/img/letters/y.png";
import z from "../assets/img/letters/z.png";

// importation sons des lettres
import soundA from "../assets/sounds/letters/a.mp3";
import soundB from "../assets/sounds/letters/b.mp3";
import soundC from "../assets/sounds/letters/c.mp3";
import soundD from "../assets/sounds/letters/d.mp3";
import soundE from "../assets/sounds/letters/e.mp3";
import soundF from "../assets/sounds/letters/f.mp3";
import soundG from "../assets/sounds/letters/g.mp3";
import soundH from "../assets/sounds/letters/h.mp3";
import soundI from "../assets/sounds/letters/i.mp3";
import soundJ from "../assets/sounds/letters/j.mp3";
import soundK from "../assets/sounds/letters/k.mp3";
import soundL from "../assets/sounds/letters/l.mp3";
import soundM from "../assets/sounds/letters/m.mp3";
import soundN from "../assets/sounds/letters/n.mp3";
import soundO from "../assets/sounds/letters/o.mp3";
import soundP from "../assets/sounds/letters/p.mp3";
import soundQ from "../assets/sounds/letters/q.mp3";
import soundR from "../assets/sounds/letters/r.mp3";
import soundS from "../assets/sounds/letters/s.mp3";
import soundT from "../assets/sounds/letters/t.mp3";
import soundU from "../assets/sounds/letters/u.mp3";
import soundV from "../assets/sounds/letters/v.mp3";
import soundW from "../assets/sounds/letters/w.mp3";
import soundX from "../assets/sounds/letters/x.mp3";
import soundY from "../assets/sounds/letters/y.mp3";
import soundZ from "../assets/sounds/letters/z.mp3";

import { useState, useRef } from "react";

const Letters = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const audioRef = useRef(null);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);

    // arrete de jouer le son si un autre est sélectionné
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Joue le son du chiffre sélectionné
    const audio = new Audio(sounds[letter]);
    audioRef.current = audio;
    audio.volume = 0.7;
    audio.play();
  };

  const lettersImages = [
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
  ];

  const sounds = [
    soundA,
    soundB,
    soundC,
    soundD,
    soundE,
    soundF,
    soundG,
    soundH,
    soundI,
    soundJ,
    soundK,
    soundL,
    soundM,
    soundN,
    soundO,
    soundP,
    soundQ,
    soundR,
    soundS,
    soundT,
    soundU,
    soundV,
    soundW,
    soundX,
    soundY,
    soundZ,
  ];

  return (
    <div id="numbers">
      <div className="numbers-container">
        {lettersImages.map((letterImage, index) => (
          <div
            key={index}
            id={`${letterImage}`}
            className="box-style"
            onClick={() => handleLetterClick(index)}
          >
            <img
              src={letterImage}
              alt={`Lettre ${String.fromCharCode(65 + index)}`}
            />
          </div>
        ))}
      </div>
      {selectedLetter !== null && (
        <div className="finger-container">
          <img
            src={lettersImages[selectedLetter]}
            alt={`Lettre ${String.fromCharCode(65 + selectedLetter)}`}
          />
        </div>
      )}
    </div>
  );
};

export default Letters;
