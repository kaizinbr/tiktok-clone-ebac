import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './Pages/Video';
import db from './config/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

    const [video, setVideos] = useState([]);

    async function getVideos() {
        const videosCol = collection(db, 'videos')
        const videosSnapshot = await getDocs(videosCol)
        const videosList = videosSnapshot.docs.map(doc => doc.data())
        setVideos(videosList)
    }

    useEffect(() => {
        getVideos();
        // db.collection('videos').onSnapshot(snapshot => {
        //     snapshot.docs.map(doc => {
        //         console.log(doc.data())
        //     })
        // })
    }, [])



    return (
        <div className="App">
            <div className="video-container">
                
                { video.map((item) => {
                    return (
                        <Video 
                            likes={item.likes}
                            messages={item.messages}
                            shares={item.shares}
                            name={item.name}
                            desc={item.desc}
                            music={item.music}
                            url={item.url}
                        />
                    )
                })}
                
            </div>
        </div>
    );
}

export default App;
