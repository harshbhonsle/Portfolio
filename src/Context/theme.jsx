import {createContext, useContext} from 'react'
import { useState } from 'react';
const ThemeContext = createContext(null);

const ThemeContextProvider = ({children}) =>{
    const [themeMode, setThemeMode] = useState('dark');

    return (
        <ThemeContext.Provider value={{themeMode, setThemeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider};