import { useRouter } from "next/router"
import React, { useEffect } from "react"
import Header from "../components/Header"
import supabase from "../utils/supaBaseClient"
import Dialog from "./Dialog"

const Layout = (props: { children: any }) => {
    const router = useRouter()
    let session = null
    
    const getSession = () => {
        session = supabase.auth.session()
    }

    useEffect(() => {
        getSession()
        if (!session) {
            router.push('/login')
        } 
    }, [session])
    
    return (
        <main className="w-full h-screen bg-white">
            <Dialog>
              <Header />
            </Dialog>
            <section className="_main">
                {props.children}
            </section>
        </main>
    )
}

export default Layout