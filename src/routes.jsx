import { Routes, Route } from "react-router-dom";
import { Favorites } from "./pages/favorites";
import { Main } from "./pages/main/MainPage";
import { NotFound } from "./pages/not-found";
import { Category } from "./pages/category";

export const AppRoutes = () => {
return (
    <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path= "/category/:id" element={<Category />}/>
        <Route path="*" element={<NotFound />}/>
    </Routes>
);
};