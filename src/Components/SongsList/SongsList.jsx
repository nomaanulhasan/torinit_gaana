import React, { useState, useEffect } from 'react';
import history from '../../history';
import { getSongsData } from './helper';
import SongBox from '../SongBox';
import Loader from '../Loader';

import './styles.scss';

const SongsList = (props) => {
    const {setIsPlayerReady, setCurrentSong} = props;
    const [songList, setSongList] = useState(null);
	const [loader, setLoader] = useState(false);
    // const searchQuery = Cookies.get('searchQuery') || 'bollywoos songs';

    useEffect(() => {
        try {
            const searchQuery = new URLSearchParams(history.location.search).get('search') || 'bollywoos songs';
            console.log(searchQuery);
            const filterData = {
                searchTerm: searchQuery,
            };
			setLoader(true);
			(async () => {
				const res = await getSongsData(filterData);
				const songList = res?.data?.results;
                // console.log(songList);
				setSongList(songList);
                setLoader(false);
			})();
		} catch (err) {
			return [];
		}
	}, [history.location]);

    return (<>
        {songList?.length > 0 ? 
            <div className="song-list--row">
                {/* <h1 className="song-list-head">Trending Songs</h1> */}
                <div className="song-list--row-container">
                    {songList.map((song, i) => {
                        return <SongBox key={`song_${i}`}
                                    song={song} setCurrentSong={setCurrentSong}
                                    setIsPlayerReady={setIsPlayerReady} />
                    })}
                </div>
            </div>
			: loader ? <Loader /> : <div className="no-search-data">Oops, we didn't found anything :(</div>
		}
    </>);
};

export default SongsList;
