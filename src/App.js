import React, { useState } from 'react';
import './index.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'AC') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className='parent'>
      <h1>Calculator App</h1>
      <div className="container">
        <div className="row">
          <input type="text" id="inputText" value={input} readOnly />
        </div>
        <div className="row">
          <button onClick={() => handleClick('AC')} className="button btn-red">AC</button>
          <button onClick={() => handleClick('M-')} className="button btn-lightgray">M-</button>
          <button onClick={() => handleClick('M+')} className="button btn-lightgray">M+</button>
          <button onClick={() => handleClick('%')} className="button btn-orange">%</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('7')} className="button btn-darkgray">7</button>
          <button onClick={() => handleClick('8')} className="button btn-darkgray">8</button>
          <button onClick={() => handleClick('9')} className="button btn-darkgray">9</button>
          <button onClick={() => handleClick('*')} className="button btn-orange">*</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('4')} className="button btn-darkgray">4</button>
          <button onClick={() => handleClick('5')} className="button btn-darkgray">5</button>
          <button onClick={() => handleClick('6')} className="button btn-darkgray">6</button>
          <button onClick={() => handleClick('/')} className="button btn-orange">/</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('1')} className="button btn-darkgray">1</button>
          <button onClick={() => handleClick('2')} className="button btn-darkgray">2</button>
          <button onClick={() => handleClick('3')} className="button btn-darkgray">3</button>
          <button onClick={() => handleClick('+')} className="button btn-orange">+</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('.')} className="button btn-darkgray">.</button>
          <button onClick={() => handleClick('0')} className="button btn-darkgray">0</button>
          <button onClick={() => handleClick('=')} className="button btn-red">=</button>
          <button onClick={() => handleClick('-')} className="button btn-orange">-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
