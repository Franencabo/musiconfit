export const useTimeConverter = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = String(Math.floor(duration % 60)).padStart(2, "0");

  return {
    minutes,
    seconds,
  };
};
