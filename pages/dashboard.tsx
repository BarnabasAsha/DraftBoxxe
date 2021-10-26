import Link from "next/link"
import Box from "../components/Box"
import Layout from "../components/Layout"

const Dashboard = () => {
    return (
        <Layout>
            <div className="w-100 p-10">
                <h2 className="font-bold text-xl">My Box</h2>

                <ul className="mt-10 w-full grid grid-cols-layout items-center gap-3">
                    <li className="w-40 h-36 bg-white shadow-sm p-5">
                        <Link href="">
                            <a className="block w-full h-full">
                                <span className="font-medium">
                                    New Draft
                                </span>
                                <span className="block text-2xl text-center m-4">
                                    <i className="fas fa-plus"></i>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <Box />
                    <Box />
                    <Box />
                    <Box /> <Box />
                    <Box /> <Box />
                    <Box /> <Box />
                    <Box />

                </ul>

            </div>
        </Layout>
    )
}

export default Dashboard