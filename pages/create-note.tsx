import { useState } from 'react'
import Layout from "../components/Layout"
import NoteEditor from '../components/NoteEditor'
import supabase from '../utils/supaBaseClient'
import { createNote } from '../services/noteService'
import NoteHeader from '../components/NoteHeader'

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
           const {error} = await createNote(new_note)
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
            <NoteHeader loading={loading} action={createNewNote} />
            <NoteEditor initialContent={{title: null, content: null}} saveContent={saveContent} />
        </Layout>
    )
}

export default CreateNote