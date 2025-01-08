let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
    // تنظيف تلقائي عندما توجد رسالة لا يمكن رؤيتها في تطبيق واتساب على سطح المكتب
    if (m.messageStubType === 68) {
        let log = {
            key: m.key,
            content: m.msg,
            sender: m.sender
        }
        await this.modifyChat(m.chat, 'clear', {
            includeStarred: false
        }).catch(console.log)
    }
}

export default handler

