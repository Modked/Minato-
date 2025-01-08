import axios from 'axios';
import cheerio from "cheerio";

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  let res = await komik(text)
  let txt = `Komiku search\n\n`
  let no = 1
  for (let ress of res) {
  txt += `${no++}. *Title:* ${ress.title}\n*Thumb:* ${ress.thumb}\n*View:* ${ress.view}\n*Type:* ${ress.type}\n\n`
  }
  await conn.reply(m.chat, txt, m)
}
handler.help = ['komikusearch']
handler.tags = ['anime']
handler.command = /^(komikusearch)$/i
handler.limit = true
handler.register = true

export default handler

function komik(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://sektekomik.xyz/manga?search=anj}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                $('div.swiper-wrapper > div').each(function(a, b) {
                    result = {
                        author: 'Tio',
                        title: $(b).find('> div > div.product__item__text > h5 > a').text(),
                        thumb: $(b).find('> div > div.product__item__pic.set-bg.manga').attr('data-setbg'),
                        view: $(b).find('.view').text().replace(/\D/g, ''),
                        type: $(b).find('> div > div.product__item__pic.set-bg.manga > div.ep.m-type > a').text()
                    }
                    hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}