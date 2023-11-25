import express from "express";
import path from "path";
import "dotenv/config";
import process from "process";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { musicRouter } from "./routes/playlists.js";

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

// Middleware para manejar solicitudes JSON
app.use(express.json());

app.use("/", musicRouter);

// // Configuración de middleware para servir los archivos estáticos
app.use(express.static(path.join(__dirname, "./dist")));

// // Manejo de rutas en el lado del servidor
// app.get("/", (req, res) => {
//   // Tu lógica de manejo de datos aquí
//   res.json({ message: "Datos desde el servidor" });
// });

// Manejo de cualquier ruta desconocida devolviendo la misma página principal
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
});

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
  console.log(
    `Servidor Express escuchando en el puerto http://localhost:${PORT}`
  );
});
