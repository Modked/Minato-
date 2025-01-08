import {
    Prodia
} from "prodia.js";
const prodia = new Prodia(api.prodia);

import fetch from 'node-fetch'
let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {

    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw 'No media found'
    let media = await q.download()

    await m.reply(wait)
    try {
        
        let generateImageParams;
        if (text == "low") {
        generateImageParams = {
            imageData: media.toString('base64'),
            resize: 2
            }
        } else if (text == "medium") {
        generateImageParams = {
            imageData: media.toString('base64'),
            resize: 4
        }
        } else if (text == "hard") {
        generateImageParams = {
            imageData: media.toString('base64'),
            resize: 5
        }
        } else if (!text) return m.reply("Option\n- low\n- medium\n+ hard")
        
        const openAIResponse = await generateImage(generateImageParams);
        if (openAIResponse) {
            const result = openAIResponse;
            const tag = `@${m.sender.split('@')[0]}`;

            await conn.sendMessage(m.chat, {
                image: {
                    url: result.imageUrl
                },
                caption: `HD Level: \`${generateImageParams.resize}\``,
                mentions: [m.sender]
            }, {
                quoted: m
            });
        } else {
            console.log("Tidak ada respons dari OpenAI atau terjadi kesalahan.");
        }
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["tohd","hd","hdr"]
handler.tags = ["ai"]
handler.command = /^(tohd(r)?|hd(r)?)$/i
handler.premium = true
export default handler

async function generateImage(params) {
    const generate = await prodia.upscale(params);

    while (generate.status !== "succeeded" && generate.status !== "failed") {
        await new Promise((resolve) => setTimeout(resolve, 250));

        const job = await prodia.getJob(generate.job);

        if (job.status === "succeeded") {
            return job;
        }
    }
}