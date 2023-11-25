import express from "express";
import path from "path";
import "dotenv/config";
import process from "process";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { musicRouter } from "./server/routes/playlists.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware para solucionar el problema de CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.use("/", musicRouter);

app.use(express.static(path.join(__dirname, "./dist")));

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
  console.log(
    `Servidor Express escuchando en el puerto http://localhost:${PORT}`
  );
});
