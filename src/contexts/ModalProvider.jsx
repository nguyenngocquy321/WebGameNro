import { useState } from 'react';
import { createContext } from 'react';
export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const value = { show, setShow };
    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
};
