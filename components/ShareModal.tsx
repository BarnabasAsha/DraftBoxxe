import Modal from "./Modal"
import toast, { Toaster } from "react-hot-toast"

const ShareModal = ({ slug, title, closeModal }: { slug: string, title: string, closeModal: () => void }) => {

    const url = `https://draftboxe.netlify.app/share/${slug}`

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        toast.success('Successfully copied!')
    }

    return (
        <Modal>
            <div className="w-full h-full shadow-sm p-4 relative">
                <div className="w-full relative border border-gray-200 rounded p-3 my-7 md:my-10">
                    <input className="w-full h-full bg-transparent border-0 outline-none" type="text" value={url} name="noteUrl" aria-label="Note Share Url" readOnly />
                    <button onClick={handleCopy} className="absolute bg-tertiary outline-none top-0 right-2 w-8 h-full"><i className="fas fa-copy"></i></button>
                </div>
                <div className="flex flex-col justify-center items-center md:flex-row md:justify-center">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`} target="_blank" title="Share on Facebook" className="mb-2 w-28 flex justify-center items-center h-10 bg-blue-600 rounded text-sm text-white border p-2"><i className="fab fa-facebook"></i> <span className="ml-1">Facebook</span></a>
                    <a href={`https://twitter.com/share?url=${url}&text=${title}`} target="_blank" title="Share on Twitter" className="mb-2 w-28 h-10 flex justify-center items-center bg-blue-500 rounded text-sm text-white border p-2"><i className="fab fa-twitter"></i><span className="ml-1">Twitter</span></a>
                    <a href={`whatsapp://send?text=${url}`} data-action="share/whatsapp/share" target="_blank" title="Share on Whatsapp" className="mb-2 w-28 h-10 flex justify-center items-center bg-green-500 rounded text-sm text-white border p-2"><i className="fab fa-whatsapp"></i><span className="ml-1">Whatsapp</span></a>
                </div>
                <button onClick={closeModal} className="w-10 h-10 absolute text-xl top-1 right-1"><i className="fas fa-times-circle"></i></button>
            </div>
            <Toaster position="top-right" />
        </Modal>
    )
}

export default ShareModal