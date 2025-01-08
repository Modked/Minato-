import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

/*
Setting
*/
global.setting = {
 clearSesi: false, // pembersih sampah sessions 
 clearTmp: true, // pembersih sampah tmp
 addReply: true, // buat with thumbnail di pesan
 idgc: '120363315668824185@g.us' // id gc buat join only
 }

global.info = {
 nomerbot : '62881022583282',
 pairingNumber : '62881022583282',
 figlet: 'Merry', // buat tampilan konsole start
 nomorwa : '6281546401576',
 nameown : 'BOT🧞',
 nomerown : '6281546401576',
 packname : 'sticker by ',
 author : 'STORE BOT-ID',
 namebot : '🄼 🄸 🄽 🄰 🅃 🄾 🄱 🄾 🅃🧞',
 wm : 'Copyright © 2020-2024 𝗠𝗶𝗻𝗮𝘁𝗼 𝗕𝗼𝘁🧞.',
 stickpack : 'Whatsapp',
 stickauth : '𝗠𝗶𝗻𝗮𝘁𝗼 𝗕𝗼𝘁🧞',
 jid: '@s.whatsapp.net'
}

// Thumbnail 
global.media = {
 ppKosong : 'https://i.ibb.co/3Fh9V6p/avatar-contact.png',
 didyou : 'https://telegra.ph/file/e40219cc8d472025f18b6.jpg',
 rulesBot : 'https://telegra.ph/file/7cd8985216ffd3c376238.jpg',
 thumbnail : 'https://telegra.ph/file/e40219cc8d472025f18b6.jpg',
 thumb : 'https://telegra.ph/file/e40219cc8d472025f18b6.jpg',
 logo : 'https://files.catbox.moe/psfmuu.jpg',
 unReg : 'https://telegra.ph/file/ef02d1fdd59082d05f08d.jpg',
 registrasi : 'https://files.catbox.moe/psfmuu.jpg',
 confess : 'https://telegra.ph/file/bfef7e33bc60dd2608ac6.jpg',
 access : 'https://files.catbox.moe/psfmuu.jpg',
 tqto : 'https://telegra.ph/file/221aba241e6ededad0fd5.jpg',
 spotify : 'https://files.catbox.moe/psfmuu.jpg',
 weather : 'https://telegra.ph/file/5b35ba4babe5e31595516.jpg',
 gempaUrl : 'https://files.catbox.moe/psfmuu.jpg',
 akses : 'https://telegra.ph/file/6c7b9ffbdfb0096e1db3e.jpg',
 wel : 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4',
 good : 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4',
 sound: 'https://pomf2.lain.la/f/ymca9u8.opus'
}
// Sosmed
global.url = {
 sig: 'https://www.instagram.com/mamad5451rt',
 sgh:  'https://github.com/mamad',
 sgc: 'https://chat.whatsapp.com/Lp67YVd2JsrGubKPghLtUs'
}
// Donasi
global.payment = {
 psaweria: 'https://saweria.co/mamad',
 ptrakterr: '-',
 pdana: '0823427570'
}
// Info Wait
global.msg = {
 wait: '⏱️ *Mohon bersabar*\n\> STORE BOT-ID Sedang menjalankan perintah dari *User*!',
 eror: '🤖 *Information Bot*\n\> Mohon maaf atas ketidaknyamanan dalam menggunakan *STORE BOT-ID* . Ada kesalahan dalam sistem saat menjalankan perintah.'
}
 
// api_id web suntik
global.apiId = {
 smm: '4524',
 lapak: '300672'
}

// Apikey
global.api = {
 user: '-', // api_id antinsfw 
 screet: '-', // api_screet nsfw klo abis ganti sendiri 
 uptime: '-',
 xyro: '-',
 lol: 'GataDios',
 smm: '-',
 lapak: '-',
 prodia: '-',
 bing: '1-HLkal9xPklSXn8H_NYBhugb9UnCJKJEzQp4Rk_PxP4xxBCqtm_Os-93cXF8mtFeqde_ZGjnx2C1MM4PCS0gH8mzdX5tJ5aoaDC4G0VruZATWvvOQlHs2UBDNID5PR4MtskWzX69idiBidGDqVwfNBNZYgqb3cgqkLbyEeZnWHxxrhO3es3O8YOI5wd8Y0a31_OiLKTAzwS1ba-wvcBP9khAHrUkuQpzXuoybpwfwpQ'

}
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    nightTeam: "https://api.tioxy.my.id",
    lol: "https://api.lolhumaan.xyz",
    smm: "https://smmnusantara.id",
    lapak: "https://panel.lapaksosmed.com"
}

//Apikey
global.APIKeys = {
    "https://api.xyroinee.xyz": "vRFLiyLPWu",
    "https://api.lolhumaan.xyz": "GataDios"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})