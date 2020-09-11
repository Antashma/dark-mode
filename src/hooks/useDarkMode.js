import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    //return true or false
    const [darkMode, setDarkMode] = useLocalStorage('dark_mode', false);
    return [darkMode, setDarkMode];
}

