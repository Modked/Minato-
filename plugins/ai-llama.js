/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

import axios from 'axios'

let handler = async (m, {conn, text, usedPrefix, command}) => {
let teks 
if (m.quoted) {
teks = m.quoted.text
} else if (text) {
teks = text
} else throw `[ invalid ]\n*gunakan command*:\n${usedPrefix+command} presiden Indonesia`

try {
m.reply(wait)

const result = await llama2(text);
if (!result) throw 'ENOUTFOUND !!'

m.reply(result)

} catch (e) {
throw eror
}

}
handler.help = handler.command = ['llama']
handler.tags = ['ai']
handler.limit = handler.register = true

export default handler

 async function llama2(ask) {
  try {
    const response = await axios.post('https://www.llama2.ai/api', {
    prompt: `<s>[INST] <<SYS>>\nAnda adalah asisten yang membantu semua orang dengan baik dan benar. dan kamu harus menggunakan bahasa Indonesia.\n<</SYS>>\n\n${ask} [/INST]\n`,
  model: 'meta/llama-2-70b-chat',
  systemPrompt: 'Anda adalah asisten yang membantu semua orang dengan baik dan benar. dan kamu harus menggunakan bahasa Indonesia.',
  temperature: 0.75,
  topP: 0.9,
  maxTokens: 800,
  image: null,
  audio: null}
  );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Jika Anda ingin menangani error lebih lanjut di tingkat pemanggilan
  }
};