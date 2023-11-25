import { PlaylistsModel } from "../models/mysql/playlists.js";

export class MusicController {
  static async getAllPlaylists(req, res) {
    const playlists = await PlaylistsModel.getAllPlaylists();
    res.json(playlists);
  }

  static async getPlaylistById(req, res) {
    const { id } = req.params;
    const playlist = await PlaylistsModel.getPlaylistById({ id });
    if (playlist) res.json(playlist);
  }

  // getById = async (req, res) => {
  //   const { id } = req.params;
  //   const playlist = await this.musicModel.getById({ id });
  //   if (playlist) res.json(playlist);
  //   res.status(404).json({ message: "Playlist not found" });
  // };
}
