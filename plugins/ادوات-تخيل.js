const handler = async (m, { command, usedPrefix, conn, args, text }) => {
  try {
    await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

    let txt = text;
    if (!text && m.quoted && m.quoted.text) {
      txt = m.quoted.text;
    }

    if (!txt) {
      await conn.sendMessage(m.chat, {
        text: `🧞🧞 الرجاء إدخال وصف واضح للصورة أو الرد على رسالة تحتوي على وصف.`,
      }, { quoted: m });
      await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      return;
    }

    const waitMessage = await conn.sendMessage(m.chat, {
      text: '⏳ يتم الآن معالجة النص وتحويله إلى صورة، يرجى الانتظار...'
    });

    const imgUrl = `https://the-end-api.vercel.app/api/ai/text-image?q=${encodeURIComponent(txt)}&quality=ultra&filter=off`;

    await conn.sendMessage(m.chat, { image: { url: imgUrl }, caption: ` تم إنشاء الصورة بنجاح! 🧞🧞` }, { quoted: m });

    await conn.sendMessage(m.chat, { delete: waitMessage.key });
    await conn.sendMessage(m.chat, { react: { text: '👌🏻', key: m.key } });
  } catch (error) {
    console.error('خطأ أثناء معالجة النص:', error);
    await conn.sendMessage(m.chat, {
      text: `❌ حدث خطأ أثناء إنشاء الصورة. الرجاء المحاولة مرة أخرى.`,
    }, { quoted: m });
    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
  }
};

handler.command = /^(تخيل)$/i;
handler.tags = ['fun'];
handler.help = ['تخيل <نص>'];
handler.group = false;
handler.private = false;
export default handler;