import { useState } from "react";

const useToggle = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const open = () => {
        setIsOpen(true);
    };
    const close = () => {
        setIsOpen(false);
    };
    const toggle = () => {
        setIsOpen((prev) => !prev);
    };
    return { open, close, toggle, isOpen };
};
export default useToggle;
