import React, { useState, useMemo } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

const defaultTheme = localStorage.getItem(
    LOCAL_STORAGE_THEME_KEY
)


const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider