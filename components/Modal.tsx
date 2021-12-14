import React, { FC, useEffect, useRef } from "react"
import ReactDOM from "react-dom"

const Modal: FC = ({ children }) => {
    let elRef = useRef(document.createElement('div'))
    let rootElement: any;

    useEffect(() => {
        rootElement = document.getElementById('modal-root')
        if (!rootElement && !elRef) {
            console.log(elRef, 'this is elref')
            return
        }
        rootElement.appendChild(elRef.current)

        return () => {
            rootElement.removeChild(elRef.current)
        }
    }, [])

    const ModalContent =
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-400 flex justify-center items-center bg-opacity-30 zee">
            <div className="w-4/5 md:w-2/5 h-80 bg-white rounded-lg shadow">
                {children}
            </div>
        </div>


    return ReactDOM.createPortal(ModalContent, elRef.current)
}

export default Modal