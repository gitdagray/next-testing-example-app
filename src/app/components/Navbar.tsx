import Header from "./Header/Header"

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="max-w-xl mx-auto sm:px-4 flex justify-between">
                <Header title="Next Todos" />
            </div>
        </nav>
    )
}