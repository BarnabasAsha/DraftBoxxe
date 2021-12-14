import Link from "next/link"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import useMenu from "../hooks/useMenu"
import { deleteNote } from "../services/noteService"
import { useDialog } from "./Dialog"
import BoxMenu from "./Menu"
import ShareModal from "./ShareModal"

type note = {
    id: Number,
    title: string,
    snapshot: string,
    created_at: string,
    slug: string
}

const Box = ({id, title, snapshot, created_at, slug }:note) => {
    const { visibility, position, toggleVisibility, showMenu } = useMenu()
    const { showDialog } = useDialog()
    const [showShare, setShowShare] = useState(false)

    const handleDelete = async () => {
        const message = <>Are you sure you want to delete <strong>{title}</strong>?</>
        const userResponse = await showDialog(message)
        if(userResponse) {
            try {
              const { error } =  await deleteNote(id)
              if(error) {
                  console.log(error, 'hey')
              }
            }catch(error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const handleShare = () => setShowShare(share => !share)
    
    const menuList = [
        {
            item: <span><i className="fas fa-share-alt"></i><span className="ml-3">Share</span></span>,
            'action': handleShare
        },
        {
            item: <span><i className="fas fa-trash"></i><span className="ml-3">Delete</span></span>,
            'action': handleDelete
        }
    ]


    return (
        <li className="relative w-64 rounded-xl h-48 bg-gray-100 shadow-sm p-5 overflow-hidden">
            <div>
                <time className="text-xs font-medium text-gray-400">{(new Date(created_at).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))}</time>
                <h2 className="text-base leading-5 font-bold my-2">
                    <Link href={`/note/${id}`}>
                        <a className="">
                            { title }
                        </a>
                    </Link>
                </h2>
                <p className="text-sm text-justify">{snapshot.substring(0, 120)}...</p>
            </div>
            <button onClick={showMenu} className="absolute w-8 top-3 right-0 cursor-pointer outline-none">
                <i className="fas fa-ellipsis-v"></i>
            </button>
            { visibility ? <BoxMenu closeMenu={toggleVisibility} position={position} list={menuList} /> : null }
            { showShare ? <ShareModal slug={slug} closeModal={handleShare} /> : null }
            <Toaster position="top-right" />
        </li>
    )
}

export default Box