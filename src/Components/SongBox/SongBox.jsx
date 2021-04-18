import React from 'react'
import { handleSongPlay } from './helper';

import './styles.scss';

const SongBox = ({song}) => {
    return (
        <figure className="song-container">
            <div className="song-container-thumb">
                <button onClick={() => handleSongPlay(song)}>Play</button>
                <img src={song.artworkUrl100} alt="Thumbnail" />
            </div>
            <figcaption>{song.collectionName}</figcaption>
        </figure>
    )
}

export default SongBox
