import { Navigate, Outlet } from "react-router-dom";

export default function ProctectedRoute() {
  return localStorage.getItem("token")
    ? <Outlet />
    : <Navigate to="/login" />;
}