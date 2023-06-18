import React, { useRef, useState } from "react";

import "./Video.css";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSideBar from "./components/sideBar/VideoSideBar";

export default function Video({likes, messages, shares, name, desc, music, url}) {

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
                src={url}
                ref={videoRef}
                onClick={handleVideoPress}
                loop
            >
                {/* <source  type="video/mp4" /> */}
                {/* Your browser does not support the video tag. */}
            </video>
            <VideoSideBar
                likes={likes}
                messages={messages}
                shares={shares}
            />
            <VideoFooter
                name={name}
                desc={desc}
                music={music}
            />
        </div>

    )
}