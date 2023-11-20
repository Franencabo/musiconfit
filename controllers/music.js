export class MusicController {
  constructor({ musicModel }) {
    this.musicModel = musicModel;
  }

  getAll = async (req, res) => {
    const playlists = await this.musicModel.getAll();
    if (playlists) res.json(playlists);
    res.status(404).json({ message: "Playlists not found" });
  };

  getById = async (req, res) => {
    const { id } = req.params;
    const playlist = await this.musicModel.getById({ id });
    if (playlist) res.json(playlist);
    res.status(404).json({ message: "Playlist not found" });
  };
}
