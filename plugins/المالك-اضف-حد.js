/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

let handler = async (m, { conn, command, text, args }) => {
    if (!text) throw '🧞 | الرجاء كتابة الرقم أو الإشارة إلى المستخدم! 🧞'

    let t1 = text.split(' ')
    let who
    if (m.isGroup) {
        who = m.mentionedJid[0] 
            ? m.mentionedJid[0] 
            : t1[0] + '@s.whatsapp.net'
    } else {
        who = m.sender
    }

    let users = global.db.data.users
    let jumlah = t1[1] ? t1[1] : 250
    users[who].limit += jumlah * 1

    conn.reply(
        m.chat, 
        `🧞 | تم بنجاح إضافة حد (${t1[1] ? t1[1] : 250}) للمستخدم!\n🧞ميناتو بوت`,
        m
    )
}

handler.help = ['addlimit', 'اضف-حد']
handler.tags = ['owner', 'مالك']
handler.command = /^addlimit(user)?|اضف-حد$/i
handler.owner = true

export default handler