import OpenAI from 'openai';

const apiKeys = process.env.NODE_ENV;
console.log(apiKeys)
if (!apiKeys) {
    throw new Error('OpenAI API key not found. Please set the OPENAI_API_KEY environment variable.');
}

const openai = new OpenAI({
    apiKey:apiKeys ,
    dangerouslyAllowBrowser: true 
  });
   
 export async function chatFunction(message) {
    const completion = await openai.chat.completions.create({
      messages: [{"role": "assistant", "content": message}],
      model: "gpt-3.5-turbo",
    });
    
    return completion.choices[0].message.content
  }

