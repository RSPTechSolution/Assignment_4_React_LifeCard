import { Link } from "react-router-dom"
import User from "../pages/User"
const Header = () => {
    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
                <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
                    <Link className="flex items-center gap-2" to="/">
                        <svg
                            className="text-[var(--primary-color)]"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                            <rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
                        </svg>
                        <span className="text-xl font-bold tracking-tight">LifeCard</span>
                    </Link>
                    <nav className="hidden items-center gap-6 md:flex">
                        <Link className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors" to="/">
                            Home
                        </Link>
                        <Link className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors" to="/about">
                            About
                        </Link>
                        <Link className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors" to="/networks">
                            Networks
                        </Link>
                    </nav>
                    <button className="md:hidden">
                        <span className="material-icons">menu</span>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header