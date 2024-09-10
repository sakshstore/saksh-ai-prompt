const { Configuration, OpenAIApi } = require("openai");

async function sakshGenerateChatGPTContent(prompt, config) {
    try {
        const { apiKey, modelName = "text-davinci-003" } = config;

        if (!apiKey) {
            throw new Error("API key is required.");
        }

        const configuration = new Configuration({
            apiKey: apiKey,
        });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createCompletion({
            model: modelName,
            prompt: prompt,
            max_tokens: 150,
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error generating content with ChatGPT:", error);
        return null;
    }
}

module.exports = sakshGenerateChatGPTContent;