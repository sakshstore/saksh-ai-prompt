
const { HfInference } = require('@huggingface/inference');

async function sakshGenerateHuggingFaceContent(prompt, config) {
    try {
        const { apiKey, modelName = "gpt2" } = config;

        if (!apiKey) {
            throw new Error("API key is required.");
        }

        const hf = new HfInference(apiKey);
        const response = await hf.textGeneration({
            model: modelName,
            inputs: prompt,
            parameters: { max_new_tokens: 150 },
        });

        return response.generated_text.trim();
    } catch (error) {
        console.error("Error generating content with Hugging Face:", error);
        return null;
    }
}

module.exports = sakshGenerateHuggingFaceContent;
