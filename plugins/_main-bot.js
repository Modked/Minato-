import fetch from 'node-fetch'
import axios from 'axios';

let handler = async (m, { conn }) => {

const floc = {
key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": `apa sih`,"h": `Hmm`, 'jpegThumbnail': await conn.resize(thumb, 100, 100)}}
}
let { data } = await axios.get(`https://api.tioxy.my.id/api/simsimi?text=${m.text ? m.text : "bot"}`)

if (m.isGroup) {
conn.sendMessage(m.chat, {text: '@'+m.chat, contextInfo: {
groupMentions: [
{
groupSubject: data.data.success,
groupJid: m.chat
}]
}
}, {quoted: fVerif})
} else {
await conn.reply(m.chat, data.data.success, fVerif)
}

}
handler.customPrefix = /^(bot|mybot)/i;
handler.command = new RegExp();
handler.exp = 200
handler.money = 100
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}