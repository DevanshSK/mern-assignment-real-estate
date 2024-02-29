

const Navbar = () => {
    return (
        <header className="flex p-3 items-center bg-white border-b justify-between sticky top-0">
            <div className="left flex items-center text-4xl">
                <span className="font-bold">XYZ</span>
                <span className="font-extralight ml-2 italic">Industries</span>
            </div>
            <nav className="nav flex items-center justify-self-center bg-[#071A45] justify-center gap-x-4 py-2 px-4 rounded-full">
                <a className="text-[#C9C6C2] p-2 hover:text-white transition" href="#">Home</a>
                <a className="text-[#C9C6C2] p-2 hover:text-white transition" href="#">About Us</a>
                <a className="text-[#C9C6C2] p-2 hover:text-white transition" href="#">Property</a>
                <a className="text-[#C9C6C2] p-2 hover:text-white transition" href="#">Services</a>
                <a className="text-[#C9C6C2] p-2 hover:text-white transition" href="#">Contact</a>
            </nav>
            <div className="right justify-self-end flex items-center gap-x-6">
                <button className="border-[#071A45] border-[1px] py-4 px-6 text-md rounded-full">Sign Up</button>
                <button className="border-[#3A7DFF] border-[1px] bg-[#3A7DFF] text-white py-4 px-6 text-md rounded-full">Sign In</button>
            </div>
        </header>
    )
}

export default Navbar