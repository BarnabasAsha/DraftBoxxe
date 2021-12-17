
const Offline = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center p-8">
            <div className="w-full md:w-2/5">
                <img className="w-full" src="/no-internet.png" alt="Sad face" />
            </div>
            <p className="text-gray-300 text-lg mb-4 font-medium">Please check your internet connection</p>
        </div>
    )
}

export default Offline