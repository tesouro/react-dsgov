import React, { useEffect } from 'react';

/**
 * 
 * Função adaptada do stackoverflow: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 * 
 * @param ref 
 * @param callback 
 */
export default function useOutsideClick(ref : any, callback : () => void) {
    useEffect(() => {

        function handleClickOutside(event : any) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
}
  