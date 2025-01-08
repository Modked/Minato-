let handler = async (m, {
    conn,
    text,
    args,
    command,
    usedPrefix 
}) => {
const list = `⋄ SEWA BOT ID ⋄

[ 1 ] 10K /1Minggu
[ 2 ] 20k /1bulan +PREMIUM (15 hari)
[ 3 ] 30k /2bulan + PREMIUM (30 hari)
[ 4 ] 85k /6 bulan + premium (90 hari)
[ 5 ] 100k/12 bulan + premium (12 bulan)

PREMIUM BOT ID
[ 1 ] 5k/Minggu 
[ 2 ] 10k/bulan 
[ 3 ] 15k/bln+add ke grup pribadi (15hari)
[ 4 ] (30k permanen)


 Via pembayaran : Minta ke owner 
 
 Owner: wa.me/6281546401576
  
 *Note*: chat owner untuk sewa Bot
                   Bot selalu Ter Up To Date

 anda membeli = setuju 😃
`

conn.sendFile(m.chat, 'https://telegra.ph/file/cf1c9bce36f1890e1d458.jpg', '', list, m)
}
handler.help = handler.command = ['sewa','sewabot']
handler.tags = ['main']
export default handler