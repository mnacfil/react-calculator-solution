import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [current, setCurrent] = useState("0");
    const [previous, setPrevious] = useState(null);
    const [operator, setOperator] = useState(null);

    // Every time user click operator
    // save the current into previous

    const displayNumber = (digit) => {
        if(current.includes("0") && digit === "0") return;
        if(current === "0") {
            setCurrent(digit.toString());
            return;
        }
        setCurrent(old => old.toString() + digit.toString());
    }

    const clear = () => {
        setCurrent("0");
        setPrevious(null);
        setOperator(null);
    }

    return (
        <AppContext.Provider 
            value={{
                current,
                displayNumber,
                clear
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}