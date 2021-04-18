
export const handleSongPlay = (song, setIsPlayerReady, setCurrentSong) => {
	setCurrentSong(song);
	setIsPlayerReady(true);
};
