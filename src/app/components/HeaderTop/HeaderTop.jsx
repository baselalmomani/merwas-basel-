import Image from "next/image"
import Link from "next/link"
import styles from "./HeaderTop.css"


export default function HeaderTop() {
    return (
        <div className="container1">
            <nav>
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
            </nav>
        </div>
    )
}