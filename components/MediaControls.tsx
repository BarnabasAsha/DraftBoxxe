import { useState } from "react"
import MediaModal from "./MediaModal"

const MediaControls = (props: { onToggle: Function }) => {
    const [show, setShow] = useState(false)
    const [type, setType] = useState('')

    const handleUpload = (type: string, value: string) => {
        props.onToggle(type, value)
        setShow(false)
    }

    const triggerUpload = (type: string) => {
        setType(type)
        setShow(true)
    }

    const closeModal = () => {
        setShow(false)
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
                    <MediaModal closeModal={closeModal} type={type} toggle={handleUpload} />
                ) : null
            }
        </>
    )
}

export default MediaControls