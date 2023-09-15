import React, { useState } from 'react'

const Dial = ({min=1, max= 10}) => {
    const [selectedNumber, setSelectedNumber] = useState((min + max) / 2);

    const handleNumberChange = (number) => {
      setSelectedNumber(number);
    };
    const renderNumbers = () => {
        const numbers = [];
    
        for (let i = min; i <= max; i++) {
          numbers.push(
            <div
              key={i}
              className={`dial-number ${i === selectedNumber ? 'selected' : ''}`}
              onClick={() => handleNumberChange(i)}
            >
              {i}
            </div>
          );
        }
    
        return numbers;
      };
  return (
    <div className="dial-container">
    {/* <div className="dial">
      <div className="dial-numbers">{renderNumbers()}</div>
      <div className="dial-selected-number">{selectedNumber}</div>
    </div> */}
  </div>
  )
}

export default Dial