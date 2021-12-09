import { useState, useEffect } from "react"
import useMenu from "../hooks/useMenu"
import supabase from "../utils/supaBaseClient"
import Menu from "./Menu"
import Link from "next/link"

const Header = () => {
    const [username, setUsername] = useState("")
    const { visibility, position, toggleVisibility, showMenu } = useMenu()
    const user = supabase.auth.user()

    const menuList = [
        {
            item: <Link href="/profile"><a href=""><i className="fas fa-user"></i><span className="ml-3">Profile</span></a></Link>,
            'action': () => {}
        },
        {
            item: <span><i className="fas fa-sign-out-alt"></i><span className="ml-3">Logout</span></span>,
            'action': () => {}
        }
    ]

    useEffect(() => {
        if(user) {
            setUsername(user.user_metadata.userName)
        }
    }, [user])
    
    return (
        <header className="_header w-100 bg-gray-200 flex justify-between items-center px-5 py-2">
            <div>Draftboxe</div>
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
            { visibility ? <Menu closeMenu={toggleVisibility} position={position} list={menuList} /> : null }
        </header>
    )
}

export default Header