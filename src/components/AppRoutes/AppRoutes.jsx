import { Route, Routes } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Favorites from "../../pages/Favorites/Favorites";
import NotFound from "../../pages/NotFound/NotFound";
import Category from "../../pages/Сategory/Сategory";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;