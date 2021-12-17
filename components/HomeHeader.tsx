import Link from 'next/link'

const HomeHeader = () => {
    return (
        <header className="flex justify-between items-center w-100 px-2 md:px-8 py-6">
            <Link href="/">
                <a><img className="w-40" src="/logo.png" alt="Draftboxe" /></a>
            </Link>
            <div className="flex">
            <Link href="/login">
                <a className="flex justify-center items-center text-sm md:text-base mr-3 md:mr-6 font-medium">
                    Login
                </a>
            </Link>
            <Link href="/signup">
                  <a className="flex justify-center items-center text-sm md:text-base w-32 md:w-40 h-10 md:h-12 border-2 rounded-lg border-white text-white"><span className="font-medium">Sign up</span> - it's free</a>
            </Link>
            </div>
        </header>
    )
}

export default HomeHeader