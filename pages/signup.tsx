import Head from "next/head"
import { useState } from "react"
import FormInput from "../components/FormInput"
import { signup } from '../services/authService'
import { useRouter } from 'next/router'
import toast, { Toaster } from "react-hot-toast"
import AuthWrapper from "../components/AuthWrapper"

const initials = {
    userName: "",
    email: "",
    password: ""
}

export default function Signup() {
    const router = useRouter()
    const [userDetails, setUserDetails] = useState(initials)

    const handleChange = (e) => {
        const { value, name } = e.target
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        if(userDetails.email === "" && userDetails.password === "" && userDetails.userName === "") {
            return
        }
        const { error } = await signup(userDetails)
        if(error) {
            toast.error(error.message)
        } else {
            toast.success('Account Created')
            router.push('/verify-email')
        }
    }
    return (
        <AuthWrapper>
            <Head>
                <title>Hello Next</title>
            </Head>
            <main className="h-screen w-screen flex">
                <div className="h-full hidden md:block md:w-1/2 bg-primary"></div>
                <div className="h-full w-full md:w-1/2 bg-tertiary flex flex-col justify-center px-20">
                    <h1 className="font-bold">Sign in.</h1>
                    <p className="font-bold text-2xl my-3">Get Started!</p>
                    <form onSubmit={handleSignUp}>
                        <FormInput name="userName" label="Username" type="text" placeholder="Username" handleChange={handleChange} required autoFocus value={userDetails.userName} />
                        <FormInput name="email" label="Email" type="email" placeholder="Email" handleChange={handleChange} required value={userDetails.email} />
                        <FormInput name="password" label="Password" type="password" placeholder="Password" handleChange={handleChange} required value={userDetails.password} />
                        <button className="border-0 outline-none bg-primary text-white rounded-lg shadow my-3 py-3 px-4 w-full max-w-xs font-semibold">Create Account</button>
                    </form>
                </div>
                <Toaster position="top-right" />
            </main>
        </AuthWrapper>
    )
}
