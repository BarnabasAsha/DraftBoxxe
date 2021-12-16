import Head from "next/head"
import AuthHeader from "../components/AuthWrapper"
import Seo from "../components/Seo"

const VerifyEmail = () => {
    return (
        <AuthHeader>
            <Seo />
            <main className="h-screen w-screen flex">
                <div className="h-full hidden md:block md:w-1/2 bg-primary"></div>
                <div className="h-full w-full md:w-1/2 bg-tertiary flex flex-col justify-center px-20">
                    <h1 className="font-bold text-2xl my-3">Verify your Email</h1>
                    <p className="mb-3">A Verification link has been sent to your email, Kindly use the link to signup</p>
                </div>
            </main>
        </AuthHeader>
    )
}

export default VerifyEmail