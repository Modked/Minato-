const { BingImageCreator } = await(await import('../scraper/bing-image.js'));

const handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
	let text;
	if (args.length >= 1) {
		text = args.slice(0).join(" ");
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text;
	} else {
		throw 'Input teks atau reply teks!';
	}

	await m.reply(wait);
try {
		const res = new BingImageCreator({ cookie: global.api.bing });
		const data = await res.createImage(text);
      const credit = await res.getCredits()
		if (data.length > 0) {
			for (let i = 0; i < data.length; i++) {
				try {
					if (!data[i].endsWith('.svg')) {
						await conn.sendFile(
							m.chat,
							data[i],
							'',
							`*Remaining Credits*: ${credit}\nImage *(${i + 1}/${data.length - 1})*\n\n*Prompt*: ${text}`,
							m,
							false, {
								mentions: [m.sender],
							}
						);
					}
				} catch (error) {
					console.error(`Error sending file: ${error.message}`);
					await m.reply(`Failed to send image *(${i + 1}/${data.length})*`);
				}
			}
		} else {
			await m.reply('No images found.');
		}
	} catch (error) {
		console.error(`Error in handler: ${error.message}`);
		await m.reply(`${error}\n\n${error.message}`)
	}
};

handler.help = ["bing-img *[query]*"];
handler.tags = ["ai"];
handler.command = /^(bing(img|-img|-image|image)?)$/i;
handler.premium = true
export default handler;