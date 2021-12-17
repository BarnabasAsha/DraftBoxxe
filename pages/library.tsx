import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import Box from "../components/Box"
import Layout from "../components/Layout"
import { getAllNotes, searchNotes } from '../services/noteService'
import Dialog from '../components/Dialog'
import Seo from '../components/Seo'
import EmptyList from '../components/EmptyList'
import Loader from '../components/Loader'

interface iNote { title: string, id: Number, snapshot: string, created_at: string, slug: string, key: any }

const Library = () => {
    const [notes, updateNotes] = useState<iNote[]>([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const getNotes = async () => {
        try {
            setLoading(true)
            const { data } = await getAllNotes()
            updateNotes([...data])
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error.message)
        }
    }

    const searchToggler = async () => {
        router.push('/search')
    }

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <Layout>
            <Seo />
            <div className="w-100 p-10">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl">My Notes</h2>
                    <Link href="/create-note"><a className="bg-white rounded text-secondary font-semibold px-4 py-2 text-sm"><span className="mr-1"><i className="fas fa-plus"></i></span> New Note</a></Link>
                </div>
                {
                    notes && notes.length ? (
                        <div>
                            <input className="mt-5 rounded border border-white bg-transparent p-3 w-64 h-10 outline-none" type="search" placeholder="Search here..." onSelect={searchToggler} />
                        </div>
                    ) : null
                }
                <Dialog>
                    {
                        loading ? (
                            <Loader />
                        ) : (
                            notes && notes.length ? (
                                <ul className="mt-10 w-full grid grid-cols-layout items-center gap-5">
                                    {
                                        notes.map(note => <Box key={note.id} {...note} />)

                                    }
                                </ul>
                            ) : <EmptyList />
                        )
                    }

                </Dialog>
            </div>
        </Layout>
    )
}

export default Library