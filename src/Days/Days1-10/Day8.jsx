import './Style/Day8.css'
import { useState } from "react";

export default function Day8() {
  const [wave1, setWave1] = useState(false);
  const [wave2, setWave2] = useState(false);
  const [letters1, setLetters1] = useState([]);
  const [letters2, setLetters2] = useState([]);
  const [label1, setLabel1] = useState(["Email"]);
  const [label2, setLabel2] = useState(["Password"]);

  const waveStyle1 = () => {
    setWave1(false); // primero se establece en false para que las ondas anteriores se desactiven
    for (let i = 0; i < label1.length; i++) {
      setLetters1(label1[i].split(""));
    }
    letters1.forEach((_, index) => {
      setTimeout(() => {
        setWave1((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => {
          setWave1((prev) => ({ ...prev, [index]: false }));
        }, 500);
      }, index * 100);
    });
  };

  const waveStyle2 = () => {
    setWave2(false);
    for (let i = 0; i < label2.length; i++) {
      setLetters2(label2[i].split(""));
    }
    letters2.forEach((_, index) => {
      setTimeout(() => {
        setWave2((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => {
          setWave2((prev) => ({ ...prev, [index]: false }));
        }, 500);
      }, index * 100);
    });
  };

  return (
    <div className="contenedorDia8">
      <div className="formDay8">
        <h1>Please Login</h1>
        <form>
          <div className="form-control">
            <input
              id="Email"
              type="text"
              required
              onFocus={(e) => {
                waveStyle1(e);
              }}
            />
            <label htmlFor="Email">
              {letters1.map((letter, index) => (
                <span
                  key={index}
                  className={`${wave1[index] === true ? "wave" : "waveOff"}`}
                >
                  {letter}
                </span>
              ))}
            </label>
          </div>
          <div className="form-control">
            <input
              id="Password"
              type="password"
              required
              onFocus={(e) => {
                waveStyle2(e);
              }}
            />
            <label htmlFor="Password">
              {letters2.map((letter, index) => (
                <span
                  key={index}
                  className={`${wave2[index] === true ? "wave" : "waveOff"}`}
                >
                  {letter}
                </span>
              ))}
            </label>
          </div>
          <button className="btnDay8">Login</button>
          <p className="textDay8">
            Don't have an account? <a href="#">Register</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}