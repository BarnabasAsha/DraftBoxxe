import Head from 'next/head'
import Link from 'next/link'
import HomeHeader from '../components/HomeHeader'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello Next</title>
      </Head>
      <main>
          <div className="w-full bg-secondary h-screen text-white">
          <HomeHeader />
          <div className="flex flex-row max-w-7xl w-full mx-auto md:pt-20 px-8">
            <div className="w-full md:w-1/2">
                <div className="my-4 text-5xl font-bold leading-tight">
                  <h1><span>All your notes.</span></h1>
                  <h1><span>Organized.</span></h1>
                  <h1><span>Effortless.</span></h1>
                </div>
                <p className="w-full md:w-80 text-lg text-gray-300 my-8">Inspiration strikes anywhere. Draftboxe lets you capture, organize and share your ideas across any device.</p>
                <Link href="/signup">
                  <a className="my-8 flex justify-center items-center w-40 h-12 border-2 rounded-lg border-white text-white"><span className="font-medium">Sign-up</span> - it's free</a>
                </Link>
            </div>
            <div className="hidden md:block md:w-1/2">

            </div>
          </div>
          <footer className="absolute bottom-3 left-0 w-full flex justify-center items-center">
            <div>
             Made with ❤ by <a className="underline" href="https://github.com/Barnabasasha" target="_blank">Barnabas Asha</a>
            </div>
          </footer>
          </div>
      </main>
    </>
  )
}
