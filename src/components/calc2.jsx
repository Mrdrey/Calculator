import React, { useState } from 'react';

function Two() {
    const [expression, setExpression] = useState(''); // String to store the current expression

    const handleButtonClick = (value) => {
        setExpression(expression + value);
    };

    const calculateResult = () => {
        try {
            const evalResult = eval(expression); // Evaluate the expression
            setExpression(evalResult.toString()); // Update the expression with the result
        } catch (error) {
            setExpression('Error');
        }
    };

    const clearExpression = () => {
        setExpression('');
    };

    return (
        <div>
            <input type="text" value={expression} readOnly />
            <div>
                {/* Numeric buttons */}
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('0')}>0</button>

                {/* Operator buttons */}
                <button onClick={() => handleButtonClick('+')}>+</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
                <button onClick={() => handleButtonClick('/')}>/</button>

                {/* Equals and Clear buttons */}
                <button onClick={calculateResult}>=</button>
                <button onClick={clearExpression}>C</button>
            </div>
        </div>
    );
}

export default Two;
