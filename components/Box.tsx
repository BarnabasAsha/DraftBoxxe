import Link from "next/link"
import { useState } from 'react'
import useMenu from "../hooks/useMenu"
import BoxMenu from "./Menu"

type note = {
    id: Number,
    title: "",
    snapshot: "",
    created_at: ""
}

const Box = ({id, title, snapshot, created_at}:note) => {
    const { visibility, position, toggleVisibility, showMenu } = useMenu()
    
    const menuList = [
        {
            item: <span><i className="fas fa-share-alt"></i><span className="ml-3">Share</span></span>,
            'action': () => console.log('share')
        },
        {
            item: <span><i className="fas fa-trash"></i><span className="ml-3">Delete</span></span>,
            'action': () => console.log('delete')
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
        </li>
    )
}

export default Box