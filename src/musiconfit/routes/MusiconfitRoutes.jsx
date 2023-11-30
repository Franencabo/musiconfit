import { Route, Routes } from "react-router-dom"
import { MusiconfitPage } from "../pages/MusiconfitPage"
import { PlaylistPage } from "../pages/PlaylistPage"
import { AuthRoutes } from "../../auth/routes/AuthRoutes"

export const MusiconfitRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MusiconfitPage />} />
            <Route path="/playlist/:id" element={<PlaylistPage />} />
            <Route path="/auth/*" element={<AuthRoutes />} />
        </Routes>
    )
}
