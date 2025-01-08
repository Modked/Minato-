/*
wa.me/967772350066
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
هذا توقيعي، لا تحذفه.
*/

const isLinkHttp = /chat.whatsapp.com/i;
export async function before(m, {
    conn,
    args,
    usedPrefix,
    command,
    isAdmin,
    isBotAdmin
}) {
    if (m.isBaileys && m.fromMe) return !0;
    if (!m.isGroup) return !1;
    let chat = global.db.data.chats[m.chat];
    let name = conn.getName(m.sender);
    const isAntiLinkHttp = isLinkHttp.test(m.text);

    function cek(grup1, grup2) {
        const regex = /^https:\/\/chat\.whatsapp\.com\/[a-zA-Z0-9]{22}$/;
        return regex.test(grup1) && regex.test(grup2) && grup1 === grup2;
    }

    if (chat.antiLink && isAntiLinkHttp) {
        let grup = await conn.groupInviteCode(m.chat)
        let gc = await cek(m.text, 'https://chat.whatsapp.com/' + grup)
        await m.reply(gc ? 'لقد أرسلت رابط هذا المجموعة. أنت بأمان!' : !isAdmin ? '*❗ تم الكشف عن أنك أرسلت رابط مجموعة أخرى*\n*سيتم حذف رسالتك بواسطة المشرف*' : '*📣 أنت مشرف، أنت بأمان*')


        await conn.delay(1000)
        if (!gc) {
            if (isBotAdmin && chat.antiLink && !isAdmin) {
                await conn.sendMessage(m.chat, {
                    delete: m.key
                })

                // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
    }
    return !1
}
