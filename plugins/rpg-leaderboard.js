/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

let handler = async (m, { conn, args, participants }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
  let sortedBank = users.map(toNumber('bank')).sort(sort('bank'))
  let sortedAtm = users.map(toNumber('atm')).sort(sort('atm'))
  
  let usersExp = sortedExp.map(enumGetKey)
  let usersLim = sortedLim.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  let usersMoney = sortedMoney.map(enumGetKey)
  let usersBank = sortedBank.map(enumGetKey)
  let usersAtm = sortedAtm.map(enumGetKey)
  console.log(participants)
  let len = args[0] ? args[0] : 20
  
  let text = `
• *XP Leaderboard Top #${len}* •
Kamu: *${usersExp.indexOf(m.sender) + 1}* dari *${usersExp.length}*

${sortedExp.slice(0, len).map(({ jid, exp }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `${conn.getName(jid.split`@`[0])}\nwa.me/${jid.split`@`[0]} *${exp} Exp*` : '@'}${jid.split`@`[0]} *${exp} Exp*`).join`\n`}

• *Bank Leaderboard Top #${len}* •
Kamu: *${usersBank.indexOf(m.sender) + 1}* dari *${usersBank.length}*

${sortedBank.slice(0, len).map(({ jid, bank }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `${conn.getName(jid.split`@`[0])}\nwa.me/${jid.split`@`[0]} *${bank} Bank*` : '@'}${jid.split`@`[0]} *${bank} Bank*`).join`\n`}

• *Atm Leaderboard Top #${len}* •
Kamu: *${usersAtm.indexOf(m.sender) + 1}* dari *${usersAtm.length}*

${sortedAtm.slice(0, len).map(({ jid, atm }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `${conn.getName(jid.split`@`[0])}\nwa.me/${jid.split`@`[0]} *${atm} Atm*` : '@'}${jid.split`@`[0]} *${atm} Atm*`).join`\n`}

• *Limit Leaderboard Top #${len}* •
Kamu: *${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length}*

${sortedLim.slice(0, len).map(({ jid, limit }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `${conn.getName(jid.split`@`[0])}\nwa.me/${jid.split`@`[0]} *${limit} Limit*` : '@'}${jid.split`@`[0]} *${limit} Limit*`).join`\n`}

• *Level Leaderboard Top #${len}* •
Kamu: *${usersLevel.indexOf(m.sender) + 1}* dari *${usersLevel.length}*

${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `${conn.getName(jid.split`@`[0])}\nwa.me/${jid.split`@`[0]} *Level ${level}*` : '@'}${jid.split`@`[0]} *Level ${level}*`).join`\n`}

• *Money Leaderboard Top #${len}* •
Kamu: *${usersMoney.indexOf(m.sender) + 1}* dari *${usersMoney.length}*

${sortedMoney.slice(0, len).map(({ jid, money }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `${conn.getName(jid.split`@`[0])}\nwa.me/${jid.split`@`[0]} *Money ${money}*` : '@'}${jid.split`@`[0]} *Money ${money}*`).join`\n`}
`.trim()

  conn.sendMessage(m.chat, {image: {url: await flaaa.getRandom() + 'Leaderboard'}, caption: text,
    contextInfo: {
      mentionedJid:  [...usersExp.slice(0, len), ...usersBank.slice(0, len), ...usersAtm.slice(0, len), ...usersLim.slice(0, len), ...usersLevel.slice(0, len), ...usersMoney.slice(0, len)].filter(v => !participants.some(p => v === p.jid))
    
  }}, {quoted: m})
}
handler.help = ['leaderboard']
handler.tags = ['rpg']
handler.command = /^(l(eader)?b(oard)?)$/i
handler.group = true

export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}