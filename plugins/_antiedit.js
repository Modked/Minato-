export async function before(m, {
        conn
    }) {
        let chat = db.data.chats[m.chat]

         if (chat.antiedit) {

            if (m.mtype == "editedMessage") {
            
                let msg = (m.mtype === 'editedMessage') ? m.message.editedMessage.message.protocolMessage.editedMessage.conversation ? m.message.editedMessage.message.protocolMessage.editedMessage.conversation : m.message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage.text : ''
                
                let json = await conn.loadMessage(m.message.editedMessage.message.protocolMessage.key.id)
                let cap = `[ *إشعار رسالة معدلة* ]

من: @${json.key.participant ? json.key.participant.split("@")[0] : json.key.remoteJid.split("@")[0]}
الرسالة السابقة: \`${json.message.extendedTextMessage ? json.message.extendedTextMessage.text : json.message.conversation}\`
الرسالة بعد التعديل: \`${msg}\``

                await conn.reply(json.key.remoteJid, cap, m, {
                    contextInfo: {
                        mentionedJid: [json.key.participant ? json.key.participant : json.key.remoteJid]
                    }
                })
            }
             }
        }
