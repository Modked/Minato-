/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

let handler = async (m, { conn, text }) => {
    if (!text) throw 'Siapa yang mau di banned?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let users = global.db.data.users
    users[who].banned = true
    await conn.reply(who, 'kamu telah terbanned karena melanggar aturan Bot', null)
    await conn.reply(m.chat, `berhasil banned ` + who.split('@')[0], m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^(ban)$/i
handler.owner = true
export default handler