import { usePlayerStore } from '../store/playerStore.js'

export const CurrentSong = () => {

    const { currentMusic } = usePlayerStore();
    const playlist = currentMusic.playlist;
    const song = currentMusic.song;
   
    return (
        <div>
            {song && (
                <div className="current-song">
                    <picture className="current-song-picture">
                        <img className="current-song-img" src={playlist.cover} alt="" />
                    </picture>
                    <div className='current-song-info'>
                        <h3 className='current-song-title'>{song.title}</h3>
                        <p className="current-song-artist">{song.artist}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
