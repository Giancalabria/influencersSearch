const { callChatGPT } = require("./chatgpt");

const getInfluencersData = async (event) => {
  try {
    const { influencersAmount, tweets, time, sources } = JSON.parse(event.body);

    const question1 = `Find the top ${influencersAmount} health influencers in the USA who use Twitter. Return an array of objects with the following properties: name, Twitter photo URL, follower count, categories they specialize in, and their total number of tweets.`;
    const influencersData = await callChatGPT(question1);

    if (!Array.isArray(influencersData)) {
      throw new Error("Invalid response from callChatGPT: expected an array");
    }

    const reliabilityPromises = influencersData.map(async (influencer) => {
      const question2 = `Compare the information from ${influencer.name} against ${tweets} tweets published over time ${time} with ${sources} reliable sources. Calculate a reliability percentage based on the matches and return an object with the properties: name and trustscore.`;
      const influencerReliability = await callChatGPT(question2);
      return {
        name: influencer.name,
        trustscore: influencerReliability.trustscore || 0,
      };
    });

    const reliabilityData = await Promise.all(reliabilityPromises);

    const formattedInfluencersData = influencersData.map((influencer) => {
      const reliability = reliabilityData.find(
        (r) => r.name === influencer.name
      );
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
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

module.exports = { handler: getInfluencersData };
