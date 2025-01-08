import {
    WAMessageStubType
} from '@adiwajshing/baileys'

export async function before(m) {
let chat = db.data.chats[m.chat]
if (chat.detect) {
    if (!m.messageStubType || !m.isGroup) return;
    let edtr = `@${m.sender.split`@`[0]}`
    if (m.messageStubType == 21) {
        await this.sendMessage(m.chat, {
            text: `${edtr} قام بتغيير موضوع المجموعة إلى :\n*${m.messageStubParameters[0]}*`,
            mentions: [m.sender]
        }, {
            quoted: fkon
        })
    } else if (m.messageStubType == 22) {
        await this.sendMessage(m.chat, {
            text: `${edtr} قام بتغيير أيقونة المجموعة.`,
            mentions: [m.sender]
        }, {
            quoted: fkon
        })
    } else if (m.messageStubType == 1 || m.messageStubType == 23 || m.messageStubType == 132) {
        await this.sendMessage(m.chat, {
            text: `${edtr} *أعاد* تعيين رابط المجموعة!\n\n`,
            mentions: [m.sender]
        }, {
            quoted: fkon
        })
    } else if (m.messageStubType == 24) {
        await this.sendMessage(m.chat, {
            text: `${edtr} قام بتغيير وصف المجموعة.\n\n${m.messageStubParameters[0]}`,
            mentions: [m.sender]
        }, {
            quoted: fkon
        })
    } else if (m.messageStubType == 25) {
        await this.sendMessage(m.chat, {
            text: `${edtr} قام بتعيين *${m.messageStubParameters[0] == 'on' ? 'فقط المشرفين' : 'جميع المشاركين'}* لتعديل معلومات المجموعة.`,
            mentions: [m.sender]
        }, {
            quoted: fkon
        })
    } else if (m.messageStubType == 26) {
        await this.sendMessage(m.chat, {
            text: `${edtr} قام بـ *${m.messageStubParameters[0] == 'on' ? 'إغلاق' : 'فتح'}* المجموعة!\nالآن ${m.messageStubParameters[0] == 'on' ? 'فقط المشرفين' : 'جميع المشاركين'} يمكنهم إرسال الرسائل.`,
            mentions: [m.sender]
        }, {
            quoted: fkon
        })
    } else if (m.messageStubType == 29) {
        await this.sendMessage(m.chat, {
            text: `${edtr} قام بتعيين @${m.messageStubParameters[0].split`@`[0]} كمشرف.`,
            mentions: [`${m.sender}`, `${m.messageStubParameters[0]}`]
        }, {
            quoted: fkon
        })
    } else if (m.messageStubType == 30) {
        await this.sendMessage(m.chat, {
            text: `${edtr} قام بإيقاف @${m.messageStubParameters[0].split`@`[0]} من كونه مشرفًا.`,
            mentions: [`${m.sender}`, `${m.messageStubParameters[0]}`]
        }, {
            quoted: fkon
        })
    } else if (m.messageStubType == 72) {
        await this.sendMessage(m.chat, {
            text: `${edtr} قام بتغيير مدة الرسائل المؤقتة إلى *@${m.messageStubParameters[0]}*`,
            mentions: [m.sender]
        }, {
            quoted: fkon
        })
    } else if (m.messageStubType == 123) {
        await this.sendMessage(m.chat, {
            text: `${edtr} *أوقف* الرسائل المؤقتة.`,
            mentions: [m.sender]
        }, {
            quoted: fkon
        })
    } else {
        console.log({
            messageStubType: m.messageStubType,
            messageStubParameters: m.messageStubParameters,
            type: WAMessageStubType[m.messageStubType],
        });
    }
}
}

export const disabled = false
