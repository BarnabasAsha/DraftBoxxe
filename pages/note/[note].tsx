import { useState } from "react"
import Layout from "../../components/Layout"
import NoteEditor from '../../components/NoteEditor'
import { getSingleNote, updateNote } from "../../services/noteService"
import NoteHeader from "../../components/NoteHeader"
import Viewer from "../../components/Viewer"

interface Note {
    title: string
    content: string
    snapshot: string
}

const Note = ({ note }) => {
    const [content, updateContent] = useState<Note>({title: note.title, content: note.content, snapshot: note.snapshot})
    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const saveContent = (content: Note) => {
        updateContent(content)
    }

    const saveNote = async () => {
        try {
            setLoading(true)
            const new_note = {
                ...content,
            }
           const {error} = await updateNote(new_note, Number(note.id))
           if (error) {
               console.log(error.message)
            throw error
          } setEdit(false)
        }catch (e) {
            console.log(e.message)
        }finally {
            setLoading(false)
          }
    }

    
    return (
        <Layout>
            <NoteHeader loading={loading} edit={edit} setEdit={setEdit} action={saveNote} />
            {
                edit ? (
                    <NoteEditor initialContent={{title: note.title, content: note.content}} saveContent={saveContent} />
                ) : (
                    <Viewer title={content.title} content={content.content} />
                )
            }
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