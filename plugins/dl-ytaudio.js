/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

import {
Ytdl 
} from "../scraper/yt.js";

let handler = async (m, {
    usedPrefix,
    command,
    conn,
    text,
    args
}) => {
    let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} https://youtube.com/watch?v=bzpXVCqNCoQ`
    if (!text) return m.reply(input)
    try {
        let yt = new Ytdl(text);
        let { audio, title } = await yt.play(text);
        let doc = {
            audio: {url: audio["128"].url},
            mimetype: "audio/mp4",
            fileName: title,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: text,
                    title: title,
                    body: text,
                    sourceUrl: text,
                    thumbnail: (await conn.getFile(text)).data
                }
            }
        }

        await conn.sendMessage(m.chat, doc, {
            quoted: m
        })
    } catch (e) {
        throw eror
    }

}
handler.tags = ['downloader']
handler.help = ['ytmp3 <link>']
handler.command = /^(yta|ytmp3|ytaudio)$/i
handler.limit = true
handler.register = true

export default handler