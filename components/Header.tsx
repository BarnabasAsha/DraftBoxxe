import { useState, useEffect } from "react"
import Link from "next/link"
import useMenu from "../hooks/useMenu"
import supabase from "../utils/supaBaseClient"
import Menu from "./Menu"
import { useDialog } from "./Dialog"
import { logout } from "../services/authService"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/router"

const Header = () => {
    const [username, setUsername] = useState("")
    const { visibility, position, toggleVisibility, showMenu } = useMenu()
    const user = supabase.auth.user()
    const { showDialog } = useDialog()
    const router = useRouter()

    const handleLogout = async () => {
        const res = await showDialog('Are you sure? you could stay a little longer you know 🤷‍♂️')
        if(res) {
            const { error } = await logout()
            router.push('/login')
            if(error) {
                toast.error(error.message)
            }
            toast.success('Logged out sucessfully')
        }
    }

    const menuList = [
        {
            item: <span><i className="fas fa-sign-out-alt"></i><span className="ml-3">Logout</span></span>,
            'action': handleLogout
        }
    ]

    useEffect(() => {
        if(user) {
            setUsername(user.user_metadata.userName)
        }
    }, [user])
    
    return (
        <header className="_header w-100 flex justify-between items-center px-3 md:px-8 py-6">
            <Link href="/">
                <a><img className="w-40" src="/logo.png" alt="Draftboxe" /></a>
            </Link>
            <div className="flex items-center">
                <div className="relative flex justify-center items-center">
                    <span>Hello {username}</span>
                    <button onClick={showMenu} className="flex items-center cursor-pointer outline-none">
                        <div className="ml-4 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                            <img src="https://res.cloudinary.com/pishure/image/upload/v1632181329/rbvld6bzyzyy7vu2fats.jpg" alt="" />
                        </div>
                        <span className="ml-1 text-xs"><i className="fas fa-chevron-down"></i></span>
                    </button>
                </div>
            </div>
            { visibility ? <Menu small closeMenu={toggleVisibility} position={position} list={menuList} /> : null }
            <Toaster position="top-right" />
        </header>
    )
}

export default Header