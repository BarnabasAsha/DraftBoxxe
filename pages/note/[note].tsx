import { useState } from "react"
import Layout from "../../components/Layout"
import NoteEditor from '../../components/NoteEditor'
import { getSingleNote, updateNote } from "../../services/noteService"
import NoteHeader from "../../components/NoteHeader"

interface Note {
    title: string
    content: string
    snapshot: string
}

const Note = ({ note }) => {
    const [content, updateContent] = useState<Note>({title: "", content: "", snapshot: ""})
    const [loading, setLoading] = useState(false)
    
    const saveContent = (content: Note) => {
        updateContent(content)
    }

    const saveNote = async () => {
        try {
            setLoading(true)
            console.log('loading...')
            const new_note = {
                ...content,
            }
           const {error} = await updateNote(new_note, Number(note.id))
           if (error) {
               console.log(error.message)
            throw error
          } console.log('done')
        }catch (e) {
            console.log(e.message)
        }finally {
            setLoading(false)
          }
    }

    
    return (
        <Layout>
            <NoteHeader loading={loading} action={saveNote} />
            <NoteEditor initialContent={{title: note.title, content: note.content}} saveContent={saveContent} />
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const id = context.params.note
    const { data, error } = await getSingleNote(Number(id))
    if(error) {
        console.log(error)
    }

    return {
        props: {note:data[0]}
    }
}

export default Note