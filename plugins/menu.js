
let handler = async (m, { usedPrefix }) => {

const os = require('os')
    let context = `
╔══════════════════════
║
╠❐ вσвιz вσт By ɴᴏᴜʀᴇᴅᴅɪɴᴇ_ᴏᴜᴀꜰʏ
║
╠❐ البوت تم صنعه للمغاربة خاصة وللناس عامة 😹
║
╠❐ 𝐔𝐏𝐓𝐈𝐌𝐄    : ${uptime}
║
╠❐ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍   : ${version}
║
╠❐ 𝐒𝐓𝐀𝐓𝐔𝐒    : 𝐀𝐋𝐈𝐕𝐄
║
╠❐ 𝐓𝐎𝐓𝐀𝐋 𝐔𝐒𝐄𝐑𝐒 : ${user}
║
╠❐ 𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑𝐄𝐃 : ${users+5}
║
╠❐ 𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: ${os.type()}
║
╚════════════════════════`
await conn.sendTBI2(m.chat, context.trim(), wm,thumburl,`انستغرامي `, `https://www.instagram.com/noureddine_ouafy`, null,null, `الاوامر`, `${ usedPrefix}lst`,m)
}
handler.help = ['ᴍᴇɴᴜ']
handler.tags = ['main']
handler.command = /^(menu|help|list)$/i


module.exports = handler
