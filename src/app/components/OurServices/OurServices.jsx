import Image from "next/image";
import styles from "./OurServices.css";

import { Nobile } from "next/font/google";
const sectionTitle = Nobile({ 
    subsets: ["latin"], 
    weight: ["500"]
});

import { DM_Sans } from "next/font/google";
import Link from "next/link";
const DM_SansFont = DM_Sans({ 
    subsets: ["latin"], 
    weight: ["700"]
});

export default function OurServices() {
    return (
        <div className="our-services">
            <h2 className={sectionTitle.className}>
                At The OurWebsite, we are dedicated to helping you excel in the world of technology. 
                Our services are specifically designed to meet your needs
            </h2>
            <div className="services">
                <ul>
                    <li>
                        <h4 className={sectionTitle.className}>Coworking Spaces</h4>
                        <p className={DM_SansFont.className}>Inspiring Work Environments Designed for Technological Innovation</p>
                        <Link href="/" className={DM_SansFont.className}>Learn more</Link>
                    </li>
                    <li>
                        <h4 className={sectionTitle.className}>Mentoring and Training</h4>
                        <p className={DM_SansFont.className}>Gain Insights from Industry Experts to Boost Your Success</p>
                        <Link href="/" className={DM_SansFont.className}>Learn more</Link>
                    </li>
                    <li>
                        <h4 className={sectionTitle.className}>Access to Funding and Markets</h4>
                        <p className={DM_SansFont.className}>Unlock Financing Opportunities and Expand Your Impact</p>
                        <Link href="/" className={DM_SansFont.className}>Learn more</Link>
                    </li>
                    <li>
                        <h4 className={sectionTitle.className}>Networking Opportunities</h4>
                        <p className={DM_SansFont.className}>Connect with like-minded technology enthusiasts and industry leaders</p>
                        <Link href="/" className={DM_SansFont.className}>Learn more</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}