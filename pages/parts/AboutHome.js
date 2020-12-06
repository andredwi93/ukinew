import React from 'react'
import Link from 'next/link'

function AboutHome() {
    return (
        <section className="bg-white">
            <div className="container mx-auto py-16">
                <h3 className="text-2xl tracking-widest font-sans font-semibold text-gray-500 mb-4 uppercase">about us</h3>
                <h2 className="text-7xl text-indigo-800 font-sans font-semibold">COMPANY<br />DESCRIPTION</h2>
                <div className="flex justify-between items-center mt-10">
                    <div className="w-1/2">
                        <img src="/images/teamwork.png" alt="about" />
                    </div>
                    <article className="w-1/2 px-8 py-10 bg-blue-900 border-lightBlue-300 border-l-8 border-b-8">
                        <div className="flex justify-between items-center mb-3">
                            <span className="font-sans font-semibold tracking-wider text-xs text-gray-500 uppercase">about us</span>
                            <span className="font-sans text-xl text-white font-light">Our Background</span>
                        </div>
                        <h4 className="font-sans font-semibold text-3xl text-white">Usaha Kreatif Indonesia</h4>
                        <div className="font-sans text-xl text-white my-6">
                            <p>
                                We are an IT-based company providing one stop solutions from consultation to application development. Our team consists of passionate, creative, highly qualified young soul professionals who are ready to give you the best solution to achieve your goals through technology.
                            </p>
                        </div>
                        <Link href="/">
                            <a className="font-sans text-xl text-cyan-300 flex items-center">
                                <span>Learn More</span>
                                <img src="/images/icon-learn-more.png" alt="learn-more" className="w-1/12" />
                            </a>
                        </Link>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default AboutHome
