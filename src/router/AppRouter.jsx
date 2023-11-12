import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { MusiconfitRoutes } from "../musiconfit/routes/MusiconfitRoutes"



export const AppRouter = () => {
    return (
        <Routes>

            {/* Login y registro */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* Musiconfit dashboard */}
            <Route path="/*" element={<MusiconfitRoutes />} />
           

        </Routes>
    )
}
