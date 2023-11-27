import React from 'react';
// AudioContext.jsx
import { useContext } from 'react';

const AudioContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const AudioProvider = ({ children }) => {
    const audio = new Audio();



    return (
        <AudioContext.Provider value={audio}>
            {children}
        </AudioContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAudio = () => useContext(AudioContext);
