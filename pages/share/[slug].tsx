import Link from "next/link"
import Footer from "../../components/Footer"
import Viewer from "../../components/Viewer"
import supabase from "../../utils/supaBaseClient"

const NoteView = ({ note }) => {
    return (
        <div className="bg-secondary text-gray-200">
            <header className="p-4">
                <Link href="/">
                    <a className=""><img className="w-40" src="/logo.png" alt="Draftboxe" /></a>
                </Link>
                <div></div>
            </header>
            <Viewer title={note.title} content={note.content} />
            <Footer />
        </div>
    )
}

export const getStaticPaths = async () => {
    const { data } = await supabase.from('notes').select(`slug`)
    const paths = data.map(slug => ({ params: { slug: slug.slug } }))
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const slug = context.params.slug
    const { data } = await supabase.from('notes').select(`id, title, content, created_by`).eq('slug', slug)

    return {
        props: { note: data[0] }
    }
}

export default NoteView