import React from 'react';
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark_mode', 'true');
}