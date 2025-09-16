import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardView from "@/views/dashboard/DashboardView";
import AppLayout from "@/layouts/AppLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<DashboardView />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
