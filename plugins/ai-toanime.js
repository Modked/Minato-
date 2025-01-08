/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/


import axios from 'axios'

let handler = async (m, { conn, usedPrefix, text, args,command }) => {
	let q = m.quoted ? m.quoted : m;
	let mime = (q.msg || q).mimetype || q.mediaType || "";
    let mime_ = `Kirim/Reply Gambar Dengan Caption ${usedPrefix + command}`

if (!mime) throw mime_
if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`;
	let media = await q.download()   
    let cap = '*Result from* : ' + usedPrefix + command
try {
await m.react('🔮')
let res = await toanime(media);
await conn.sendFile(m.chat, res, '', cap, m)
await m.react('✨')
} catch (e) {
throw eror
}
}
handler.command = ['jadianime','toanime']
handler.help = ["toanime"];
handler.tags = ["process"];
handler.limit = true;
handler.register = true

export default handler;

async function toanime(buffer) {
    try {
        const base64String = Buffer.from(buffer, 'binary').toString('base64');
        const apiResponse = await axios.post('https://www.drawever.com/api/photo-to-anime', {
            data: `data:image/png;base64,${base64String}`,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return 'https://www.drawever.com' + apiResponse.data.urls[1] || 'https://www.drawever.com' + apiResponse.data.urls[0];
    } catch (error) {
        throw error;
    }
}