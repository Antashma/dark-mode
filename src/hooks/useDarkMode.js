import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    //return true or false
    const [darkMode, setDarkMode] = useLocalStorage('dark_mode');
    return [darkMode, setDarkMode];
}

