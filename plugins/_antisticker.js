/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
هذا توقيعي، لا تحذفه.
*/

export async function before(m, { isAdmin, isBotAdmin, conn }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isSticker = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiSticker && isSticker) {
    if (isSticker === "stickerMessage") {
        if (isAdmin || !isBotAdmin) {		  
        } else {
           // m.reply(`*تم اكتشاف ملف Webp*\nعذرًا، سيتم حذف الملصق الذي أرسلته لأن المشرف قام بتفعيل خاصية منع الملصقات`)
await conn.delay(10000)
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        }
        return true
    }
  }
  return true
}
