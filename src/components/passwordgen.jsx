import { useState, useEffect, use } from "react";
import "bootstrap/dist/css/bootstrap.css";

import DecryptedText from "./decText";
import { useRef } from "react";


const LETTERS = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]
const SYMBOLS = ["!", "@", "#", "$", "%", "¨", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?", "\\", "|"]
const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let stp = "";
function GeneratePassword() {
  const [number, setNumber] = useState(0);
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(password)
  };

  const saveNumber = (e) => {
    setNumber(e.target.value);
    setSuccess(false);
    stp = "";
  };

  const madeFalse = () => {
    setSuccess(false);
    setTimeout(() => {
      generatePassword();
    }, 1);
  };

  const generatePassword = () => {
    let a = number;
    setNumber(0);
    setNumber(a);
    setSuccess(false);
    stp = "";
    console.log(number);
    for (let c = 0; c < number; c++) {
      console.log(password);
      let char = Math.floor(Math.random() * 3);
      if (char == 0) {
        stp += LETTERS[Math.floor(Math.random() * LETTERS.length)];
      } else if (char == 1) {
        stp += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      } else {
        stp += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
      }
    }
    setPassword(stp);
    setSuccess(true);
  };

  return (
    <>
      <div>
        <p className="choose-char">Number of Characters:</p>
        <input
          type="number"
          className="numberChar"
          onChange={(event) => {
            saveNumber(event);
          }}
        />
      </div>
      <br />

      <button type="button" className="btn btn-success" onClick={madeFalse}>
        Generate Password
      </button>

      {success && (
        <div
          style={{
            marginTop: "4rem",
            fontSize: "2rem",
            fontWeight: "500",
            wordWrap: "break-word",
            color: "green",
          }}
        >
          <DecryptedText
            onClick={handleCopy}
            className="passClass"
            text={password}
            animateOn="view"
            revealDirection="start"
          />
          <br />
          <p className="copyButtom" onClick={handleCopy}>click to copy</p>
        </div>
      )}
    </>
  );
}

export default GeneratePassword;
