import React, { useContext, useEffect, useState, useCallback } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [current, setCurrent] = useState("0");
    const [previous, setPrevious] = useState(null);
    const [operator, setOperator] = useState(null);
    const [isPerformingOperation, setIsPerformingOperation] = useState(false);
    const [isEqualSignClick, setIsEqualSignClick] = useState(false);
    const [forMattedValue, setFormattedValue] = useState(null);

    const displayNumber = (digit) => {
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
    }

    const clear = useCallback(() => {
        setCurrent("0");
        setPrevious(null);
        setOperator(null);
        setIsPerformingOperation(false);
        setIsEqualSignClick(false);
        setFormattedValue(null);
    }, [current]);

    const calculate = (prevValue, currentValue, operator) => {
        let result;
        const prev = parseFloat(prevValue);
        const curr = parseFloat(currentValue);
        switch(operator) {
            case "+":
                result = prev + curr
                break;
            case "-":
                result = prev - curr
                break;
            case "x":
                result = prev * curr
                break;
            case "÷":
                result = prev / curr
                break;
        }
        if(!result.toString().includes('.')) return result.toString();
        const fixedResult = Number(result).toFixed(2);
        return fixedResult.toString();
    }

    const chooseOperator = (targetOperator) => {
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
    }

    const evaluate = () => {
        if(!previous || !operator) return;
        setIsEqualSignClick(true);
        setCurrent(calculate(previous, current, operator));
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

    useEffect(() => {
        if(current === "0") return;
        if(!current.toString().includes(".")) {
            if(current.length > 3) {
                setFormattedValue(NumberFormat.format(Number(current)));
            } else {
                setFormattedValue(null);
            }
        } else {
            const [integer, decimal] = current.toString().split('.');
            if(integer.length > 3) {
                setFormattedValue(`${NumberFormat.format(Number(integer))}.${decimal}`);
            } else {
                setFormattedValue(null);
            }
        }
    }, [current]);

    return (
        <AppContext.Provider 
            value={{
                current,
                forMattedValue,
                displayNumber,
                clear,
                chooseOperator,
                evaluate,
                convertoDecimal,
                toggleSign,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}