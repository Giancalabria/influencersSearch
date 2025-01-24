import { Button, Typography } from "@mui/material";

export const AdminPanel = () => {
  const handleGetInfluencersData = async () => {
    try {
      const response = await fetch("./netlify/functions/getInfluencersData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          influencersAmount: 1,
          tweets: 10,
          time: "1 month",
          sources: ["source1", "source2"],
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const influencersData = await response.json();
      console.log(influencersData);
    } catch (error) {
      console.error("Error fetching influencers data:", error);
    }
  };
  return (
    <>
      <Typography variant="h2">Admin Panel</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleGetInfluencersData()}
      >
        EJECUTAR
      </Button>
    </>
  );
};
