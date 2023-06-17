import React, { useRef, useState } from "react";

import "./Video.css";
import VideoFooter from "./components/footer/VideoFooter";

export default function Video() {

    const videoRef = useRef(null)

    const [playing, setPlaying] = useState(false)

    function handleVideoPress() {

        if(playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className="video">
            <video 
                className="video-player" 
                src="./video.mp4"
                ref={videoRef}
                onClick={handleVideoPress}
                loop
            >
                {/* <source  type="video/mp4" /> */}
                {/* Your browser does not support the video tag. */}
            </video>
            <VideoFooter/>
        </div>

    )
}