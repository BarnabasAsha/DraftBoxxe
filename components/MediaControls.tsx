import { useState } from "react"
import Modal from "./Modal"


const UploadMedia = (props: { type: string, toggle: Function }) => {
    const handleChange = (e: any) => {
        const img = e.target.files[0]
        const url = URL.createObjectURL(img)
        props.toggle(props.type, url)
    }

    const handleLinkChange = (e: any) => {
        if (e.which === 13) {
            props.toggle(props.type, e.target.value)
        }
    }

    const handleFileType = () => {
        switch (props.type) {
            case 'image':
                return 'image/*'
            case 'audio':
                return 'audio/*'
            case 'video':
                return 'video/*'
            default:
                return '';
        }
    }
    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center">
            <div className="mb-4">
                <i className="text-3xl fas fa-image"></i>
            </div>
            <div>
                <input onKeyDown={handleLinkChange} className="border border-gray-600 outline-none p-2 text-sm" type="text" aria-label="Insert Image Url or Link" placeholder="Insert image link or url..." />
            </div>
            <span className="text-xl my-5">-----OR-----</span>
            <div className="mt-4">
                <label className="cursor-pointer bg-secondary text-white text-sm py-2 px-4" htmlFor="upload">Browse Files</label>
                <input className="sr-only" onChange={handleChange} id="upload" type="file" accept={handleFileType()} />
            </div>
            <button onClick={() => props.toggle()} className="absolute text-xl top-3 right-3"><i className="fas fa-times-circle"></i></button>
        </div>
    )
}

const MediaControls = (props: { onToggle: Function }) => {
    const [show, setShow] = useState(false)
    const [type, setType] = useState('')

    const handleUpload = (type: string, value: string) => {
        props.onToggle(type, value)
        setShow(false)
    }

    const triggerUpload = (type: string) => {
        console.log(123)
        setType(type)
        setShow(true)
    }

    return (
        <>
            <div>
                <button className="border-0 outline-none text-black p-1 mx-2" onClick={() => triggerUpload('image')} aria-label="Upload Image"><i className="fas fa-image"></i></button>
                {/* <button className="border-0 outline-none text-black p-1 mx-2" onClick={() => triggerUpload('video')} aria-label="Upload Video"><i className="fas fa-video"></i></button>
                <button className="border-0 outline-none text-black p-1 mx-2" onClick={() => triggerUpload('audio')} aria-label="Upload Audio"><i className="fas fa-headphones"></i></button> */}
            </div>
            {
                show ? (
                    <Modal>
                        <UploadMedia type={type} toggle={handleUpload} />
                    </Modal>
                ) : null
            }
        </>
    )
}

export default MediaControls