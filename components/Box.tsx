import Link from "next/link"

type note = {
    id: Number,
    title: "",
    snapshot: "",
    created_at: ""
}

const Box = ({id, title, snapshot, created_at}:note) => {
    return (
        <li className="relative w-64 rounded-xl h-40 bg-gray-100 shadow-sm p-5">
            <div>
                <time className="text-xs font-medium text-gray-400">{(new Date(created_at).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))}</time>
                <h2 className="text-base font-bold my-2">
                    <Link href={`/note/${id}`}>
                        <a className="">
                            { title }
                        </a>
                    </Link>
                </h2>
                <p className="text-sm">{snapshot.substring(0, 102)}...</p>
            </div>
            <button className="absolute w-8 top-3 right-0 cursor-pointer outline-none">
                <i className="fas fa-ellipsis-v"></i>
            </button>
        </li>
    )
}

export default Box