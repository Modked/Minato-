import {
    Ytdl
} from "../scraper/yt.js";

let handler = async (m, {
    conn,
    text: txt
}) => {
    const more = String.fromCharCode(8206)
    const readMore = more.repeat(4001)

    let text = txt.split(" ");
    if (!text[0]) return m.reply('[example] : .ytmp4 https://youtube.com/watch?v=bzpXVCqNCoQ')

    try {
        m.reply(wait)
        let yt = new Ytdl()
        let results = await yt.play(text[0]);

        if (!text[1]) {
            let res = []
            for (let i in results.video) {
                res.push({
                    title: 'Download dengan resolusi'.toUpperCase(),
                    description: `Resolusi ${i}`,
                    id: `.ytmp4 ${text[0]} ${i}`
                })
            }
            const list = {
                title: "Klik Disini!",
                sections: [{
                    title: results.title,
                    rows: [...res]
                }]
            };
            await conn.sendListButton(m.chat, '乂 *Y T MP4*\n\nPilih dari daftar ini', list, wm, '[]', m)
        } else {
            let hasil = results.video[text[1]]
            await conn.sendMessage(m.chat, {
                video: {
                    url: hasil.url
                },
                caption: `\`${results.title}\``
            }, {
                quoted: m
            })
        }
    } catch (e) {
        throw eror
    }
}

handler.help = ['ytmp4']
handler.tags = ['downloader']
handler.command = /^(ytvideo(s)?|ytmp4)$/i
handler.limit = true
handler.register = true

export default handler