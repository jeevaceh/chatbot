import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true // This is the default and can be omitted
  });
   
 export async function chatFunction(message) {
    const completion = await openai.chat.completions.create({
      messages: [{"role": "assistant", "content": message}],
      model: "gpt-3.5-turbo",
    });
    
    return completion.choices[0].message.content
  }

