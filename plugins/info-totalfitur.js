/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let fitur = Object.values(plugins).filter(v => v.help ).map(v => v.help).flat(1)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.reply(m.chat, `Owned Features ${global.namebot} Currently\nTotal: ${fitur.length} Feature`, fkon)
}
handler.help = ['totalfitur']
handler.tags = ['main']
handler.command = ['totalfitur']
export default handler