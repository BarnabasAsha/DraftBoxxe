import Link from 'next/link'

interface Header {
    loading: boolean,
    action: () => void,
    edit: boolean,
    setEdit: Function
}

const NoteHeader = ({ loading, action, edit, setEdit }:Header) => {
    return (
        <div className="w-full flex justify-between items-center shadow px-5 py-2 mt-4">
        <Link href="/library"><a className="border rounded-lg border-gray-200 py-2 px-3" aria-label="Back to notes"><i className="fas fa-long-arrow-alt-left mr-2"></i>Back to library</a></Link>
        {
            edit ? (
                loading ? (
                    <button disabled className="rounded-lg border px-4 py-2"><span className="mr-1"><i className="fas fa-save"></i></span>Loading...</button>
                ): (
                    <button onClick={action} className="rounded-lg border px-4 py-2"><span className="mr-1"><i className="fas fa-save"></i></span>Save</button>
                )
            ) : (
                <button onClick={() => setEdit(true)} className="rounded-lg border px-4 py-2"><span className="mr-1"><i className="far fa-edit"></i></span>Edit</button>
            )
        }
    </div>
    )
}

export default NoteHeader