import { Route, Routes } from "react-router-dom"
import { MusiconfitPage } from "../pages/MusiconfitPage"
import { PlaylistPage } from "../pages/PlaylistPage"

export const MusiconfitRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MusiconfitPage />} />
            <Route path="/playlist/:id" element={<PlaylistPage />} />


        </Routes>
    )
}
