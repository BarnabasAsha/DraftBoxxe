import { useState } from "react";

const initialPosition = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
}

const useMenu = () => {
    const [visibility, setVisibility] = useState(false)
    const [position, setPosition] = useState(initialPosition)

    const toggleVisibility = () => setVisibility(s => !s)

    const showMenu = (e) => {
        const element = e.target
        const elementPostion = element.getBoundingClientRect()
        setPosition({
            top: elementPostion.top < 70 ? 70 : elementPostion.top,
            left: elementPostion.left > window.innerWidth - 100 ? window.innerWidth - 120 : elementPostion.left,
            right: elementPostion.right,
            bottom: elementPostion.bottom
        })
        toggleVisibility()
    }

    return {
        visibility,
        position,
        showMenu,
        toggleVisibility,
    }
}

export default useMenu

