import React from 'react'
import "./videoFooter.css"
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';


function VideoFooter({name, desc, music}) {
    return (
        <div className='video-footer'>
            <div className='video-footer-text'>
                <h3>@{name}</h3>
                <p>{desc}</p>
                <div className='video-footer-music'>
                    <MusicNoteRoundedIcon />
                    <div className="video-footer-music-txt">
                        <p>{music}</p>
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