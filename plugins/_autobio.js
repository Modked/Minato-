
let handler = m => m
handler.all = async function(m) {
    let setting = global.db.data.settings[this.user.jid]
    if (setting.autoBio) {
        let fitur = Object.values(plugins).filter(v => v.help).map(v => v.help).flat(1)
            let _uptime = process.uptime() * 1000
            let uptime = clockString(_uptime);
            let bio = `🔮 نشط لمدة ${uptime}\n❲ 🖥️الوضع: ${global.opts['self'] ? '🔐خاص' : setting.self ? '🗝️خاص' : global.opts['gconly'] ? '📮فقط المجموعات' : '🌐عالمي'} ❳ ❲ ${fitur.length} ميزات ❳━❲ 👑المالك: ${global.nameown} ❳`
            this.updateProfileStatus(bio).catch(_ => _)
    }
}
export default handler

function clockString(ms) {
    let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    return [d, ' يوم ️', h, ' ساعة ', m, ' دقيقة '].map(v => v.toString().padStart(2, 0)).join('')
}
