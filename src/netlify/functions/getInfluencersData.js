import { callChatGPT } from "./chatgpt";

const getInfluencersData = async (event) => {
  const { influencersAmount, tweets, time, sources } = JSON.parse(event.body);

  const question1 = `Find the top ${influencersAmount} health influencers in the USA who use Twitter, returning their names, Twitter photo URLs, follower counts, categories they specialize in, and their total number of tweets.`;
  const influencersData = await callChatGPT(question1);

  let reliabilityData = [];
  for (const influencer of influencersData) {
    const question2 = `Compare the information from ${influencer.name} against ${tweets} tweets published over time ${time} with ${sources} reliable sources, calculating a reliability percentage based on the matches.`;
    const influencerReliability = await callChatGPT(question2);
    reliabilityData.push({
      name: influencer.name,
      trustscore: influencerReliability.trustscore || 0,
    });
  }

  const formattedInfluencersData = influencersData.map((influencer) => {
    const reliability = reliabilityData.find((r) => r.name === influencer.name);
    return {
      name: influencer.name,
      photo: influencer.photo_url,
      categories: influencer.categories || "General",
      trustscore: reliability?.trustscore || 0,
      followers: influencer.followers,
      totalTweets: influencer.total_tweets,
    };
  });

  return {
    statusCode: 200,
    body: JSON.stringify(formattedInfluencersData),
  };
};

export { getInfluencersData as handler };
