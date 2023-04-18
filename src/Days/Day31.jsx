import "./Day31.css";
import React, {useEffect} from 'react';

export default function Day31() {
  const resultEl = document.getElementById("result");
  const lengthEl = document.getElementById("length");
  const uppercaseEl = document.getElementById("uppercase");
  const lowercaseEl = document.getElementById("lowercase");
  const numbersEl = document.getElementById("numbers");
  const symbolsEl = document.getElementById("symbols");
  const generateEl = document.getElementById("generate");
  const clipboardEl = document.getElementById("clipboard");

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
  };

  clipboardEl.addEventListener("click", () => {
    const password = resultEl.innerText;
    if (!password) {
      return;
    }
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  });

  useEffect(() => {
      generateEl.addEventListener("click", () => {
        const length = +lengthEl.value;
        const hasLower = lowercaseEl.checked;
        const hasUpper = uppercaseEl.checked;
        const hasNumber = numbersEl.checked;
        const hasSymbol = symbolsEl.checked;
    
        resultEl.innerText = generatePassword(
          hasLower,
          hasUpper,
          hasNumber,
          hasSymbol,
          length
        );
      });

  })

  function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0]
    );

    if (typesCount === 0) {
      return "";
    }

    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
  }

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  return (
    <div className="contenedorDia31">
      <div class="container">
        <h2>Password Generator</h2>
        <div class="result-container">
          <span id="result"></span>
          <button class="btn" id="clipboard">
            <i class="far fa-clipboard"></i>
          </button>
        </div>
        <div class="settings">
          <div class="setting">
            <label>Password Length</label>
            <input type="number" id="length" min="4" max="20" value="20" />
          </div>
          <div class="setting">
            <label>Include uppercase letters</label>
            <input type="checkbox" id="uppercase" checked />
          </div>
          <div class="setting">
            <label>Include lowercase letters</label>
            <input type="checkbox" id="lowercase" checked />
          </div>
          <div class="setting">
            <label>Include numbers</label>
            <input type="checkbox" id="numbers" checked />
          </div>
          <div class="setting">
            <label>Include symbols</label>
            <input type="checkbox" id="symbols" checked />
          </div>
        </div>
        <button class="btn btn-large" id="generate">
          Generate Password
        </button>
      </div>
    </div>
  );
}
