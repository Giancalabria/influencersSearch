import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export const LeaderboardTable = () => {
  const rows = [
    {
      rank: 1,
      name: "Influencer 1",
      category: "Tech",
      score: 95,
      trend: "Up",
      followers: 10000,
    },
    {
      rank: 2,
      name: "Influencer 2",
      category: "Fashion",
      score: 90,
      trend: "Down",
      followers: 9000,
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Score</TableCell>
            <TableCell>Trend</TableCell>
            <TableCell>Claims</TableCell>
            <TableCell>Followers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.rank}>
              <TableCell>{row.rank}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.score}</TableCell>
              <TableCell>{row.trend}</TableCell>
              <TableCell>{row.followers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
