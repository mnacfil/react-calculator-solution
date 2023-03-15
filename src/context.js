import React, { useContext, useEffect, useState, useCallback } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [current, setCurrent] = useState("0");
    const [previous, setPrevious] = useState(null);
    const [operator, setOperator] = useState(null);
    const [isPerformingOperation, setIsPerformingOperation] = useState(false);
    const [isEqualSignClick, setIsEqualSignClick] = useState(false);

    const displayNumber = useCallback((digit) => {
        console.log("Displaying number...");
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
        if(isEqualSignClick) {
            setIsEqualSignClick(false);
            setCurrent(digit);
            return;
        }
        setCurrent(old => old + digit);
    }, [ current ]);

    const clear = useCallback(() => {
        console.log("clear");
        setCurrent("0");
        setPrevious(null);
        setOperator(null);
        setIsPerformingOperation(false);
        setIsEqualSignClick(false);
    }, [current]);

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

    const chooseOperator = useCallback((targetOperator) => {
        if(current === "0") return;
        if(isPerformingOperation) {
            setCurrent(calculate(previous, current, targetOperator));
            setPrevious(old => (calculate(old, current, targetOperator)));
            return;
        }
        setPrevious(current);
        setOperator(targetOperator);
        setIsPerformingOperation(true);
        setIsEqualSignClick(false);
    }, [current]);

    const evaluate = () => {
        if(!previous || !operator) return;
        setCurrent(calculate(previous, current, operator));
        setIsEqualSignClick(true);
        setPrevious(null);
        setOperator(null);
    }
    
    const convertoDecimal = useCallback((value) => {
        setCurrent((parseFloat(value) / 100).toString());
    }, [current]);

    const toggleSign  = useCallback(() => {
        if(!current.includes("-")) {
            setCurrent(`-${current}`);
        } else {
            setCurrent(current.replace('-', ''));
        }
    }, [current]);

    const NumberFormat = new Intl.NumberFormat('es-US', {
        maximumFractionDigits: 0
    });

    const formatCurrentValue = useCallback((value) => {
        console.log("formating value...");
        if(!value.toString().includes(".")) {
            return NumberFormat.format(value);
        }
        const [integer, decimal] = value.toString().split('.');
        return `${NumberFormat.format(integer)}.${decimal}`;
    }, [current]);

    return (
        <AppContext.Provider 
            value={{
                current,
                displayNumber,
                clear,
                chooseOperator,
                evaluate,
                convertoDecimal,
                toggleSign,
                formatCurrentValue
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}