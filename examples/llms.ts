import { OpenAI } from "langchain/llms/openai";

export const run = async () => {
    const model = new OpenAI({ temperature: 0.9, modelName: 'gpt-3.5-turbo' });
    const res = await model.call('What is the capital of France?');
    console.log(res);
};

(async () => {
    await run();
})();
