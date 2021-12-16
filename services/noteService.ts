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
    const response = await supabase.from('notes').select(`id, title, snapshot, created_at, slug`).eq('created_by', user.id)
    return response
}

export const getSingleNote = async (id) => {
   const response = await supabase.from('notes').select(`id, title, content, slug, snapshot`).eq('id', id)
   return response
}

export const updateNote = async (new_note, id) => {
    const response = await supabase.from('notes').update({...new_note}, {returning: "minimal"}).eq('id', id)
    return response
}

export const deleteNote = async (id:Number) => {
    console.log(id)
    const response = await supabase.from('notes').delete({returning: 'minimal'}).match({id: id})
    return response
}

export const searchNotes = async (query) => {
    const response = await supabase.from('notes').select().textSearch('title', `${query}`).eq('created_by', user.id)
    return response
}

export const createNote = async (new_note:Note) => {
    const response = await supabase.from('notes').insert([new_note], {returning: 'minimal'})
    return response
}