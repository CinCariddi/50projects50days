import { useState } from "react";
import "./Style/Day12.css";

export default function Day12() {
  const [data, setData] = useState([false, false, false, false, false]);

  const viewData = (index) => {
    const nuevoEstado = [...data];
    nuevoEstado[index] = !nuevoEstado[index];
    setData(nuevoEstado);
    console.log('estado', data, nuevoEstado)
  };

  return (
    <div className="contenedorDia12">
        <div>
            <h1>Frequently Asked Questions</h1>
            <div className="faq-container">
                <div className="faq active1">
                    <h3 className="faq-title">Why shouldn't we trust atoms?</h3>
                    {data[0] === true && (
                        <p className="faq-text">They make up everything</p>
                    )}
                    <button className="faq-toggle" onClick={() => viewData(0)}>
                        {data[0] ? (
                        <i className="faq-toggleActive">✖</i>
                        ) : (
                        <i>▼</i>
                        )}
                    </button>
                </div>
                <div className="faq active1">
                    <h3 className="faq-title">
                        What do you call someone with no body and no nose?
                    </h3>
                    {data[1] === true && (
                        <p className="faq-text">Nobody knows.</p>
                    )}
                    <button className="faq-toggle" onClick={() => viewData(1)}>
                        {data[1] ? (
                        <i className="faq-toggleActive">✖</i>
                        ) : (
                        <i>▼</i>
                        )}
                    </button>
                </div>
                <div className="faq active1">
                    <h3 className="faq-title">
                        What's the object-oriented way to become wealthy?
                    </h3>
                    {data[2] === true && (
                        <p className="faq-text">Inheritance.</p>
                    )}
                    <button className="faq-toggle" onClick={() => viewData(2)}>
                        {data[2] ? (
                        <i className="faq-toggleActive">✖</i>
                        ) : (
                        <i>▼</i>
                        )}
                    </button>
                </div>
                <div className="faq active1">
                    <h3 className="faq-title">
                        How many tickles does it take to tickle an octopus?
                    </h3>
                    {data[3] === true && (
                        <p className="faq-text">Ten-tickles!</p>
                    )}
                    <button className="faq-toggle" onClick={() => viewData(3)}>
                        {data[3] ? (
                        <i className="faq-toggleActive">✖</i>
                        ) : (
                        <i>▼</i>
                        )}
                    </button>
                </div>
                <div className="faq active1">
                    <h3 className="faq-title">What is: 1 + 1?</h3>
                    {data[4] === true && (
                        <p className="faq-text">Depends on who are you asking.</p>
                    )}
                    <button className="faq-toggle" onClick={() => viewData(4)}>
                        {data[4] ? (
                        <i className="faq-toggleActive">✖</i>
                        ) : (
                        <i>▼</i>
                        )}
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}
