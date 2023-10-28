import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"


export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />

            {/* Ruta alternativa para cuando no va ni hacia login ni hacia registro */}
            <Route path='/*' element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}
