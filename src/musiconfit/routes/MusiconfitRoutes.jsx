import { Navigate, Route, Routes } from "react-router-dom"
import { MusiconfitPage } from "../pages/MusiconfitPage"

export const MusiconfitRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MusiconfitPage />} />

            {/* Ruta alternativa por si se usa un path no válido */}
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
