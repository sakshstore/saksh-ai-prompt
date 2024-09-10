const { MistralAI } = require('mistral-ai');

async function sakshGenerateMistralContent(prompt, config) {
    try {
        const { apiKey, modelName = "mistral-7b" } = config;

        if (!apiKey) {
            throw new Error("API key is required.");
        }

        const mistralAI = new MistralAI(apiKey);
        const response = await mistralAI.generate({
            model: modelName,
            prompt: prompt,
            max_tokens: 150,
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error generating content with Mistral:", error);
        return null;
    }
}

module.exports = sakshGenerateMistralContent;