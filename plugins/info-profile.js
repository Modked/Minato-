/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
import path from 'path';
import cnv from 'canvas'
import uploadImage from '../lib/uploadImage.js';
import { createHash } from 'crypto'

let handler = async (m, {
    conn
}) => {

    let user = db.data.users[m.sender]
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let sn = await createHash('md5').update(m.sender).digest('hex');
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/f1ed66b7930885e565d2a.jpg')
try {
    let {
        premium,
        owner,
        level,
        limit,
        lastclaim,
        registered,
        regTime,
        age,
        pasangan,
        name,
        money,
        exp
    } = global.db.data.users[m.sender]

    let username = conn.getName(who)
    var now = new Date() * 1

    let fkon = {
        key: {
            fromMe: false,
            participant: `${m.sender}`,
            ...(m.chat ? {
                remoteJid: m.sender
            } : {})
        },
        message: {
            contactMessage: {
                displayName: `${name}`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        }
    }

    let str = `乂 P R O F I L E
 
 *Nama:* ${username}
 *Username:* ${registered ? name : ''}
 *Tag:* @${who.replace(/@.+/, '')}
 *Nomor:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
 *Link:* https://wa.me/${who.split`@`[0]}
 *Umur:* ${registered ? age : ''} Tahun
 *Pasangan:* ${pasangan ? `@${pasangan.split("@")[0]}` : `Tidak Punya`}
${readMore}
❲ *Y O U R S T A T U S* ❳

 *Money:* 💲${money}
 *Exp:* ${exp}
 *Level:* ${level}
 *Register:* ${registered ? 'Terdaftar': 'Tidak'}
 *Premium:* ${premium ? "Aktif" :"Tidak"}
 *PremiumTime:* ${premium ? msToDate(user.premiumTime - now) : `expired`}
 *Owner:* ${owner ? "Aktif" :"Tidak"}
 *OwnerTime:* ${owner ? msToDate(user.ownerTime - now) : `expired`}
`.trim()
    let buffer = await img(pp, username, registered ? age : '', money, level, sn)
    conn.sendMessage(m.chat, {
        text: str,
        contextInfo: {
            "mentionedJid": [m.sender],
            "externalAdReply": {
                "title": "Y O U R P R O F I L E",
                "body": namebot,
                "showAdAttribution": true,
                "mediaType": 1,
                "sourceUrl": "https://wa.me/" + who.split`@` [0],
                "thumbnailUrl": await uploadImage(buffer),
                "renderLargerThumbnail": true
            }
        }
    }, {
        quoted: fkon,
        mentions: [m.sender]
    })
} catch (e) {
throw eror
}
}
handler.help = ['profile']
handler.tags = ['main']
handler.command = /^(profile|profil|me)$/i
handler.banned = false
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

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

async function img(pp, nama, umur, uang, level, sn) {
    const bg = await cnv.loadImage('https://telegra.ph/file/cac777c615b22615f757b.jpg');
    const profilePic = await cnv.loadImage(pp);

    cnv.registerFont(path.join('src/font/candara.ttf'), {
        family: 'Maxim'
    });

    const canvas = cnv.createCanvas(bg.width, bg.height);
    const ctxCanvas = canvas.getContext('2d');

    ctxCanvas.drawImage(bg, 0, 0, bg.width, bg.height);

    const centerX = canvas.width / 4.05;
    const centerY = canvas.height / 2.33;
    const radius = canvas.width / 7.5;

    ctxCanvas.save();
    ctxCanvas.beginPath();
    ctxCanvas.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctxCanvas.clip();
    // profil 
    ctxCanvas.drawImage(profilePic, centerX - radius, centerY - radius, radius * 2, radius * 2);
    ctxCanvas.restore();

    ctxCanvas.font = '100px "Candara"';
    ctxCanvas.fillStyle = '#FFFF00';
    ctxCanvas.textAlign = 'left';
    // Nama
    ctxCanvas.fillText(nama, centerX - radius + 1300, centerY + 28);
    // umur
    ctxCanvas.fillText(umur + ' Tahun', centerX - radius + 1300, centerY + 190);
    // uang
    ctxCanvas.fillText(uang, centerX - radius + 1300, centerY + 360);
    // level
    ctxCanvas.fillText(level, centerX - radius + 1300, centerY + 520);

    ctxCanvas.font = '50px "Candara"';
    ctxCanvas.fillStyle = '#FFFF00';
    ctxCanvas.textAlign = 'left';
    // SN
    ctxCanvas.fillText(sn, centerX - radius + 20, centerY + 640);


    let result = canvas.toBuffer('image/jpeg')
    return result
}