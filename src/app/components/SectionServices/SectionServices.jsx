import styles from "./SectionServices.css";

import { Nobile } from "next/font/google";
const sectionTitle = Nobile({ 
    subsets: ["latin"], 
    weight: ["500"]
});

const sectionTitleBold = Nobile({ 
    subsets: ["latin"], 
    weight: ["700"]
});

import { Montserrat } from "next/font/google";
import Image from "next/image";
const sectionTitleBody = Montserrat({ 
    subsets: ["latin"], 
    weight: ["400"]
});


export default function SectionServices() {
    return (
        <div className="section-services">
            <div className="services-title">
                    <h2 className={sectionTitleBold.className}>services</h2>
                    <p>With lots of unique blocks, you can easily build a page easily without any coding. </p>
                </div>
            <div className="block">
                <div className="services-body">
                    <div className="body-block">
                        <div className="image">
                            <Image 
                                src="/images/services-images.png"
                                width={519}
                                height={483}
                                className={styles.icon}
                                alt="img"
                            />
                        </div>
                        <div className="text">
                            <h4 className={sectionTitle.className}>Coworking Spaces</h4>
                            <p className={sectionTitleBody.className}>Increase Your Productivity in Inspirational Workspaces. 
                                Our coworking spaces are more than just workplaces - they are hubs for innovation 
                                and collaboration. Choose from diverse options, including open workspaces, 
                                private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic 
                                environment designed to stimulate creativity and enhance productivity</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block-reverse">
                <div className="services-body">
                    <div className="body-block">
                        <div className="image">
                            <Image 
                                src="/images/services-images.png"
                                width={519}
                                height={483}
                                className={styles.icon}
                                alt="img"
                            />
                        </div>
                        <div className="text">
                            <h4 className={sectionTitle.className}>Mentoring and Training</h4>
                            <p className={sectionTitleBody.className}>Grow with Expert Guidance. 
                                Our mentoring and training programs are your gateway to professional development. 
                                Gain insights and guidance from industry experts. Learn how to effectively apply your knowledge, 
                                navigate challenges, and expand your technological project</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block second">
                <div className="services-body">
                    <div className="body-block">
                        <div className="image">
                            <Image 
                                src="/images/services-images.png"
                                width={519}
                                height={483}
                                className={styles.icon}
                                alt="img"
                            />
                        </div>
                        <div className="text">
                            <h4 className={sectionTitle.className}>Coworking Spaces</h4>
                            <p className={sectionTitleBody.className}>Increase Your Productivity in Inspirational Workspaces. 
                                Our coworking spaces are more than just workplaces - they are hubs for innovation 
                                and collaboration. Choose from diverse options, including open workspaces, 
                                private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic 
                                environment designed to stimulate creativity and enhance productivity</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block-reverse second">
                <div className="services-body">
                    <div className="body-block">
                        <div className="image">
                            <Image 
                                src="/images/services-images.png"
                                width={519}
                                height={483}
                                className={styles.icon}
                                alt="img"
                            />
                        </div>
                        <div className="text">
                            <h4 className={sectionTitle.className}>Mentoring and Training</h4>
                            <p className={sectionTitleBody.className}>Grow with Expert Guidance. 
                                Our mentoring and training programs are your gateway to professional development. 
                                Gain insights and guidance from industry experts. Learn how to effectively apply your knowledge, 
                                navigate challenges, and expand your technological project</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}