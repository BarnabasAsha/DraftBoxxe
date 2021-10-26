
const Header = () => {
    return (
        <header className="w-100 bg-gray-200 h-16 flex justify-between items-center px-5 py-2">
            <div>Draftboxe</div>
            <div className="flex items-center">
                <input className="mr-10 border border-secondary bg-transparent p-3 w-64 h-10 outline-none" type="search" placeholder="Search here..." />

                <div className="flex justify-center items-center">
                    <span>Hello Barnabas</span>
                    <div className="ml-4 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                        <img src="https://res.cloudinary.com/pishure/image/upload/v1632181329/rbvld6bzyzyy7vu2fats.jpg" alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header