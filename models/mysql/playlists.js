import mysql from "mysql2/promise";


const DEFAULT_CONFIG = {
    host: "localhost",
    user: "root",
    port: 3306,
    password: "",
    database: "musiconfit"
}

const connectionString = DEFAULT_CONFIG;

const connection = await mysql.createConnection(connectionString);

export class PlaylistsModel {
    
}