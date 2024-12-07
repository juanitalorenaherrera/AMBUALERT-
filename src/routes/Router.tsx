import { createBrowserRouter, Navigate } from "react-router";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/SignUp/SignUp";
import { Layout } from "../layout/Layout";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" />
    },
    {
        path: "/home",
        element: <Layout><Home /></Layout>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/sign-up",
        element: <Register />
    },
    
]);