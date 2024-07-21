import styles from "./SectionContactUs.css";
import Image from "next/image";

import { Nobile } from "next/font/google";
const sectionTitle = Nobile({ 
    subsets: ["latin"], 
    weight: ["700"]
});

const NobileReg = Nobile({ 
    subsets: ["latin"], 
    weight: ["400"]
});

import { Montserrat } from "next/font/google";
import Link from "next/link";
const MontserratFont = Montserrat({ 
    subsets: ["latin"], 
    weight: ["400"]
});

import { Jost } from "next/font/google";
const josFont = Jost({ 
    subsets: ["latin"], 
    weight: ["600"]
});

const josFontMed = Jost({ 
    subsets: ["latin"], 
    weight: ["500"]
});

const josFontReg = Jost({ 
    subsets: ["latin"], 
    weight: ["400"]
});


export default function SectionContactUs() {
    return (
        <div className="contact-us">
            <div className="contact-title">
                <h2 className={sectionTitle.className}>Contact Us</h2>
                <p className={MontserratFont.className}>With lots of unique blocks, you can easily build a page easily without any coding. </p>
                <h3 className={josFont.className}>Get in touch today!</h3>
            </div>
            <div className="web-form">
                <div className="form-contact">
                    <h3 className={josFontMed.className}>Contact details</h3>
                    <ul>
                        <li>
                            <h5 className={josFontMed.className}>Find Us</h5>
                            <p className={josFontReg.className}>2301 AMMAN . JORDAN</p>
                        </li>
                        <li>
                            <h5 className={josFontMed.className}>Phone</h5>
                            <p className={josFontReg.className}>
                                <span>+ (06) 111-1111</span>
                                <span>+ (06) 111-1111</span>
                            </p>
                        </li>
                        <li>
                            <h5 className={josFontMed.className}>Working Hours</h5>
                            <p className={josFontReg.className}>
                                <span>Mon-Fri: 8 AM - 5 PM</span>
                                <span>Sat-Sun: 8 AM - 2 PM</span>
                            </p>
                        </li>
                        <li>
                            <h5 className={josFontMed.className}>Write to Us</h5>
                            <p className={josFontReg.className}>
                                <span>info@ourwebsite.com</span>
                                <span>courses@ourwebsite.com</span>
                            </p>
                        </li>
                        <li>
                            <h5 className={josFontMed.className}>Follow Us</h5>
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
                                    <li>
                                        <Link href="#">
                                            <Image 
                                            src="/images/icons/skybe-icon.svg"
                                            width={13}
                                            height={15.57}
                                            className={styles.icon}
                                            alt="img"
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                </div>
                <div className="form-send">
                    <h3 className={josFontMed.className}>Have a question?</h3>

                    <form>
                        <div className="types block">
                            <label htmlFor="frm-email"> types</label>
                            <input
                            id="frm-types"
                            type="text"
                            name="types"
                            />
                        </div>
                        <div className="block name">
                            <label htmlFor="frm-phone">Name</label>
                            <input
                            id="frm-name"
                            type="text"
                            name="Name"
                            />
                        </div>
                        <div className="mail block">
                            <label htmlFor="frm-Email">Email</label>
                            <input
                                id="frm-Email"
                                type="mail"
                                name="Email"
                                autoComplete="Email"
                                required
                            />
                        </div>
                        <div className="message block">
                            <label htmlFor="frm-message">Message</label>
                            <textarea id="frm-message" rows="15" name="message"></textarea>
                        </div>
                        <div className="button block">
                            <button type="submit">SEND</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}