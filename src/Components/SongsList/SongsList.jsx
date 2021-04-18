import React, { useState, useEffect } from 'react';
import { getSongsData } from './helper';
import SongBox from '../SongBox';
import Loader from '../Loader';

import './styles.scss';

const SongsList = () => {
    const [songList, setSongList] = useState();
	const [loader, setLoader] = useState(false);

    useEffect(async () => {
        try {
            const filterData = {
                searchTerm: 'quran',
                limit: 10
            };
			setLoader(true);
			(async () => {
				const res = await getSongsData(filterData);
				const songList = res?.data?.results;
                console.log(songList);
				setSongList(songList);
			})();
			setLoader(false);
		} catch (err) {
			return [];
		}
	}, []);

    return (<>
        {songList?.length > 0 ? 
            <div className="song-list--row">
                <h1 className="song-list-head">Trending Songs</h1>
                <div className="song-list--row-container">
                    {songList.map((song, i) => {
                        return <SongBox key={`song_${i}`} song={song} />
                    })}
                </div>
            </div>
			: loader ? <Loader /> : 'We are unable to find this song for you :('
		}
    </>);
};

export default SongsList;
