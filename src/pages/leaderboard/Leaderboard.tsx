import { Typography } from "@mui/material";
import { LeaderboardTable } from "./components/LeaderboardTable";
import styles from "./Leaderboard.module.css";

export const Leaderboard = () => {
  return (
    <div className={styles.leaderboardWrapper}>
      <div>
        <Typography variant="h2">
          How trustworthy are the influencers?
        </Typography>
        <Typography variant="subtitle1">
          Real-time leaderboard evaluating the accuracy of influencers'
          predictions.
        </Typography>
      </div>
      <div>
        <LeaderboardTable />
      </div>
    </div>
  );
};
