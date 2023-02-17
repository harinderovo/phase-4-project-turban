import React, { useState, useEffect, createContext } from "react";

const ErrorContext = createContext()

const ErrorProvider = ({children}) => {
    const [error, setError] = useState({text: "", type: ""})

    return (
        <ErrorContext.Provider value={{error, setError}}>
            {children}
        </ErrorContext.Provider>
    )
}

export {ErrorContext, ErrorProvider} 