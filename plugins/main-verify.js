/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

import { createHash } from 'crypto'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
// nama
let namae = conn.getName(m.sender)
// database 
let user = global.db.data.users[m.sender]
// profile
let ran = ["1","2","3","4","5","6","7","8","9"]
const pp = await conn.profilePictureUrl(m.sender, "image").catch((_) => "https://telegra.ph/file/ee60957d56941b8fdd221.jpg")
// checking user
  if (user.registered === true) throw `You Have Already Registered In The Database, Do You Want To Re-Register? */unreg*`
  // input 
  let age = ran.getRandom() * 2
  user.name = m.name
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
╭━━「 *Information*
│• *Name:* ${m.name}
│• *Age:* ${age} Years
│• *Status:* _Success_
│• *Serial Number:* ${sn}
╰╾•••
`
await conn.sendMessage(m.chat, { text: cap,
contextInfo:
					{
						"externalAdReply": {
							"title": " ✔️ S U C C E S S  R E G I S T R A S I",
							"body": "",
							"showAdAttribution": true,
							"mediaType": 1,
							"sourceUrl": '',
							"thumbnailUrl": pp,
							"renderLargerThumbnail": true

						}
					}}, m)
}
handler.help = ['@verify']
handler.tags = ['main']
handler.customPrefix = /^(@verify)/i;
handler.command = new RegExp()

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}