import Head from "next/head"
import FormInput from "../components/FormInput"

export default function Signin() {
    return (
        <>
            <Head>
                <title>Hello Next</title>
            </Head>
            <main className="h-screen w-screen flex">
                <div className="h-full hidden md:block md:w-1/2 bg-primary"></div>
                <div className="h-full w-full md:w-1/2 bg-tertiary flex flex-col justify-center px-20">
                    <h1 className="font-bold">Sign in.</h1>
                    <p className="font-bold text-2xl my-3">Get Started!</p>
                    <form>
                        <FormInput name="Username" label="Username" type="text" placeholder="Username" handleChange={() => { }} required autoFocus />
                        <FormInput name="email" label="Email" type="email" placeholder="Email" handleChange={() => { }} required />
                        <FormInput name="password" label="Password" type="password" placeholder="Password" handleChange={() => { }} required />
                        <button className="border-0 outline-none bg-primary text-white rounded-lg shadow my-3 py-3 px-4 w-full max-w-xs font-semibold">Create Account</button>
                    </form>
                </div>
            </main>
        </>
    )
}
