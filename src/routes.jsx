import { Routes, Route } from "react-router-dom";
import { Favorites } from "./pages/favorites";
import { Main } from "./pages/main/MainPage";
import { NotFound } from "./pages/not-found";
import { Category } from "./pages/category";
import { Login } from "./pages/login/LoginPage";
import {Register } from "./pages/register"

export const AppRoutes = () => {
return (
    <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path= "/category/:id" element={<Category />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
    </Routes>
);
};