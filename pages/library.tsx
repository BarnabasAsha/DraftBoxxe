import { useState, useEffect } from 'react'
import Link from "next/link"
import Box from "../components/Box"
import Layout from "../components/Layout"
import supabase from "../utils/supaBaseClient"

const Library = () => {
    const [notes, updateNotes] = useState<{title: "", id:Number, snapshot:"", created_at:"", key:any}[]>([])
    const [loading, setLoading] = useState(false)

    const getNotes = async () => {
        const user = supabase.auth.user()
        try {
            setLoading(true)
            const { data } = await supabase.from('notes').select(`id, title, snapshot, created_at`).eq('created_by', user.id)
            console.log(data, user.id, "heyy")
            updateNotes(data)
            // if(error) {
            //     throw(error)
            // }
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
                    <Link href="/note"><a className="bg-secondary rounded text-white font-semibold px-4 py-2 text-sm">+ New Note</a></Link>
                </div>
                <div>
                <input className="mt-5 rounded border border-secondary bg-transparent p-3 w-64 h-10 outline-none" type="search" placeholder="Search here..." />
                </div>
                <ul className="mt-10 w-full grid grid-cols-layout items-center gap-5">
                    {
                        notes.map(note => <Box key={note.id} {...note} />)
                    }
                </ul>

            </div>
        </Layout>
    )
}

export default Library