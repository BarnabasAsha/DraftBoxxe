import Link from 'next/link'

const EmptyList = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center p-4">
            <div className="w-full md:w-2/5">
                <img className="w-full" src="/empty-notes.png" alt="No notes created" />
            </div>
            <h1 className="text-gray-300 text-xl mb-4 font-bold">Start by creating a note</h1>
            <Link href="/create-note"><a className="bg-white rounded text-secondary font-semibold px-4 py-2 text-sm"><span className="mr-1"><i className="fas fa-plus"></i></span> Create a note</a></Link>
        </section>
    )
}

export default EmptyList