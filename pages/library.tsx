import { useState, useEffect } from 'react'
import Link from "next/link"
import Box from "../components/Box"
import Layout from "../components/Layout"
import { getAllNotes } from '../services/noteService'
import Dialog from '../components/Dialog'

interface iNote {title:string, id:Number, snapshot:string, created_at:string, slug:string, key:any}

const Library = () => {
    const [notes, updateNotes] = useState<iNote[]>([])
    const [loading, setLoading] = useState(false)

    const getNotes = async () => {
        try {
            setLoading(true)
            const { data } = await getAllNotes()
            updateNotes(data)
        } catch (error) {
            console.log(error.message)
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getNotes()
    }, [])
    return (
        <Layout>
            <div className="w-100 p-10">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl">My Notes</h2>
                    <Link href="/create-note"><a className="bg-secondary rounded text-white font-semibold px-4 py-2 text-sm">+ New Note</a></Link>
                </div>
                <div>
                <input className="mt-5 rounded border border-secondary bg-transparent p-3 w-64 h-10 outline-none" type="search" placeholder="Search here..." />
                </div>
                <Dialog>
                <ul className="mt-10 w-full grid grid-cols-layout items-center gap-5">
                    {
                        loading ? (
                            <li>Loading...</li>
                        ) : (
                                notes.length ? (
                                    notes.map(note => <Box key={note.id} {...note} />)
                                ) : <li>You have not created any notes</li>
                        )
                    }
                </ul>
                </Dialog>
            </div>
        </Layout>
    )
}

export default Library