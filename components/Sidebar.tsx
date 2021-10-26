import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className="bg-secondary h-screen text-white w-60 py-10">
            <div className="flex flex-col justify-between h-full w-full items-start">
                <div className="w-full mt-5">
                    <div className="flex justify-between items-center w-100 p-3 mb-8">
                        <h2 className="font-semibold">Workspaces</h2>
                        <button className="mt-1 outline-none">
                            <i className="far fa-plus-square text-xl"></i>
                            <span className="sr-only">Create New Workspace</span>
                        </button>
                    </div>
                    <ul className="flex flex-col mt-4">
                        <li className="flex justify-between items-center font-semibold bg-white text-dark py-3 px-4">
                            <Link href="">
                                <a>My Box</a>
                            </Link>
                            <span className="cursor-pointer">
                                <i className="fas fa-ellipsis-v"></i>
                            </span>
                        </li>
                        <li className="flex justify-between items-center font-semibold bg-transparent text-gray-200 py-3 px-4">
                            <Link href="">
                                <a>Work</a>
                            </Link>
                            <span className="cursor-pointer">
                                <i className="fas fa-ellipsis-v"></i>
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="font-semibold bg-transparent text-gray-200 py-3 px-4">
                            <Link href="">
                                <a className="flex items-center">
                                    <span className="cursor-pointer mr-3">
                                        <i className="fas fa-bell"></i>
                                    </span>
                                    <span>Notifications</span>
                                </a>
                            </Link>
                        </li>
                        <li className="font-semibold bg-transparent text-gray-200 py-3 px-4">
                            <Link href="">
                                <a className="flex items-center">
                                    <span className="cursor-pointer mr-3">
                                        <i className="fas fa-cog"></i>
                                    </span>
                                    <span>Settings</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;