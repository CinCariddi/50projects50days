import { useState, useEffect, useRef } from "react";
import "./Day41.css";

export default function Day41() {
    const [codes, setCodes] = useState(["", "", "", ""]);
    const codeRefs = useRef([]);

    useEffect(() => {
        codeRefs.current[0].focus();
    }, []);

    function handleKeyDown(e, idx) {
        if (e.key >= 0 && e.key <= 9) {
            const newCodes = [...codes];
            newCodes[idx] = e.key;
            setCodes(newCodes);
            if (idx < 3) {
                setTimeout(() => codeRefs.current[idx + 1].focus(), 10);
            }
        } else if (e.key === "Backspace") {
            const newCodes = [...codes];
            newCodes[idx] = "";
            setCodes(newCodes);
            if (idx > 0) {
                setTimeout(() => codeRefs.current[idx - 1].focus(), 10);
            }
        }
    }

    return (
        <div className="contenedorDia41">
            <div className="containerDay41">
                <h2>Verify Your Account</h2>
                <p>
                    We emailed you the six digit code to cool_guy@email.com <br /> Enter
                    the code below to confirm your email address.
                </p>
                <div className="code-container">
                    {codes.map((code, idx) => (
                        <input
                        key={idx}
                        ref={(el) => (codeRefs.current[idx] = el)}
                        type="number"
                        maxLength="1"
                        value={code}
                        min="0"
                        max="9"
                        placeholder="0"
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        className="code"
                        required
                        />
                    ))}
                </div>
                <small className="info">
                    This is design only. We didn't actually send you an email as we don't
                    have your email, right?
                </small>
            </div>
        </div>
    );
}