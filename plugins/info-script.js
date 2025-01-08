/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

let handler = async (m, {
    conn,
    text,
    args,
    command,
    usedPrefix 
}) => {
const list = `⋄ sᴄʀɪᴘᴛ ɴɪɢʜᴛᴍᴀʀᴇ ᴍᴅ ⋄

pembelian script:
⋄ *Ai Bing-img* (new)
⋄ *Ai Bing-img2* (new)
⋄ *Ai Controlnet* (new)
⋄ *Downloader Tiktok v1, v2, v3* (fixed) > (auto deteksi url slide/video)
⋄ *Downloader Tiktok2 v1, v2, v3* (new)
⋄ *Downloader Mega* (new)
⋄ *Downloader yt-play opsi mp3/mp4* (new)
⋄ *Game Ular Tangga* (new)
⋄ *Game chess* (new)
⋄ *Game ww* (new)
⋄ *Simulator* (beta)
⋄ *tools Beautify Javascript* (new)
⋄ *tools upload file support mp3, mp4, mpeg, dll*
⋄ *tools upload to-ibb*
  _Next fitur lainnya yang keren_
  
  Harga: 75k 
  Via Dana: 082285357346
  Qris: not yet available 
  Gopay: 082285357346
  Owner: wa.me/6282285357346
  ⭐: _free update_ insyaallah
  ⋄ *free update berlaku jika tidak melanggar ketentuan dalam pembelian Script*
  ⋄ *menjual script*: ❎
  
  *Note*: chat owner untuk pembelian script, beli = setuju 😃
`

conn.sendMessage(m.chat, list, {image: {url: 'https://telegra.ph/file/fc2c4b84a2236148b0642.jpg'}, caption: list}, {quoted: m})
}
handler.help = handler.command = ['script','sc']
handler.tags = ['main']
export default handler