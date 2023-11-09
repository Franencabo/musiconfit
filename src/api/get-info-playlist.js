import * as playlist from "../../lib/data.json";

const { allPlaylists, songs } = playlist.default;

export async function GET({ params, request }) {
  // get the id from the url search params

  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get("id");

  const playlist = allPlaylists.find((playlist) => playlist.id === id);
  const songs = songs.filter((song) => song.albumId === playlist?.albumId);

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
