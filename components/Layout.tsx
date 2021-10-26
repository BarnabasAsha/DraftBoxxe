import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const Layout = ({ children }) => {
    return (
        <main className="w-full flex">
            <Sidebar />
            <section className="w-full bg-gray-200 p-5">
                <Header />
                <>
                    {children}
                </>
            </section>
        </main>
    )
}

export default Layout