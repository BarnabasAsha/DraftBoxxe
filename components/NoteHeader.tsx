import Link from 'next/link'

const NoteHeader = ({ loading, action }:{loading: boolean, action: () => void}) => {
    return (
        <div className="w-full flex justify-between items-center shadow px-5 py-2">
        <Link href="/library"><a className="border border-gray-200 p-2" aria-label="Back to notes"><i className="fas fa-long-arrow-alt-left mr-2"></i>Back to collection</a></Link>
        {
            loading ? (
                <button disabled className="border px-4 py-2"><span className="mr-1"><i className="fas fa-save"></i></span>Loading...</button>
            ): (
                <button onClick={action} className="border px-4 py-2"><span className="mr-1"><i className="fas fa-save"></i></span>Save</button>
            )
        }
    </div>
    )
}

export default NoteHeader