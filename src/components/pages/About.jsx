import { useEffect, useRef, useState } from "react"

const About = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState();
      const didFetch = useRef(false);


    useEffect(() => {
        if (didFetch.current) return;
        didFetch.current = true;
            fetch("/data/users.json")
            .then((response) => {
                    if(!response.ok){
                        throw new Error("Failed to fetch products");
                    }
                    return response.json();
                }).then((data) => {
                    setUsers(data);
                }).catch((err) => {
                    setError(err.message);
                })
    },[]);
    return (
        <>
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-black/50"></div>
                        <img
                            alt="Abstract background"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcdCC4OMvFESA1GOhKnUQqwA1pQBuUnsO-q8fZfP7EF_0gVCWCRqRamZQ4hjTkuf2QWFaaupvyKZIbO_bMgn0wxiTfrXqfFc0siM_Cz2yNZj-s-yQqq8z408PbVzQGwqYPFQQ-j5YQ3bJFolaBjZZ2BN3XdJpVDiRlTZSIHc_c4jPypt0v4EnefpvxDM68-WuJ7T_BErxP-OPqXFRYGhQ8bYCueJy0ZnyLbLHbm4PJS421z-m0dEm_MoMTy9v1RIgyRdR5Wx_UCQis"
                        />
                    </div>
                    <div className="container mx-auto px-6 py-24 sm:py-32 lg:py-48 relative z-10">
                        <div className="max-w-2xl mx-auto text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                                About LifeCard
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-200">
                                LifeCard is a simple web project designed to display user details
                                in a beautiful card format. It’s built with the idea of combining
                                clean design and functional simplicity.
                            </p>
                            <div className="mt-10">
                                <a
                                    className="rounded-md bg-[var(--primary-color)] px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-[var(--primary-hover-color)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)] transition-all duration-300 transform hover:scale-105"
                                    href="#"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Who We Are */}
                <section className="py-20 sm:py-28 bg-section-background-color">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-bold tracking-tight text-text-color sm:text-4xl">
                                    Our Mission
                                </h2>
                                <p className="mt-4 text-lg text-text-secondary-color">
                                    We aim to make digital profiles look modern and accessible.
                                    LifeCard is for learners, creators, and professionals who want
                                    to present information in style.
                                </p>
                            </div>
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-bold tracking-tight text-text-color sm:text-4xl">
                                    Who We Are
                                </h2>
                                <p className="mt-4 text-lg text-text-secondary-color">
                                    LifeCard was created as a passion project by a web developer who
                                    loves clean design and functionality.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 sm:py-28 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-text-color sm:text-4xl">
                                Meet Our Team
                            </h2>
                            <p className="mt-4 text-lg text-text-secondary-color">
                                The passionate individuals behind LifeCard.
                            </p>
                        </div>
                        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                            { 
                                users.slice(0, 3).map((member) => (
                                    <div key={member.uid} className="text-center group">
                                        {console.log('member',member)}
                                        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                                            <div
                                                className="w-full h-full bg-center bg-no-repeat bg-cover"
                                                style={{ backgroundImage: `url(${member.image})` }}
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <h3 className="text-xl font-bold text-text-color">{member.full_name}</h3>
                                            <p className="text-base font-medium text-[var(--primary-color)]">{member.role}</p>
                                            <p className="text-base font-medium text-text-color">{member.bio}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About