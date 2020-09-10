import React, { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        } else { 
            return initialValue;
        }
    });
    const setValue = (value) => {
        //update state
        setStoredValue(value);
        //save to local storage
        window.localStorage
            .setItem(key, JSON.parse(value))
    };
    return [storedValue, setValue];
}