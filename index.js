
const sakshGenerateGeminiContent = require('./src/geminiEngine');
const sakshGenerateChatGPTContent = require('./src/chatgptEngine');
const sakshGenerateCohereContent = require('./src/cohereEngine');
const sakshGenerateAnthropicContent = require('./src/anthropicEngine');
const sakshGenerateMetaContent = require('./src/metaEngine');
const sakshGenerateMistralContent = require('./src/mistralEngine');
const sakshGenerateHuggingFaceContent = require('./src/huggingfaceEngine');

module.exports = {
    sakshGenerateGeminiContent,
    sakshGenerateChatGPTContent,
    sakshGenerateCohereContent,
    sakshGenerateAnthropicContent,
    sakshGenerateMetaContent,
    sakshGenerateMistralContent,
    sakshGenerateHuggingFaceContent
};