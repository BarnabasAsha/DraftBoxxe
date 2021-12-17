import { useState } from "react"
import Link from "next/link"
import Layout from "../components/Layout"
import Box from "../components/Box"
import { searchNotes } from "../services/noteService"
import Seo from "../components/Seo"
import debounce from "../utils/debounce"
import EmptySearch from "../components/EmptySearch"
import Loader from "../components/Loader"

interface iNote {title:string, id:Number, snapshot:string, created_at:string, slug:string, key:any}

const Search = () => {
    const [notes, setNotes] = useState<iNote[]>([])
    const [loading, setLoading] = useState(false)
    const [noResult, setNoResult] = useState(false)
    const [query, setQuery] = useState('')

    const runQuery = async () => {
        try {
            setLoading(true)
            const { data } = await searchNotes(query)
            data.length ? setNoResult(false) : setNoResult(true)
            setNotes([...data])
        }catch(e) {
            console.log(e.message)
        }finally {
            setLoading(false)
        }
    }

    const searchHandler = ({ target }) => {
        setQuery(target.value)
        const run = debounce(runQuery, 2000)
        run()
    }

    return (
        <Layout>
        <Seo title="Search" />
       <div className="max-w-7xl w-full mx-auto p-4">
       <Link href="/library"><a className="mt-4 border rounded-lg border-gray-200 py-2 px-3" aria-label="Back to notes"><i className="fas fa-long-arrow-alt-left mr-2"></i>Back to library</a></Link>
            <div className="my-5 w-full flex justify-center mt-5">
                <input className="max-w-xl rounded-xl bg-transparent w-full py-4 px-6 border border-gray-200 mx-auto" name="search" type="search" placeholder="Search here..." value={query} onChange={searchHandler} autoFocus/>
            </div>
            {
                loading ? (
                    <Loader />
                ) : (
                    notes && notes.length ? (
                        <ul className="mt-10 w-full p-4 max-w-6xl mx-auto grid grid-cols-layout items-center gap-5">
                            {
                                notes.map(note => <Box key={note.id} {...note} />)
                            }
                        </ul>
                    ) : noResult ? <EmptySearch /> : null
                )
            }
       </div>
        </Layout>
    )
}

export default Search