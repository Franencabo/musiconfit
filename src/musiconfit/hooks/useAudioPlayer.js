import { useEffect, useRef } from "react";
import { userPlayerStore } from "../store/playerStore";

export const useAudioPlayer = () => {
  const { currentMusic, isPlaying, setIsPlaying } = userPlayerStore();
  const audioRef = useRef();

  useEffect(() => {
    const { song, playlist } = currentMusic;

    if (song) {
      const src = playlist;
      audioRef.current.src = src;
      audioRef.current.currentTime = song.timeToStart;

      if (isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  }, [currentMusic, isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return {
    audioRef,
    togglePlay,
    isPlaying,
  };
};
