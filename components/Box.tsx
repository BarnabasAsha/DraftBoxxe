import Link from "next/link"

const Box = () => {
    return (
        <li className="relative w-40 h-36 bg-white shadow-sm p-5">
            <div className="text-sm text-gray-500 absolute top-0 p-3 left-0 w-full flex justify-between">
                <time>Oct 20 2021</time>
                <button className="cursor-pointer outline-none">
                    <i className="fas fa-ellipsis-v"></i>
                </button>
            </div>
            <Link href="">
                <a className="flex items-center justify-center w-full h-full">
                    Today's trials
                </a>
            </Link>
        </li>
    )
}

export default Box