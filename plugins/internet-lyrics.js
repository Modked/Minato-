import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, {
    conn,
    usedPrefix,
    text,
    command
}) => {
    let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} sayang opo koe krungu`
    if (!text) return m.reply(input)
    try {

        const {
            title,
            thumb,
            lyrics
        } = await lyric(text);
        let cap = `*${title}*

${lyrics}`
        await conn.sendThumb(m.chat, cap, thumb, m)
    } catch (e) {
        throw eror
    }
}
handler.help = ['liriklagu']
handler.tags = ['internet']
handler.command = /^(liriklagu|lirik|lyric)$/i
handler.limit = true

export default handler

async function lyric(text) {
    try {
        const {
            data
        } = await axios.get("https://songsear.ch/q/" + encodeURIComponent(text));
        const $ = cheerio.load(data);
        const result = {
            title: $("div.results > div:nth-child(1) > .head > h3 > b").text() + " - " + $("div.results > div:nth-child(1) > .head > h2 > a").text(),
            album: $("div.results > div:nth-child(1) > .head > p").text(),
            number: $("div.results > div:nth-child(1) > .head > a").attr("href").split("/")[4],
            thumb: $("div.results > div:nth-child(1) > .head > a > img").attr("src")
        };

        const {
            data: lyricData
        } = await axios.get(`https://songsear.ch/api/song/${result.number}?text_only=true`);
        const lyrics = lyricData.song.text_html.replace(/<br\/>/g, "\n").replace(/&#x27;/g, "'");

        return {
            status: true,
            title: result.title,
            album: result.album,
            thumb: result.thumb,
            lyrics: lyrics
        };
    } catch (err) {
        console.log(err);
        return {
            status: false,
            error: "Unknown error occurred"
        };
    }
}