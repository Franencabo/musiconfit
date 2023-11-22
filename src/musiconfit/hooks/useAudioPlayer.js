import { useEffect, useRef } from "react";
import { usePlayerStore } from "../store/playerStore";

export const useAudioPlayer = () => {
  const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore();
  const audioRef = useRef();

  useEffect(() => {
    const { song, playlist } = currentMusic;

    if (song && isPlaying) {
      const src = playlist;
      audioRef.current.src = src;
      audioRef.current.currentTime = song.timeToStart;

      if (isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  }, [currentMusic.song, isPlaying]);

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
