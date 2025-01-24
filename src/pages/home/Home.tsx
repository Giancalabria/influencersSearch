import { Typography } from "@mui/material";

export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={require("../../assets/Logo.png")} alt="logo" height="250px" />
        <Typography variant="h2" style={{ fontStyle: "italic" }}>
          Healthy information, reliable influencers
        </Typography>
        <Typography variant="subtitle1" style={{ textAlign: "center" }}>
          We provide you with the most accurate health information from the most
          trustworthy influencers.
        </Typography>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "100vw",
          backgroundColor: "#bcc9a7",
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ padding: "2rem", maxWidth: "60%" }}>
          <Typography variant="subtitle1">
            Tired of not knowing who to trust when it comes to health and
            wellness advice? Our app connects you with the best influencers in
            the fitness and health world, offering you transparent and detailed
            information. Explore a comparison table with key metrics such as
            followers, engagement, and specialty. Access complete profiles that
            include certifications, previous collaborations, and reviews from
            other users. With our platform, finding the most reliable experts is
            quick, easy, and safe. Start now and transform the way you choose
            quality content!
          </Typography>
        </div>
      </div>
    </div>
  );
};
