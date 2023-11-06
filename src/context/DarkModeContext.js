// DarkModeContext.js
import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [colorRed, setcolorRed] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    };

    const toggleDarkModeRed = () => {
        setcolorRed(!colorRed);
        if (!colorRed) {
            document.body.classList.add('forRedDark');
        } else {
            document.body.classList.remove('forRedDark');
        }
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, toggleDarkModeRed,colorRed }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    return useContext(DarkModeContext);
};
