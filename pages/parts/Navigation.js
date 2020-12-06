import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Header.module.scss'

function Navigation() {
    return (
        <header className={`${styles.bgBlackTransparent} fixed top-0 left-0 w-full h-20`}>
            <nav className="container flex justify-between mx-auto h-full items-center">
                <div className="w-2/5">
                    <Link href="/">
                        <a>
                            <img src="/images/logo-uki-putih.png" alt="logo" className="w-8 inline-block mr-5" />
                            <span className="text-white font-sans text-2xl font-semibold">PT. Usaha Kreatif Indonesia</span>
                        </a>
                    </Link>
                </div>
                <div className="w-3/5 flex justify-end">
                    <Link href="/">
                        <a className="font-sans font-medium text-base text-white ml-5 hover:text-cyan-400">Home</a>
                    </Link>
                    <Link href="/">
                        <a className="font-sans font-medium text-base text-white ml-5 hover:text-cyan-400">About Us</a>
                    </Link>
                    <Link href="/">
                        <a className="font-sans font-medium text-base text-white ml-5 hover:text-cyan-400">Service</a>
                    </Link>
                    <Link href="/">
                        <a className="font-sans font-medium text-base text-white ml-5 hover:text-cyan-400">Product</a>
                    </Link>
                    <Link href="/">
                        <a className="font-sans font-medium text-base text-white ml-5 hover:text-cyan-400">Career</a>
                    </Link>
                    <Link href="/">
                        <a className="font-sans font-medium text-base text-white ml-5 hover:text-cyan-400">Contact Us</a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navigation
