
const EmptySearch = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center p-4">
            <div className="w-full md:w-2/5">
                <img className="w-full" src="/empty-search.png" alt="No Search Result" />
            </div>
            <p className="text-gray-300 text-lg mb-4 font-medium">Sorry, couldn't find any items related to your search, try again</p>
        </section>
    )
}

export default EmptySearch