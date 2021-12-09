import supabase from "../utils/supaBaseClient"
import { useRouter } from "next/router"

const AuthHeader = ({ children }) => {
    const router = useRouter()
    
    const session = supabase.auth.session()
        if (session) {
            router.push('/library')
        } 
        return children
}

export default AuthHeader