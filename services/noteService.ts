import supabase from "../utils/supaBaseClient"

interface Note {
    title: string
    content: string
    snapshot: string
    slug: string
    created_by: string
}

const user = supabase.auth.user()

export const getAllNotes = async () => {
    const response = await supabase.from('notes').select(`id, title, snapshot, created_at`).eq('created_by', user.id)
    return response
}

export const getSingleNote = async (id) => {
   const response = await supabase.from('notes').select(`id, title, content`).eq('id', id)
   return response
}

export const updateNote = (new_note, id) => {
    const response = supabase.from('notes').update({...new_note}, {returning: "minimal"}).eq('id', id)
    return response
}

export const deleteNote = () => {

}

export const searchNotes = async (query) => {
    const response = await supabase.from('notes').select().textSearch('title', `${query}`)
    return response
}

export const createNote = async (new_note:Note) => {
    const response = await supabase.from('notes').insert([new_note], {returning: 'minimal'})
    return response
}