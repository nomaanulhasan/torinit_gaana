import React, { useState } from 'react';
import { Layout, SongsList, FooterAudioPlayer } from '../../Components';

const HomePage = () => {
	const [isPlayerReady, setIsPlayerReady] = useState(false);
	const [currentSong, setCurrentSong] = useState(null);

	return  <Layout>
				<SongsList setIsPlayerReady={setIsPlayerReady} setCurrentSong={setCurrentSong} />
				<FooterAudioPlayer isPlayerReady={isPlayerReady} currentSong={currentSong} />
			</Layout>;
};

export default HomePage;
