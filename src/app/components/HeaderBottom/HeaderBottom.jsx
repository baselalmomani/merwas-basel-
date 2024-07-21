import Link from "next/link"
import styles from "./HeaderBottom.css"
import Image from "next/image"

import { Montserrat } from "next/font/google";
const menuFont = Montserrat({ 
    subsets: ["latin"], 
    weight: ["500"]
});


import { Alef } from "next/font/google";
const loginFont  = Alef({ 
    subsets: ["latin"], 
    weight: ["700"]
});

export default function HeaderBottom() {
    return (
        <div className="container2 row">
            <div className="logo-col">
                <Link href="/">
                    <Image 
                        src="/images/main-logo.png"
                        width={260.29}
                        height={50}
                        className={styles.logo}
                        alt="logo image"
                    />
                </Link>
            </div>
            <div className="menu-col">
                <ul>
                    <li>
                        <Link href="/" className={menuFont.className}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/About-us" className={menuFont.className}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/Services" className={menuFont.className}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/Partners" className={menuFont.className}>
                            Partners
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact-us" className={menuFont.className}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="login-col">
                <ul>
                    <li>
                        <Link href="/" className={loginFont.className}>
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className={loginFont.className}>
                            Log In
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}