import "./Day31.css";
import React, {useState} from 'react';

export default function Day31() {
  const [password, setPassword] = useState('');
  const [passLength, setPassLength] = useState(20);
  const [hasLower, setHasLower] = useState(false);
  const [hasUpper, setHasUpper] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
  }

  function generatePassword(lower, upper, number, symbol, passLength) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    if(typesCount === 0) {
      return ''
    }
    for(let i = 0; i < passLength; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0]
        generatedPassword += randomFunc[funcName]()
      })
    }
    const finalPassword = generatedPassword.slice(0, passLength)
    return finalPassword
  }

  function handleGeneratePassword() {
    const generatedPassword = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, passLength);
    setPassword(generatedPassword);
  }

  function handleCopyToClipboard() {
    if (!password) {
      return;
    }
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  }

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }
  
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }
  
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }
  
  function getRandomSymbol() {
    const symbols = '!@#$%^&'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  return (
    <div className="contenedorDia31">
      <div className="container">
        <h2>Password Generator</h2>
        <div className="result-container">
          <span>{password}</span>
          <button onClick={handleCopyToClipboard} className="btn btn-large"></button>
        </div>
        <div class="settings">
          <div class="setting">
            <label>Password Length</label>
            <input type="number" id="length" min="4" max="20"  value={passLength} onChange={(e) => setPassLength(e.target.value)}/>
          </div>
          <div class="setting">
            <label>Include uppercase letters</label>
            <input type="checkbox" id="uppercase" checked={hasUpper} onChange={(e) => setHasUpper(e.target.checked)}/>
          </div>
          <div class="setting">
            <label>Include lowercase letters</label>
            <input type="checkbox" id="lowercase" checked={hasLower} onChange={(e) => setHasLower(e.target.checked)} />
          </div>
          <div class="setting">
            <label>Include numbers</label>
            <input type="checkbox" id="numbers" checked={hasNumber} onChange={(e) => setHasNumber(e.target.checked)}/>
          </div>
          <div class="setting">
            <label>Include symbols</label>
            <input type="checkbox" id="symbols" checked={hasSymbol} onChange={(e) => setHasSymbol(e.target.checked)} />
          </div>
        </div>
        <button class="btn btn-large" onClick={handleGeneratePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
}
