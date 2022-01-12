import Link from "next/link"

const Footer = () => {
    return (
        <footer className="absolute bottom-4 left-0 w-full flex flex-col justify-center items-center">
            <Link href="/">
                <a className=""><img className="w-40" src="/logo.png" alt="Draftboxe" /></a>
            </Link>
            <div className="my-3">
                Made with ❤ by <a className="underline" href="https://github.com/Barnabasasha" target="_blank">Barnabas Asha</a>
            </div>
        </footer>
    )
}

export default Footer