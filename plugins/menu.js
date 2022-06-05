
let handler = async (m, { usedPrefix }) => {

const os = require('os')
    let context = `
╔
‎‎ 
╭─────────────────────╮
│
│•  بوبيز بوت هو بوت واتساب يقدم لك 
│• خدمات رائعة اذا كنت لا تعرف 
│• كيف تشغل البوت لماذا لا تسأل صاحبه?
│• قم بزيارة صفحته على الفيسبوك لتعرف 
│• الكثير عن البوتات و ايضا ستجد طريقة
│• صنع بوت بنفسك و بسهولة
│• 
│ _> رابط صفحة صاحب البوت ;)_
│www.instagram.com/noureddine_ouafy
╰─────────•◈•─────────╯
await conn.sendTBI2(m.chat, context.trim(), wm,thumburl,`انستغرامي `, `https://www.instagram.com/noureddine_ouafy`, null,null, `الاوامر`, `${ usedPrefix}lst`,m)
}
handler.help = ['ᴍᴇɴᴜ']
handler.tags = ['main']
handler.command = /^(menu|help|list)$/i


module.exports = handler
