import Modal from "./Modal"

const MediaModal = (props: { type: string, toggle: Function, closeModal: Function }) => {
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
        <Modal>
        <div className="relative w-full h-full flex flex-col justify-center items-center">
            <div className="mb-4">
                <i className="text-3xl fas fa-image"></i>
            </div>
            <div>
                <input onKeyDown={handleLinkChange} className="w-full border border-gray-600 outline-none p-2 text-sm" type="text" aria-label="Insert Image Url or Link" placeholder="Insert image link or url..." />
            </div>
            <span className="text-xl my-5">-----OR-----</span>
            <div className="mt-4">
                <label className="cursor-pointer bg-secondary text-white text-sm py-2 px-4" htmlFor="upload">Browse Files</label>
                <input className="sr-only" onChange={handleChange} id="upload" type="file" accept={handleFileType()} />
            </div>
            <button onClick={() => props.closeModal()} className="absolute text-xl top-3 right-3"><i className="fas fa-times-circle"></i></button>
        </div>
    </Modal>
    )
}

export default MediaModal;