import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true // This is the default and can be omitted
  });
  
  export async function chatFunction(message) {
    const chatCompletion = await openai.chat.completions.create({
      //messages: [{ role: 'user', content: 'Say this is a test' }],
      promt:message,
      model: 'gpt-3.5-turbo',
    });
    return chatCompletion.data.choises[0].text;
  }
  
