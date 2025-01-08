import {
    createHash
} from 'crypto'
let handler = async function(m, {
    text,
    conn,
    command,
    usedPrefix,
    args
}) {
    let beton = [{
        "name": "quick_reply",
        "buttonParamsJson": "{\"display_text\": \"Cek SN\", \"id\":\".ceksn\"}"
    }]
    if (!text) return conn.sendUrlButton(m.chat, 'Masukan *Serial Number*\nKlik button dibawah untuk mendapatkan nomor SN', beton, wm)

    let nama = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    const pp = await conn.profilePictureUrl(m.sender, "image").catch((_) => "https://i.ibb.co/3Fh9V6p/avatar-contact.png")
    let age = user.age
    let sn = createHash('md5').update(m.sender).digest('hex')
    let cap = `✅ *Unreg Successfully*
  
» *Name :* ${nama}
» *Age :* ${age} Tahun
» *Status :* Sukses
`
    if (text !== sn) throw 'Serial Nomor Salah'

    conn.sendMessage(m.chat, {
        image: {
            url: pp
        },
        caption: cap,
        contextInfo: {
            "externalAdReply": {
                "title": 'UNREGISTRATION',
                "body": wm,
                "showAdAttribution": true,
                "mediaType": 1,
                "sourceUrl": '',
                "thumbnailUrl": unReg,
                "renderLargerThumbnail": true

            }
        }
    }, {
        quoted: m
    })

    user.registered = false

}
handler.help = ['unregister']
handler.tags = ['main']

handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler