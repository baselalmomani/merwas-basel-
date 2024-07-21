import styles from "./Footer.css";
import Image from "next/image";

import { Lora } from "next/font/google";
const sectionTitle = Lora({ 
    subsets: ["latin"], 
    weight: ["700"]
});


import { Montserrat } from "next/font/google";
import Link from "next/link";
const MontserratFont = Montserrat({ 
    subsets: ["latin"], 
    weight: ["400"]
});

export default function Footer() {
    return (
        <div className="footer"> 
            <h2 className={sectionTitle.className}>Subscribe our newsletter</h2>
            <p className={MontserratFont.className}>Your download should start automatically, if not Click here. Should I give up, huh?.</p>
            <form>
            <div className="mail block">
                            <label htmlFor="frm-Email">Email</label>
                            <input
                                id="frm-Email"
                                type="mail"
                                name="Email"
                                autoComplete="Email"
                                required
                            />
                            <button type="submit">SEND</button>
                        </div>
                
            </form>
            <ul>
                <li>
                    <Link href="#">
                        <Image 
                        src="/images/icons/facebook-icon.svg"
                        width={8}
                        height={15.57}
                        className={styles.icon}
                        alt="img"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Image 
                        src="/images/icons/twitter-icon.svg"
                        width={14}
                        height={15.57}
                        className={styles.icon}
                        alt="img"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Image 
                        src="/images/icons/instagram-icon.svg"
                        width={13}
                        height={15.57}
                        className={styles.icon}
                        alt="img"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Image 
                        src="/images/icons/linkedin-icon.svg"
                        width={13}
                        height={16}
                        className={styles.icon}
                        alt="img"
                        />
                    </Link>
                </li>
            </ul>
            <div className="copy-right">
                <p>Copyright © 2024OurWebsite . All Right Reserved.</p>
            </div>
        </div>
    )
}




