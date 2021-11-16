import { useState } from "react"
import Layout from "../../components/Layout"
import Link from 'next/link'
import NoteEditor from '../../components/NoteEditor'
import supabase from "../../utils/supaBaseClient"

const CreateNote = ({ note }) => {
    const [content, updateContent] = useState({title: "", content: "", snapshot: ""})
    const [loading, setLoading] = useState(false)
    
    const saveContent = (content: {title: "", content: "", snapshot: ""}) => {
        updateContent(content)
    }

    const SaveNote = async () => {
        try {
            setLoading(true)
            console.log('loading...')
            const new_note = {
                ...content,
            }
           const {error} = await supabase.from('notes').update({...new_note}, {returning: "minimal"}).eq('id', Number(note.id))
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
            <div className="w-full flex justify-between items-center shadow px-5 py-1">
            <Link href="/library"><a className="border border-gray-200 p-2" aria-label="Back to notes"><i className="fas fa-long-arrow-alt-left mr-2"></i>Back to collection</a></Link>
                <button onClick={SaveNote} className="border px-4 py-2"><span className="mr-1"><i className="fas fa-save"></i></span>Save</button>
            </div>
            <NoteEditor initialContent={{title: note.title, content: note.content}} saveContent={saveContent} />
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const id = context.params.note
    const { data, error } = await supabase.from('notes').select(`id, title, content`).eq('id', Number(id))
    if(error) {
        console.log(error)
    }

    return {
        props: {note:data[0]}
    }
}

export default CreateNote