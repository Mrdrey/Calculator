import { useState } from "react";

export default function Calculator() {

    const [expression, setExpression] = useState("");

    const calculateResult = () => {
        try {
            const result = eval(expression);
            setExpression(result.toString());
        }
        catch (error) {
            setExpression("Error")
        }
    }
    const handleOperation = (value) => {
        setExpression(expression + value);
    }
    const clearOperator = () => {
        setExpression("");
    }

    const deleteLastCharacter = () => {
        if (expression.length > 0) {
            setExpression(expression.slice(0, -1)); // Remove the last character
        }
    };
    return (
        <>

            <div>
                <input type="text" value={expression} readOnly />
            </div>
            {/*Numeric btns */}
            <div>
                <button onClick={() => handleOperation('1')}>1</button>
                <button onClick={() => handleOperation('2')}>2</button>
                <button onClick={() => handleOperation('3')}>3</button>
                <button onClick={() => handleOperation('4')}>4</button>
                <button onClick={() => handleOperation('5')}>5</button>
                <button onClick={() => handleOperation('6')}>6</button>
                <button onClick={() => handleOperation('7')}>7</button>
                <button onClick={() => handleOperation('8')}>8</button>
                <button onClick={() => handleOperation('9')}>9</button>
                <button onClick={() => handleOperation('0')}>0</button>
            </div>

            <div>

                {/* Operators*/}
                <button onClick={() => handleOperation('+')}>+</button>
                <button onClick={() => handleOperation('-')}>-</button>
                <button onClick={() => handleOperation('*')}>*</button>
                <button onClick={() => handleOperation('/')}>/</button>

                {/*Calculate Operation */}
                <button onClick={calculateResult}>=</button>
                <button onClick={clearOperator}>Clear</button>
                <button onClick={deleteLastCharacter}>Del</button>
            </div>


        </>
    )
}