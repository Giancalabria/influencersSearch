const dotenv = require("dotenv");

dotenv.config();

const apiKey = process.env.CHATGPT_API_KEY;

const callChatGPT = async (question, retries = 3) => {
  try {
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
  } catch (error) {
    if (error.message.includes("Too Many Requests") && retries > 0) {
      console.log(`Retrying... (${3 - retries + 1})`);
      await new Promise((resolve) =>
        setTimeout(resolve, 1000 * (3 - retries + 1))
      );
      return callChatGPT(question, retries - 1);
    } else {
      throw error;
    }
  }
};

module.exports = { callChatGPT };
