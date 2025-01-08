import WebSocket from 'ws';
import { zeta } from '../scraper/zeta.js';

let handler = async (message, { conn, usedPrefix, command }) => {
    try {
        let chat = message.quoted ? message.quoted : message;
        let mediaType = (message.quoted ? message.quoted : message).mimetype || '';
        let userSettings = global.db.data.chats[message.chat];
        
        if (!/video|audio/.test(mediaType)) {
            throw "Can't download media. Please reply to an audio or video message.";
        }

        conn.reply(message.chat, "```Processing, please wait...```", message);

        let mediaBuffer = await chat.download();
        if (!mediaBuffer) {
            throw "Can't download media. Please try again.";
        }

        let result = await zeta(mediaBuffer);
        if (!result.base64) {
            throw "Can't convert media. Please try again.";
        }

        conn.sendFile(message.chat, result.base64, 'output.mp4', "Here is your processed media", message, null, {
            mimetype: 'audio/mp4',
            asDocument: userSettings.useDocument
        });
    } catch (error) {
        throw error;
    }
};

handler.help = ['vnzeta'];
handler.tags = ['voice'];
handler.command = /^(vnzeta|zeta)$/i;

export default handler;