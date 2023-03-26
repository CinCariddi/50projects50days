import './Day11.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Day11() {
  const [key, setKey] = useState("");
  const [keyCode, setKeyCode] = useState(null);
  const [code, setCode] = useState("");
  const handleKeyDown = (event) => {
    const key = event.key;
    const number = event.keyCode;
    if(key === ' ') {
      setKey('Space')
      setKeyCode(number);
      setCode('Space')
    } else {
      const uppercaseKey = event.code;
      setKey(key);
      setKeyCode(number);
      setCode(uppercaseKey);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])


    return (
        <div className="contenedorDia11">
            <div>
              {
                key && keyCode && code ?
                <div>
                  <div className="key">
                    {key} 
                    <small>event.key</small>
                  </div>
                  <div className="key">
                    {keyCode}
                    <small>event.keyCode</small>
                  </div>
                  <div className="key">
                    {code}
                    <small>event.code</small>
                  </div>
                </div>
                : <div className='key'>Press any key to get the keyCode</div>
              }
            </div>
        </div>
    )
}