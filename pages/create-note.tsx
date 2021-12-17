import { useState } from 'react'
import Layout from "../components/Layout"
import NoteEditor from '../components/NoteEditor'
import supabase from '../utils/supaBaseClient'
import { createNote } from '../services/noteService'
import NoteHeader from '../components/NoteHeader'
import toast, { Toaster } from 'react-hot-toast'

const CreateNote = () => {
    const [content, updateContent] = useState({title: "", content: "", snapshot: ""})
    const [edit, setEdit] = useState(true)
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
            toast.error(error.message)
          }setEdit(false)
        }catch (e) {
            toast.error(e.message)
            console.log(e.message)
        }finally {
            setLoading(false)
          }
    }

    return (
        <Layout>
            <NoteHeader edit={edit} setEdit={setEdit} loading={loading} action={createNewNote} />
            <NoteEditor initialContent={{title: null, content: null}} saveContent={saveContent} />
            <Toaster position='top-right' />
        </Layout>
    )
}

export default CreateNote