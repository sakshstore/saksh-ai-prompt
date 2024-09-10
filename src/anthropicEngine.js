const { Anthropic } = require('anthropic');

async function sakshGenerateAnthropicContent(prompt, config) {
    try {
        const { apiKey, modelName = "claude-v1" } = config;

        if (!apiKey) {
            throw new Error("API key is required.");
        }

        const anthropic = new Anthropic(apiKey);
        const response = await anthropic.generate({
            model: modelName,
            prompt: prompt,
            max_tokens: 150,
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error generating content with Anthropic:", error);
        return null;
    }
}

module.exports = sakshGenerateAnthropicContent;
