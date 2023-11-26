import { Router } from "express";
import { MusicController } from "../controllers/music.js";

export const musicRouter = Router();

musicRouter.get("/", MusicController.getAllPlaylists);

musicRouter.get("/playlist/:id", MusicController.getPlaylistWithTracks);
