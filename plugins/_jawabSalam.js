/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

let handler = async (m, {conn}) => {
let audio = {
    audio: {url: 'https://pomf2.lain.la/f/xe3qczl.mp3'},
    mimetype: 'audio/mp4',
    ptt: true,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: wm,
        body: botdate,
        sourceUrl: '',
        thumbnail: await (await conn.getFile('https://telegra.ph/file/d6f44478fd2ece636755e.jpg')).data,
        renderLargerThumbnail: true
      }
    }
  };

  conn.sendMessage(m.chat, audio, { quoted: m })
}

handler.customPrefix = /^(assalam|aslam(ualaikum)?)/i;
handler.command = new RegExp();
export default handler