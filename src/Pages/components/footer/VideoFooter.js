import React from 'react'
import "./videoFooter.css"
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';


function VideoFooter() {
    return (
        <div className='video-footer'>
            <div className='video-footer-text'>
                <h3>@username</h3>
                <p>description</p>
                <div className='video-footer-music'>
                    <MusicNoteRoundedIcon />
                    <div className="video-footer-music-txt">
                        <p>Miniskirt - AOA</p>
                    </div>
                </div>
            </div>
            <img
                className='video-footer-record'
                alt='Disco vinil girando'
                src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'
            />
        </div>
    )
}

export default VideoFooter