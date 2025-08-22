import CreditCardIcon from '@mui/icons-material/CreditCard';
import NavigationIcon from '@mui/icons-material/Navigation';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

const Home = () => {
    return (
        <>
            <main className="flex-grow">
                {/* Hero Section */}
                <section
                    className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center py-20 text-white"
                    style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCd2xmivsOh_8hetT3dZY98YjMcB_oy36wtnP8eD6qKQDzR0iYtX1fGKxTlWpd2bl5GlT9VmeOwD-H1cLa7vnpjJXLP1cWEHNplC6MpRC1Nn-PxuLbU4b4hjDvhkxwthR1QiUR2D8jrnl6JAZPfljyroAoVmHm_klfoXFe9ZRlfbdexhquyJBCox7I80dgD5fytvpiJELsyQRTsBFPtfSjiwalv7-YtCuohfXJrFKoAd8IiMdc16MKE0q1IyXVFDgX-1Q3aK4sTf0Xw")`,
                    }}
                >
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                            Welcome to LifeCard
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
                            A simple way to showcase personal profiles with style and clarity.
                        </p>
                        <button
                            className="mt-8 inline-flex items-center justify-center rounded-md bg-[var(--primary-color)] px-8 py-3 text-base font-bold text-white shadow-lg transition-colors hover:bg-[var(--primary-color-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                            View Profile
                        </button>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-12 md:grid-cols-3">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-color)]/10 text-[var(--primary-color)]">
                                    <CreditCardIcon fontSize='large'/>
                                </div>
                                <h3 className="text-xl font-bold">Digital Profiles</h3>
                                <p className="mt-2 text-[var(--text-secondary)]">
                                    Display clean and modern profile cards.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-color)]/10 text-[var(--primary-color)]">
                                    <NavigationIcon fontSize='large'/>
                                </div>
                                <h3 className="text-xl font-bold">Easy Navigation</h3>
                                <p className="mt-2 text-[var(--text-secondary)]">
                                    Explore Home, About, and User Info smoothly.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-color)]/10 text-[var(--primary-color)]">
                                    <ViewQuiltIcon fontSize='large'/>
                                </div>
                                <h3 className="text-xl font-bold">Simple UI</h3>
                                <p className="mt-2 text-[var(--text-secondary)]">
                                    Designed to be attractive yet minimal.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why LifeCard Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                                Why LifeCard?
                            </h2>
                            <p className="mt-4 text-lg text-[var(--text-secondary)]">
                                LifeCard is built to highlight personal details in a neat and organized way. Whether it’s a portfolio,
                                personal branding, or just for fun, LifeCard keeps it stylish and professional.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home