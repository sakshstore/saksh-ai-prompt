const { GoogleGenerativeAI } = require("@google/generative-ai");

async function sakshGenerateGeminiContent(prompt, config) {
    try {
        const { apiKey, modelName = "gemini-1.5-flash" } = config;

        if (!apiKey) {
            throw new Error("API key is required.");
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: modelName });

        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error generating content with Gemini:", error);
        return null;
    }
}

module.exports = sakshGenerateGeminiContent;
