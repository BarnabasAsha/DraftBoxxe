import React, { FC, useContext, useRef, useState } from "react";
import Modal from "./Modal";

type ContextType = {
  showDialog: Function
}

const DialogContext = React.createContext<ContextType>({
  showDialog: () => {}
})

const Dialog:FC = ({ children }) => {
  const [show, setShow] = useState(false)
  const [dialogMessage, setDialogMessage] = useState('')

  const resolver = useRef<any>()

  const showDialog = (message:string) => {
    setShow(true);
    setDialogMessage(message)

    return new Promise(function (resolve) {
      resolver.current = resolve;
    });
  };

  const handleOk = () => {
    resolver.current && resolver.current(true);
    setShow(false)
  };

  const handleCancel = () => {
    resolver.current && resolver.current(false);
    setShow(false)
  };

  return (
        <DialogContext.Provider value={{ showDialog: showDialog }}>
            { children }
            {
                show
                  ? (
                    <Modal>
                      <div className="p-3 w-full h-full shadow-sm flex flex-col justify-center items-center">
                      <p className="font-medium text-center mb-5">{dialogMessage}</p>
                      <div className="w-full mt-10 flex justify-around items-center">
                          <button className="bg-secondary rounded text-white font-semibold px-4 py-2 text-sm" onClick={handleCancel}>No, Don&apos;t</button>
                          <button className="bg-red-500 rounded text-white font-semibold px-4 py-2 text-sm" onClick={handleOk}>Yes, continue</button>
                      </div>
                      </div>
                </Modal>
                    )
                  : null
            }
        </DialogContext.Provider>
  )
}

export const useDialog = () => useContext(DialogContext)

export default Dialog
