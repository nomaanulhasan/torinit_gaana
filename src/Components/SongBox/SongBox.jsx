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
            <figcaption className="song-info">
                <div className="song-info-title">{song.trackCensoredName || song.artistName}</div>
                <div className="song-info-description">{song.collectionCensoredName}</div>
            </figcaption>
        </figure>
    )
}

export default SongBox
