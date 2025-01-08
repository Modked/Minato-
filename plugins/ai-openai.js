import axios from "axios";
let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text)
        throw `Apa yang pengen kamu tanyain?\n\nContoh: ${
            usedPrefix + command
        } halo bot`;

try {
await m.react('💬')
 let d = new Date(new Date + 3600000)
let locale = 'id'
const jam = new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"});
let hari = d.toLocaleDateString(locale, { weekday: 'long' })
let tgl = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let json = await chatWithGPT(
        [
            {
                role: "assistant",
                content:
                    `Nama kamu adalah Merry, kamu dibuat dan dikembangkan oleh Tio. Gunakan bahasa gaul seperti kata gue dan lu dalam menjawab semua pertanyaan orang. kamu cerdas. Gunakan emoji yang sesuai dalam setiap kalimat. Gunakan tanggal ${tgl}. Gunakan jam ${jam}. Gunakan hari ${hari}.`
            },
            {
                role: "user",
                content: text
            }
        ],
        text
    );
    await m.reply(`\> ✨${json}`);
await m.react('🔥')
} catch (e) {
await m.react('❎')
}
};

handler.help = ["ai <teks>","openai"];
handler.tags = ["ai"];
handler.command = /^(openai|ai)$/i;
handler.limit = true

export default handler;

const IP  = () => {
    const octet = () => Math.floor(Math.random() * 256);
    return `${octet()}.${octet()}.${octet()}.${octet()}`;
};

async function chatWithGPT(messages, q) {
    try {
        const nonceValue = JSON.parse(cheerio.load(await (await axios.get(
            "https://chatgpt4online.org/chat"
        )).data)('.mwai-chatbot-container').attr('data-system')).restNonce;

        const {
            data
        } = await axios(
            "https://chatgpt4online.org//wp-json/mwai-ui/v1/chats/submit", {
                method: "post",
                data: {
                    botId: "default",
                    messages,
                    newMessage: q,
                    stream: false,
                },
                headers: {
                    "X-WP-Nonce": nonceValue,
                    "Content-Type": "application/json",
                    "x-forwarded-for":  await IP()
                },
            }
        );
        return data.reply;
    } catch (err) {
        console.log(err.response.data);
        return err.response.data.message;
    }
}