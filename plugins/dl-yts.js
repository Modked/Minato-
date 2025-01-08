import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw 'Cari Apa? *Cari kamu* wkwk\nex: .yts dj mashup'
  await conn.reply(m.chat, global.wait, m)
  let results = await yts(text)
  let res = []
  for (let pus of results.all) {
  res.push({
        title: pus.title,
        rows: [{
                title: "Download video",
                description: pus.title,
                id: ".ytmp4 " + pus.url,
            },
            {
                title: "Download music",
                description: pus.title,
                id: ".ytmp3 " + pus.url,
            },
        ],
    })
  }
  const list = {
    title: "Klik Disini!",
    sections: [...res],
};

 return conn.sendListButton(m.chat, '乂  *Y T  Search*\n\nPilih dari daftar ini', list, wm, '[]', m)
 
}

handler.help = ['yts']
handler.tags = ['downloader']
handler.command = /^yts(earch)?$/i
handler.limit = true
handler.register = true

export default handler