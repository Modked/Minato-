let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri

export async function before(m, { isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)
    if (chat.antiBadword && isBadword) {
        user.warn += 1
        await m.reply(`${user.warn >= 5 ? '*📮 إذا وصل إجمالي تحذيراتك إلى 5، سيقوم البوت بإخراجك من المجموعة!*' : '*📮 تم اكتشاف كلمات مسيئة أو بذيئة*'}

𖠙 التحذير: ${user.warn} / 5

[❗] إذا وصل إجمالي التحذيرات إلى 5، سيتم إخراجك من هذه المجموعة

“من يؤمن بالله واليوم الآخر فليقل خيراً أو يصمت” (رواه البخاري ومسلم).`)
        if (user.warn >= 5) {
            user.warn = 0
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
    return !0
}
