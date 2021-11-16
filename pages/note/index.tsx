import { useState } from 'react'
import Link from 'next/link'
import Layout from "../../components/Layout"
import NoteEditor from '../../components/NoteEditor'
import supabase from '../../utils/supaBaseClient'

const CreateNote = () => {
    const [content, updateContent] = useState({title: "", content: "", snapshot: ""})
    const [loading, setLoading] = useState(false)
    const user = supabase.auth.user()

    const saveContent = (content: {title: "", content: "", snapshot: ""}) => {
        updateContent(content)
    }

    const createNewNote = async () => {
        try {
            setLoading(true)
            console.log('loading...')
            const new_note = {
                ...content,
                slug: content.title.replaceAll(" ", "-"),
                created_by: user.id
            }
           const {error} = await supabase.from('notes').insert([new_note], {returning: 'minimal'})
           if (error) {
            throw error
          }
        }catch (e) {
            console.log(e.message)
        }finally {
            setLoading(false)
          }
    }

    return (
        <Layout>
            <div className="w-full flex justify-between items-center shadow px-5 py-2">
                <Link href="/library"><a className="border border-gray-200 p-2" aria-label="Back to notes"><i className="fas fa-long-arrow-alt-left mr-2"></i>Back to collection</a></Link>
                <button onClick={createNewNote} className="border px-4 py-2"><span className="mr-1"><i className="fas fa-save"></i></span>Save</button>
            </div>
            <NoteEditor saveContent={saveContent} />
        </Layout>
    )
}

export default CreateNote