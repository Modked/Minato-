/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

import { igdl2 } from '../scraper/igdl2.js'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} https://www.instagram.com/reel/CsC2PQCNgM1/?igshid=NTc4MTIwNjQ2YQ==`
if (!text) return m.reply(input)
let no = 1
const { status, media } = await igdl2(text);
try {
await conn.sendMessage(m.chat, {react: {text: '🕐', key: m.key}})
for (let v of media) {
  await conn.sendFile(m.chat, v , '', `乂 *I N S T A G R A M*\n\n*Result ${no++}*: ${usedPrefix + command}\n*Url*: ${text}`, m)
}
 } catch (e) {
 throw eror
 }
}
handler.help = ["instagram"]
handler.tags = ['downloader']
handler.command = /^(instagram|igdl|ig|instagramdl)$/i
handler.limit = true
handler.register = true

export default handler