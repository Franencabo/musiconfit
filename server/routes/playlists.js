import { Router } from "express";
import { MusicController, UsersController } from "../controllers/music.js";

export const musicRouter = Router();

musicRouter.get("/", MusicController.getAllPlaylists);

musicRouter.get("/playlist/:id", MusicController.getPlaylistWithTracks);

musicRouter.get("/users", UsersController.getAllUsers);

musicRouter.post("/users", UsersController.createUser);

musicRouter.get("/user/:email", UsersController.getUserByEmail);
