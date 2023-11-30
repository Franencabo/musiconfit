import { PlaylistsModel, UsersModel } from "../models/mysql/playlists.js";

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

export class UsersController {
  static async getAllUsers(req, res) {
    const users = await UsersModel.getAllUsers();
    res.json(users);
  }

  static async getUserByEmail(req, res) {
    const { email } = req.params;
    const user = await UsersModel.getUserByEmail({ email });
    if (user) res.json(user);
  }

  static async createUser(req, res) {
    const { email, password, nickname, birthdate } = req.body;
    const newUser = await UsersModel.createUser({
      email,
      password,
      nickname,
      birthdate,
    });
    if (newUser) res.json(newUser);
  }
}
