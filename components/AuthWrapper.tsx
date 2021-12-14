import supabase from "../utils/supaBaseClient"
import { useRouter } from "next/router"

const AuthWrapper = ({ children }) => {
    const router = useRouter()
    
    const session = supabase.auth.session()
        if (!session) {
            return children
        }
        router.push('/library')
        return <></>
}

export default AuthWrapper