import styles from "./Video.css";


import { Nobile } from "next/font/google";
const sectionBody = Nobile({ 
    subsets: ["latin"], 
    weight: ["400"]
});

export default function Video() {
    return (
        <div className="video-section">
            <div className="video">
            <video width="320" height="240" controls preload="none">
                <source src="/path/to/video.mp4" type="video/mp4" />
                <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                />
                Your browser does not support the video tag.
            </video>
            </div>
            <div className="video-body">
                <p className={sectionBody.className}>
                <span>OurWebsite</span> Your Gateway to Technological Excellence
                Get a quick glimpse into thedynamic environment at The OurWebsite and the benefits that await you
                </p>
            </div>
        </div>
    )
}