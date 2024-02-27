import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey:process.env.NODE_ENV ,
  });
   
 export async function chatFunction(message) {
    const completion = await openai.chat.completions.create({
      messages: [{"role": "assistant", "content": message}],
      model: "gpt-3.5-turbo",
    });
    
    return completion.choices[0].message.content
  }

