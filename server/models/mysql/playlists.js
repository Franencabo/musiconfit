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

  static async getPlaylistById({ id }) {
    const [rows] = await connection.execute(
      "SELECT * FROM tracks WHERE playlist_id = ?",
      [id]
    );
    return rows;
  }
}
