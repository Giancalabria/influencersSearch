import { Button, Divider, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import styles from "./Layouts.module.css";

export const MainLayout: React.FC = () => {
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <a href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              src={require("../assets/Logo.png")}
              alt="logo"
              style={{ height: "80px" }}
            />
            <Typography variant="h1" className={styles.headerTitle}>
              Wellness
            </Typography>
          </div>
        </a>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button
            variant="contained"
            href="/"
            style={{ height: "fit-content" }}
            size="large"
          >
            Home
          </Button>
          <Button
            variant="contained"
            href="/admin-panel"
            style={{ height: "fit-content" }}
            size="large"
          >
            Admin Panel
          </Button>
          <Button
            variant="contained"
            href="/leaderboard"
            style={{ height: "fit-content" }}
            size="large"
          >
            Leaderboard
          </Button>
        </div>
      </header>
      <Divider sx={{ m: "1rem 0 1.5rem 0" }} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
