import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { handleAutoPlay } from './helper';
import Cookies from 'js-cookie';

import './styles.scss';

const FooterAudioPlayer = ({isPlayerReady, currentSong}) => {
    const [isAutoplayOn, setIsAutoplayOn] = useState(Cookies.get('autoplayState') === 'true' ? true : false);
    
    return <>
        {isPlayerReady ? 
            <div className="footer-audio-player">
                <div className="song-data">
                    <div className="song-data-thumb"><img src={currentSong.artworkUrl60} alt="thumb" /></div>
                    <div className="song-info">
                        <div className="song-info-title">{currentSong.trackCensoredName}</div>
                        <div className="song-info-description">{currentSong.collectionName}</div>
                    </div>
                </div>
                
                <ReactAudioPlayer src={currentSong.previewUrl} autoPlay={isAutoplayOn} controls />

                <div className="autoplay">
                    <label htmlFor="chkAutoplay">
                        <input type="checkbox" id="chkAutoplay" name="chkAutoplay" onChange={(e) => handleAutoPlay(e, setIsAutoplayOn)} />
                        Autoplay
                        <span className="status">{isAutoplayOn ? 'ON' : 'OFF'}</span>
                    </label>
                </div>
            </div>
        : ''}
    </>
}

export default FooterAudioPlayer
