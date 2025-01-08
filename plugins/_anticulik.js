import fs from 'fs'
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // عندما يقوم شخص بدعوة/إرسال رابط مجموعة في الدردشة الخاصة
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('دعوة للانضمام') || m.text.startsWith('Invitation to join') || m.text.startsWith('افتح هذا الرابط')) && !m.isBaileys && !m.isGroup) {
    let teks = `ماذا تفعل يا رجل -_-
    
    ⏥ *قائمة أسعار تأجير البوت MD* ⏥
╭━─━─━─≪✠≫─━─━─━╮
│ 2k/اليوم
│ 8k/الأسبوع
│ 17k/الشهر
│ 50k/دائم
│ 65k/دائم + مالك لمدة 30 يومًا
╰━─━─━─≪✠≫─━─━─━╯


إذا كنت مهتمًا، تواصل مع: @${global.owner[0]}، تفضل بالطلب :)
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
