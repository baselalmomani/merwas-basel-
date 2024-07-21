import Image from "next/image";
import styles from "./SectionAboutUs.css";

import { Nobile } from "next/font/google";
const sectionTitle = Nobile({ 
    subsets: ["latin"], 
    weight: ["700"]
});

import { Montserrat } from "next/font/google";
const sectionTitleBody = Montserrat({ 
    subsets: ["latin"], 
    weight: ["400"]
});


export default function SectionAboutUs() {
    return (
        <div className="section-about-us">
            <div className="section-title">
                <h2 className={sectionTitle.className}>About Us</h2>
                <p className={sectionTitleBody.className}>With lots of unique blocks, you can easily build a page easily without any coding.</p>
            </div>
            <div className="our-website">
                <div className="our-website-body">
                    <h3 className={sectionTitle.className}>OurWebsite</h3>
                    <p className={sectionTitle.className}>We offer more than just a workspace</p>
                    <ul>
                        <li>
                            <h4>Fostering Collaboration</h4>
                            <p>Encouraging synergy among different entities in the technology ecosystem, 
                                includingstartups,freelancers,compaes, academia, and government</p>
                        </li>
                        <li>
                            <h4>Promoting Innovation</h4>
                            <p>By providing support and guidance/training, 
                                the center aims to cultivate an environment where new ideas and innovative solutions can thrive</p>
                        </li>
                        <li>
                            <h4>Mission Statement</h4>
                            <p>A technological revolution in East amman through fostering innovation, 
                                collaboration, education, and community growth</p>
                        </li>
                        <li>
                            <h4>Vision Statement</h4>
                            <p>Establishing a leading technological hub as a catalyst for technological advancement
                                and social development in East amman</p>
                        </li>
                    </ul>
                </div>
                <div className="our-website-image">
                    <Image 
                        src="/images/about-us-image.png"
                        width={426}
                        height={587}
                        alt="img"
                    />
                </div>
            </div>
        </div>
    )
}