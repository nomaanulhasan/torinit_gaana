import React from 'react'
import { handleSongPlay } from './helper';

import './styles.scss';

const SongBox = ({song, setIsPlayerReady, setCurrentSong}) => {
    return (
        <figure className="song-container">
            <div className="song-container-thumb">
                <button onClick={() => handleSongPlay(song, setIsPlayerReady, setCurrentSong)}>Play</button>
                <img src={song.artworkUrl100} alt="Thumbnail" />
            </div>
            <figcaption>{song.collectionName}</figcaption>
        </figure>
    )
}

export default SongBox
