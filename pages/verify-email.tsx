import Head from "next/head"
import FormInput from "../components/FormInput"

const VerifyEmail = () => {
    return (
        <>
            <Head>
                <title>Draftboxe</title>
            </Head>
            <main className="h-screen w-screen flex">
                <div className="h-full hidden md:block md:w-1/2 bg-primary"></div>
                <div className="h-full w-full md:w-1/2 bg-tertiary flex flex-col justify-center px-20">
                    <h1 className="font-bold text-2xl my-3">Verify your Email</h1>
                    <p className="mb-3">Kindly input the verification code sent to your mail.</p>
                    <form>
                        <FormInput name="VerifyCode" label="Verification code" type="text" placeholder="Verification code" handleChange={() => { }} required autoFocus />
                        <button className="border-0 outline-none bg-primary text-white rounded-lg shadow my-3 py-3 px-4 w-full max-w-xs font-semibold">Continue</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default VerifyEmail