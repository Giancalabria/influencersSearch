// filepath: /C:/Users/shinf/software/personal/influencers/netlify/functions/chatgpt.js
const dotenv = require("dotenv");
const fetch = require("node-fetch");

dotenv.config();

const apiKey = process.env.CHATGPT_API_KEY;

const callChatGPT = async (question) => {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
};

module.exports = { callChatGPT };
