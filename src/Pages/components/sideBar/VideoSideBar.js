import React, { useState } from 'react'
import "./videoSideBar.css"
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

function VideoSideBar({ likes, messages, shares}) {

    const [liked, setLiked] = useState(false)

    function handleLike() {
        setLiked(!liked)
    }


    return (
        <div className='video-sidebar'>
            <div 
                className="opt-btn"
                onClick={handleLike}

            >
                {liked ? <FavoriteRoundedIcon fontSize='large'/> : <FavoriteBorderRoundedIcon fontSize='large'/>}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="opt-btn">
                <ChatRoundedIcon fontSize='large'/>
                <p>{messages}</p>
            </div>            
            <div className="opt-btn">
                <SendRoundedIcon fontSize='large'/>
                <p>{shares}</p>
            </div>

        </div>
    )
}

export default VideoSideBar