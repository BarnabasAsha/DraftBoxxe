import supabase from "../utils/supaBaseClient"

interface UserDetails {
    email: string
    password: string
    userName: string
}

export const signup = async (userDetails:UserDetails) => {
    const response = supabase.auth.signUp(
        {
            email: userDetails.email,
            password: userDetails.password
        },
        {
            data: {
                userName: userDetails.userName
            }
        }
    )
    return response
}

export const login = async (userDetails:Omit<UserDetails, 'userName'>) => {
    const response = await supabase.auth.signIn(
        {
            email: userDetails.email,
            password: userDetails.password
        }
    )
    return response
}

export const logout = async () => {
    const response = await supabase.auth.signOut()
    return response
}