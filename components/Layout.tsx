import { useRouter } from "next/router"
import React, { useEffect } from "react"
import Header from "../components/Header"
import supabase from "../utils/supaBaseClient"

const Layout = (props: { children: any }) => {
    const router = useRouter()
    const session = supabase.auth.session()

    useEffect(() => {
        if (!session) {
            router.push('/login')
        } 
    }, [session])
    return (
        <main className="w-full h-screen bg-white">
            <Header />
            <section className="_main">
                {props.children}
            </section>
        </main>
    )
}

export default Layout