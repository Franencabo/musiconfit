import * as playlists from "../lib/data.json";

const playlistInfo = playlists.default;

export async function GET({ request }) {
  // get the id from the url search params

  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get("id");

  const playlistSelected = playlistInfo.find((playlist) => playlist.id === id);

  return new Response(JSON.stringify({ playlistSelected }), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
