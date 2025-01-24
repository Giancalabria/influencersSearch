import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/home/Home";
import { Leaderboard } from "./pages/leaderboard/Leaderboard";
import { AdminPanel } from "./pages/adminPanel/AdminPanel";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Route>
      {/* Otras rutas que no usan MainLayout */}
    </Routes>
  );
}

export default App;
