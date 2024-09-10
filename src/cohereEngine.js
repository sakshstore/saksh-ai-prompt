const { CohereClient } = require('cohere-ai');

async function sakshGenerateCohereContent(prompt, config) {
    try {
        const { apiKey, modelName = "large" } = config;

        if (!apiKey) {
            throw new Error("API key is required.");
        }

        const cohere = new CohereClient(apiKey);
        const response = await cohere.generate({
            model: modelName,
            prompt: prompt,
            max_tokens: 150,
        });

        return response.text;
    } catch (error) {
        console.error("Error generating content with Cohere:", error);
        return null;
    }
}

module.exports = sakshGenerateCohereContent;