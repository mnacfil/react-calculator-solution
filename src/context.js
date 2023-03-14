import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [current, setCurrent] = useState("0");
    const [previous, setPrevious] = useState(null);
    const [operator, setOperator] = useState(null);
    const [isCalculated, setIsCalculated] = useState(false);
    const [isPerformingOperation, setIsPerformingOperation] = useState(false);

    const displayNumber = (digit) => {
        if(current.startsWith("0") && digit === "0") return;
        if(current === "0" && digit === ".") {
            setCurrent(`0${digit}`);
            return;
        }
        if(current === "0") {
            setCurrent(digit);
            return;
        }
        if(current.includes('.') && digit === ".") return;
        if(isPerformingOperation) {
            setIsPerformingOperation(false);
            setCurrent(digit);
            return;
        }
        if(isCalculated) {
            setIsCalculated(false);
            setCurrent(digit);
            return;
        }
        setCurrent(old => old + digit);
    }

    const clear = () => {
        setCurrent("0");
        setPrevious(null);
        setOperator(null);
        setIsPerformingOperation(false);
    }

    const calculate = (prevValue, currentValue, operator) => {
        let result;
        const prev = parseFloat(prevValue);
        const current = parseFloat(currentValue)
        switch(operator) {
            case "+":
                result = prev + current
                break;
            case "-":
                result = prev - current
                break;
            case "x":
                result = prev * current
                break;
            case "÷":
                result = prev / current
                break;
        }
        return result.toString();
    }

    const chooseOperator = (targetOperator) => {
        if(current === "0") return;
        // if(current !== "0" && !previous) {
        //     setPrevious(current);
        //     setOperator(targetOperator)
        //     return;
        // }
        setPrevious(current);
        setOperator(targetOperator);
        setIsPerformingOperation(true);
    }

    const evaluate = () => {
        if(!previous || !operator) return;
        setCurrent(calculate(previous, current, operator));
        setIsCalculated(true);
        setIsPerformingOperation(false);
        setPrevious(null);
        setOperator(null);
    }
    
    const convertoDecimal = (value) => {
        setCurrent((parseFloat(value) / 100).toString());
    }

    const toggleSign  = () => {
        if(!current.includes("-")) {
            setCurrent(`-${current}`);
        } else {
            setCurrent(current.replace('-', ''));
        }
    }

    return (
        <AppContext.Provider 
            value={{
                current,
                displayNumber,
                clear,
                chooseOperator,
                evaluate,
                convertoDecimal,
                toggleSign
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}