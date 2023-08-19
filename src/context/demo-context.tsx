import { FC, createContext, useState, ReactNode } from "react"
const ThemeContext = createContext(null);

type ThemeContextProps = {
    children: ReactNode
}
const ThemeContextProvider: FC<ThemeContextProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;