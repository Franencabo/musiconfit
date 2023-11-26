import mysql from "mysql2/promise";

const DEFAULT_CONFIG = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "musiconfitdb",
};

const connectionString = DEFAULT_CONFIG;

const connection = await mysql.createConnection(connectionString);

export class PlaylistsModel {
  static async getAllPlaylists() {
    const [rows] = await connection.execute("SELECT * FROM playlists");
    return rows;
  }

  static async getAllTracksFromPlaylistId({ id }) {
    const [rows] = await connection.execute(
      "SELECT * FROM tracks WHERE playlist_id = ?",
      [id]
    );
    return rows;
  }

  static async getPlaylistWithTracks({ id }) {
    const [playlistResult] = await connection.execute(
      "SELECT * FROM playlists WHERE id = ?",
      [id]
    );

    if (playlistResult.length === 0) {
      return null;
    }

    const playlistData = {
      id: playlistResult[0].id,
      title: playlistResult[0].title,
      color: playlistResult[0].color,
      cover: playlistResult[0].cover,
      duration: playlistResult[0].duration,
      banner: playlistResult[0].banner,
      src: playlistResult[0].src,
      tracks: [],
    };

    const [tracksResult] = await connection.execute(
      "SELECT * FROM tracks WHERE playlist_id = ?",
      [id]
    );

    playlistData.tracks = tracksResult.map((track) => ({
      id: track.id,
      title: track.title,
      artist: track.artist,
      timeToStart: track.timeToStart,
    }));

    return playlistData;
  }
}
