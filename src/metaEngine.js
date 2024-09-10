const { MetaAI } = require('meta-ai');

async function sakshGenerateMetaContent(prompt, config) {
    try {
        const { apiKey, modelName = "opt-175b" } = config;

        if (!apiKey) {
            throw new Error("API key is required.");
        }

        const metaAI = new MetaAI(apiKey);
        const response = await metaAI.generate({
            model: modelName,
            prompt: prompt,
            max_tokens: 150,
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error generating content with Meta:", error);
        return null;
    }
}

module.exports = sakshGenerateMetaContent;