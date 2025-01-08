let handler = m => m;

handler.all = async function (m) {
    let responses;

    if (/^تست$/i.test(m.text)) {
        responses = ['🔱 *كفايا كرهت اني بوت*'];
    } else if (/^بوت$/i.test(m.text)) {
        responses = ['*انا شغال بس مش لاقي واحده اجيب منها عيال 😔*'];
    } else if (/^بوت$/i.test(m.text)) {
        responses = ['*معاك البوت اطلب وتمنى ⚡*'];
    } else if (/^بوت$/i.test(m.text)) {
        responses = ['*وييييييي تعرف تعمل دي 🤺*'];
    } else if (/^بوت$/i.test(m.text)) {
        responses = ['*شغال يااااااااابا*'];
    } else if (/^بوت$/i.test(m.text)) {
        responses = ['*بحبك 🌹❤️*'];
    } else if (/^بوت$/i.test(m.text)) {
        responses = ['*موجود 🙋🏻‍♂️*'];
    } else if (/^بوت$/i.test(m.text)) {
        responses = ['*مين معايا الفنان طب احب اطمنك انا شغال*'];
    } else if (/^بوت$/i.test(m.text)) {
        responses = ['*انا في الخدمة🗿*'];
    } else if (/^بوت$/i.test(m.text)) {
        responses = ['*في الخدمة ياسطا👀*'];
    } else if (/^بوت$/i.test(m.text)) {
        responses = ['*اي ياسطا شغال متخفش🧞*'];
    }

    if (responses) {
        let randomIndex = Math.floor(Math.random() * responses.length);
        conn.reply(m.chat, responses[randomIndex], m);
    }

    return !0;
};

export default handler;