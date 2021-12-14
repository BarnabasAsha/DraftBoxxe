import Head from "next/head"
import { useState } from "react"
import FormInput from "../components/FormInput"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from 'next/router'
import { login } from "../services/authService"
import AuthWrapper from "../components/AuthWrapper"

const initials = {
    email: "",
    password: ""
}

export default function Login() {
    const router = useRouter()
    const [userDetails, setUserDetails] = useState(initials)

    const handleChange = (e) => {
        const { value, name } = e.target
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        if(userDetails.email === "" && userDetails.password === "" ) {
            return
        }
        const { error } = await login(userDetails)
        if(error) {
            toast.error(error.message)
        } else {
            toast.success('Successfully Logged In')
            router.push('/library')
        }
    }

    return (
        <AuthWrapper>
            <Head>
                <title>Draftboxe - Login</title>
            </Head>
            <main className="h-screen w-screen flex">
                <div className="h-full hidden md:block md:w-1/2 bg-primary"></div>
                <div className="h-full w-full md:w-1/2 bg-tertiary flex flex-col justify-center px-20">
                    <h1 className="font-bold">Log in.</h1>
                    <p className="font-bold text-2xl my-3">Welcome Back!</p>
                    <form onSubmit={handleLogin}>
                        <FormInput name="email" label="Email" type="email" placeholder="Email" handleChange={handleChange} required autoFocus value={userDetails.email} />
                        <FormInput name="password" label="Password" type="password" placeholder="Password" handleChange={handleChange} required value={userDetails.password} />
                        <button className="border-0 outline-none bg-primary text-white rounded-lg shadow my-3 py-3 px-4 w-full max-w-xs font-semibold">Login</button>
                    </form>
                </div>
                <Toaster position="top-right" />
            </main>
        </AuthWrapper>
    )
}
