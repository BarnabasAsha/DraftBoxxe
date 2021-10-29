import React from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const Layout = (props: { children: any }) => {
    return (
        <main className="w-full h-screen flex">
            <Sidebar />
            <section className="w-full h-full bg-gray-200 p-5">
                <Header />
                <>
                    {props.children}
                </>
            </section>
        </main>
    )
}

export default Layout