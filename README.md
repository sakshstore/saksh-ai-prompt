# saksh-ai-prompt

A Node.js package to send user prompts to various AI models and return the output.

## Installation

To install the package, use npm:

```bash
npm install saksh-ai-prompt
```

## Usage

First, require the package and configure the API keys and model names for the AI models you want to use.

```javascript
const {
    sakshGenerateGeminiContent,
    sakshGenerateChatGPTContent,
    sakshGenerateCohereContent,
    sakshGenerateAnthropicContent,
    sakshGenerateMetaContent,
    sakshGenerateMistralContent,
    sakshGenerateHuggingFaceContent
} = require('saksh-ai-prompt');

const configGemini = {
    apiKey: 'your_google_api_key',
    modelName: 'gemini-1.5-flash'
};

const configChatGPT = {
    apiKey: 'your_openai_api_key',
    modelName: 'text-davinci-003'
};

const configCohere = {
    apiKey: 'your_cohere_api_key',
    modelName: 'large'
};

const configAnthropic = {
    apiKey: 'your_anthropic_api_key',
    modelName: 'claude-v1'
};

const configMeta = {
    apiKey: 'your_meta_api_key',
    modelName: 'opt-175b'
};

const configMistral = {
    apiKey: 'your_mistral_api_key',
    modelName: 'mistral-7b'
};

const configHuggingFace = {
    apiKey: 'your_huggingface_api_key',
    modelName: 'gpt2'
};

const prompt = 'Your prompt here...';

// Using Gemini
sakshGenerateGeminiContent(prompt, configGemini).then(response => {
    console.log('Generated Content from Gemini:', response);
}).catch(error => {
    console.error('Error:', error);
});

// Using ChatGPT
sakshGenerateChatGPTContent(prompt, configChatGPT).then(response => {
    console.log('Generated Content from ChatGPT:', response);
}).catch(error => {
    console.error('Error:', error);
});

// Using Cohere
sakshGenerateCohereContent(prompt, configCohere).then(response => {
    console.log('Generated Content from Cohere:', response);
}).catch(error => {
    console.error('Error:', error);
});

// Using Anthropic
sakshGenerateAnthropicContent(prompt, configAnthropic).then(response => {
    console.log('Generated Content from Anthropic:', response);
}).catch(error => {
    console.error('Error:', error);
});

// Using Meta
sakshGenerateMetaContent(prompt, configMeta).then(response => {
    console.log('Generated Content from Meta:', response);
}).catch(error => {
    console.error('Error:', error);
});

// Using Mistral
sakshGenerateMistralContent(prompt, configMistral).then(response => {
    console.log('Generated Content from Mistral:', response);
}).catch(error => {
    console.error('Error:', error);
});

// Using Hugging Face
sakshGenerateHuggingFaceContent(prompt, configHuggingFace).then(response => {
    console.log('Generated Content from Hugging Face:', response);
}).catch(error => {
    console.error('Error:', error);
});
```

## Configuration

Replace `your_google_api_key`, `your_openai_api_key`, `your_cohere_api_key`, `your_anthropic_api_key`, `your_meta_api_key`, `your_mistral_api_key`, and `your_huggingface_api_key` with your actual API keys.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Author

[https://github.com/susheelhbti](https://github.com/susheelhbti)

## Repository

[https://github.com/sakshstore/saksh-ai-prompt](https://github.com/sakshstore/saksh-ai-prompt)

## Bugs

Report bugs at [https://github.com/sakshstore/saksh-ai-prompt/issues](https://github.com/sakshstore/saksh-ai-prompt/issues)

## Keywords

- gemini
- chatgpt
- cohere
- anthropic
- meta
- mistral
- huggingface
- generative AI
- prompt
- AI
- content generation