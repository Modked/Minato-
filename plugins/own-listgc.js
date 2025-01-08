/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

let handler = async (m, { conn, participants }) => {

	let now = new Date() * 1
	let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
    let txt = ''
    // let tolgp = `${participants.lenght}`
    
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) 
    txt += `╭──────────ᨖ
▯   ⚘ ${await conn.getName(jid)}
▯   ⚘ [${chat?.metadata?.read_only ? 'Left' : 'Joined'}]
▯   ${db.data.chats[jid] == undefined ? db.data.chats[jid] = {
      isBanned: false,
      welcome: false,
      antiLink: false,
      antiSpam: true,
      delete: false,
    } : db.data.chats[jid].expired ? msToDate(db.data.chats[jid].expired - now) : 'Not set for Expired'}
▯   ${db.data.chats[jid].isBanned ? '🔓' : '🔐'} Group banned
▯   ${db.data.chats[jid].welcome ? '🔓' : '🔐'} Auto welcome
▯   ${db.data.chats[jid].antiLink ? '🔓' : '🔐'} Anti link
▯   ${db.data.chats[jid].antiSpam ? '🔓' : '🔐'} Anti spam
╰────ᨖ\n\n`

let teks = await style(txt, 1)

    m.reply(`乂 *L i s t  G r o u p* :
    
Total Group: ${groups.length}

${teks}

`.trim())

}

handler.help = ['listgrup']
handler.tags = ['group']

handler.command = /^(listgroup|listgc|listgrup)$/i


export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit";
    // +minutes+":"+sec;
}