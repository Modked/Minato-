import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; 
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const handler = async (m, { conn }) => {
    try {
        // تحديد مسار ملف package.json
        const packageJsonPath = path.join(__dirname, '../package.json');
        
        // التحقق من وجود ملف package.json
        let initialMessage = await conn.sendMessage(m.chat, { text: `📂 جاري قراءة ملف package.json...` }, { quoted: m });
        console.log(`Reading from: ${packageJsonPath}`);
        
        if (!fs.existsSync(packageJsonPath)) {
            console.log("package.json not found.");
            await conn.sendMessage(m.chat, { text: `⚠️ لم يتم العثور على ملف package.json.`, edit: initialMessage.key }, { quoted: m });
            return;
        }

        // قراءة محتويات ملف package.json
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

        // التأكد من أن ملف package.json يحتوي على الحقول اللازمة
        if (!packageJson || !packageJson.dependencies) {
            console.log("No dependencies found in package.json.");
            await conn.sendMessage(m.chat, { text: `⚠️ لم يتم العثور على الحقول المطلوبة في package.json.`, edit: initialMessage.key }, { quoted: m });
            return;
        }

        console.log(`Found dependencies in package.json. Proceeding to send the file...`);
        
        // إرسال ملف package.json مباشرة
        let sendingMessage = await conn.sendMessage(m.chat, { text: `✅ تم العثور على التبعيات. سيتم إرسال ملف package.json...`, edit: initialMessage.key }, { quoted: m });
        
        await conn.sendMessage(m.chat, {
            document: fs.readFileSync(packageJsonPath),
            mimetype: 'application/json',
            fileName: 'package.json'
        }, { quoted: m });

        console.log(`File sent successfully!`);

    } catch (err) {
        console.error(`Failed to process package.json: ${err.message}`);
        await conn.sendMessage(m.chat, { text: `❌ فشل في معالجة ملف package.json: ${err.message}`, edit: initialMessage.key }, { quoted: m });
    }
};

handler.help = ['getplugin'].map((v) => v + ' *<nombre>*');
handler.tags = ['owner'];
handler.command = /^(باكج|بكج|package)$/i;
handler.owner = true;

export default handler;