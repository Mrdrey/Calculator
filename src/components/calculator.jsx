import { useState } from "react";
import React from "react";
import './style/calculator.css'
export default function Calculator() {


    const [expression, setExpression] = useState("");

    const calculateResult = () => {
        try {
            const result = eval(parseFloat(expression));
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
            <div className="Calculator-container">
                <div className="input-container" >
                    <input type="text" value={expression} readOnly title="Screen" />
                </div>

                {/*Numeric btns */}
                <div className="num-btn">
                    <button id="del" onClick={deleteLastCharacter}>Del</button>
                    <button onClick={clearOperator}>C</button>
                    <button className="operator" onClick={() => handleOperation('+')} type="button">+</button>
                    <button className="operator" onClick={() => handleOperation('-')}>-</button>
                    <button className="btn" onClick={() => handleOperation('1')}>1</button>
                    <button className="btn" onClick={() => handleOperation('2')}>2</button>
                    <button className="btn" onClick={() => handleOperation('3')}>3</button>
                    <button className="operator" onClick={() => handleOperation('*')}>x</button>
                    <button className="btn" onClick={() => handleOperation('4')}>4</button>

                    <button className="btn" onClick={() => handleOperation('5')}>5</button>
                    <button className="btn" onClick={() => handleOperation('6')}>6</button>
                    <button className="operator" onClick={() => handleOperation('/')}>/</button>
                    <button className="btn" onClick={() => handleOperation('7')}>7</button>

                    <button className="btn" onClick={() => handleOperation('8')}>8</button>
                    <button className="btn" onClick={() => handleOperation('9')}>9</button>


                    <button onClick={calculateResult}>=</button>

                </div>
                <button style={{ marginLeft: 127 }} className="btn" onClick={() => handleOperation('0')}>0</button>
            </div >


        </>
    )
}