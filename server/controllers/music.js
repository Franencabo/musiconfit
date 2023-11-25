import { PlaylistsModel } from "../models/mysql/playlists.js";

export class MusicController {
  static async getAllPlaylists(req, res) {
    const playlists = await PlaylistsModel.getAllPlaylists();
    res.json(playlists);
  }

  static async getPlaylistById(req, res) {
    const playlistId = req.params.id;
    console.log("Playlist ID:", playlistId);
    const { id } = req.params;
    const playlist = await PlaylistsModel.getPlaylistById({ id });
    if (playlist) res.json(playlist);
  }
}
