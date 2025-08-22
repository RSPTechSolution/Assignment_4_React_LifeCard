import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-100 py-12">
                <div className="container mx-auto px-4 text-center">
                    <div className="mb-6 flex flex-wrap items-center justify-center gap-6">
                    <Link className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors" to="/">Home</Link>
                    <span className="text-gray-400">|</span>
                    <Link className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors" to="/about">About</Link>
                    <span className="text-gray-400">|</span>
                    <Link className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors" to="/users">Users</Link>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">© 2025 LifeCard. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
