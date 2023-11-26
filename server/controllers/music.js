import { PlaylistsModel } from "../models/mysql/playlists.js";

export class MusicController {
  static async getAllPlaylists(req, res) {
    const playlists = await PlaylistsModel.getAllPlaylists();
    res.json(playlists);
  }

  static async getPlaylistWithTracks(req, res) {
    const { id } = req.params;
    const playlist = await PlaylistsModel.getPlaylistWithTracks({ id });
    if (playlist) res.json(playlist);
  }
}
