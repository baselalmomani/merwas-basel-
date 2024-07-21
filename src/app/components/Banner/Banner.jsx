import Image from "next/image";
import styles from "./Banner.css";

import { Nobile } from "next/font/google";
const pageTitleFont = Nobile({ 
    subsets: ["latin"], 
    weight: ["700"]
});

export default function Banner() {
    return (
        <div className="banner">
            <h1 className={pageTitleFont.className}>Welcome to The <span>OurWebsite</span> Your Platform for Launching Towards Technological Success!</h1>
        </div>
    )
}