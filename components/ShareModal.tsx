import Modal from "./Modal"
import Link from "next/link"
import { useRef } from "react"
import toast, { Toaster } from "react-hot-toast"

const ShareModal = ({ slug, closeModal }:{slug:string, closeModal: () => void}) => {

    const url = `localhost:3000/bee/${slug}`
    const urlInput = useRef()

    const handleCopy = () => {
        const copyText:HTMLInputElement = urlInput.current
        if(copyText) {
            copyText.select()
            copyText.setSelectionRange(0, 99999); /* For mobile devices */
            navigator.clipboard.writeText(copyText.value);
            toast.success('Successfully copied!')
        }

    }

    return (
        <Modal>
            <div className="w-full h-full shadow-sm p-4 relative">
                <div className="w-full relative border border-gray-200 rounded p-3 my-7 md:my-10">
                    <input ref={urlInput} className="w-full h-full bg-transparent border-0 outline-none" type="text" value={url} name="noteUrl" aria-label="Note Share Url" readOnly/>
                    <button onClick={handleCopy} className="absolute bg-tertiary outline-none top-0 right-2 w-8 h-full"><i className="fas fa-copy"></i></button>
                </div>
                <div className="flex flex-col justify-center items-center md:flex-row md:justify-around">
                    <Link href=""><a className="mb-2 w-28 flex justify-center items-center h-10 bg-blue-600 rounded text-sm text-white border p-2"><i className="fab fa-facebook"></i> <span className="ml-1">Facebook</span></a></Link>
                    <Link href=""><a className="mb-2 w-28 h-10 flex justify-center items-center bg-blue-500 rounded text-sm text-white border p-2"><i className="fab fa-twitter"></i><span className="ml-1">Twitter</span></a></Link>
                    <Link href=""><a className="mb-2 w-28 h-10 flex justify-center items-center bg-green-500 rounded text-sm text-white border p-2"><i className="fab fa-whatsapp"></i><span className="ml-1">Whatsapp</span></a></Link>
                </div>
            <button onClick={closeModal} className="w-10 h-10 absolute text-xl top-1 right-1"><i className="fas fa-times-circle"></i></button>
            </div>
            <Toaster position="top-right" />
        </Modal>
    )
}

export default ShareModal