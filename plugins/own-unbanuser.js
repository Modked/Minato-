/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

let handler = async (m, { conn, text }) => {
    if (!text) throw 'Siapa Yg Mau Di Unban??'
    let who = m.mentionedJid[0] ? m.mentionedJid[0] : text + '@s.whatsapp.net' ? text + '@s.whatsapp.net' : m.chat
    if (!who) throw 'No/Tag yg mau di unban!'
    let users = global.db.data.users
    users[who].banned = false
    users[who].bannedDate = 0
    users[who].warn = 0
    conn.reply(m.chat, 'Done!', m)
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban(user)?$/i
handler.owner = true

export default handler