// import OpenAI from "openai";
// import { fileToBase64 } from "../utils/fileUtils";

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// export async function openAIBatchAnalyze(question, files) {
//   const tasks = files.map(async (f) => {
//     const b64 = await fileToBase64(f);
//     const res = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         { role: "system", content: "You are a concise product image QA assistant." },
//         {
//           role: "user",
//           content: [
//             { type: "text", text: question },
//             { type: "image_url", image_url: { url: `data:${f.type};base64,${b64}` } },
//           ],
//         },
//       ],
//       temperature: 0.2,
//     });
//     return res.choices?.[0]?.message?.content?.trim() || "(No answer)";
//   });

//   return Promise.all(tasks);
// }
