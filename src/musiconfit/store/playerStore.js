import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  user: {
    isLogged: false,
    nickname: null,
    birthdate: null,
  },
  isPlaying: false,
  currentMusic: {
    playlist: null,
    song: null,
    songs: [],
  },
  volume: 1,
  pitch: 1.0,
  setPitch: (pitch) => set({ pitch }),
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  setUser: (user) => set({ user }),
}));
