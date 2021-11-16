import { useState, useEffect } from "react"
import supabase from "../utils/supaBaseClient"

const Header = () => {
    const [username, setUsername] = useState("")
    const user = supabase.auth.user()

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
                    <div className="flex items-center cursor-pointer">
                        <div className="ml-4 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                            <img src="https://res.cloudinary.com/pishure/image/upload/v1632181329/rbvld6bzyzyy7vu2fats.jpg" alt="" />
                        </div>
                        <span className="ml-1 text-xs"><i className="fas fa-chevron-down"></i></span>
                    </div>
                    {/* <button className="bg-white absolute -bottom-9 -right-5 w-32 h-8 shadow p-3 flex justify-center items-center">Log Out</button> */}
                </div>
            </div>
        </header>
    )
}

export default Header