import Image from "next/image";
import styles from "./SectionPartners.css";


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


export default function SectionPartners() {
    return (
        <div className="section-partners">
            <div className="partners-title">
                <h2 className={sectionTitle.className}>Partners</h2>
                <p className={MontserratFont.className} >With lots of unique blocks, you can easily build a page easily without any coding. </p>
            </div>
            <div className="cards">
                <div className="card">
                    <Image 
                        src="/images/partners-card-img.png"
                        width={200}
                        height={180}
                        alt="img"
                    />
                    <p className={NobileReg.className}>Agreement between xyz and ourwebsite</p>
                </div>
                <div className="card">
                    <Image 
                        src="/images/partners-card-img.png"
                        width={200}
                        height={180}
                        alt="img"
                    />
                    <p className={NobileReg.className}>Agreement between xyz and ourwebsite</p>
                </div>
                <div className="card">
                    <Image 
                        src="/images/partners-card-img.png"
                        width={200}
                        height={180}
                        alt="img"
                    />
                    <p className={NobileReg.className}>Agreement between xyz and ourwebsite</p>
                </div>
            </div>
        </div>
    )
}