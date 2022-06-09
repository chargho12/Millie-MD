
let handler = async (m, { usedPrefix }) => {

const os = require('os')
    let context = `
╔
‎‎ 
╭─────────────────────╮
│
│•  شرغو بوت هو بوت واتساب يقدم لك 
│• خدمات رائعة اذا كنت لا تعرف 
│• كيف تشغل البوت لماذا لا تسأل صاحبه?
│• قم بزيارته على رقمه بالواتساب 
│• https://wa.me/212703867016
│• ماذا تنظر جرب بوت حالا  
│• 
│ _> بوت من صنع يوسف الشرقي ;)_
│https://instagram.com/charq_iii
╰─────────•◈•─────────╯
await conn.sendTBI2(m.chat, context.trim(), wm,thumburl,`my instagram `, `https://instagram.com/charq_iii`, null,null, `الاوامر`, `${ usedPrefix}lst`,m)
}
handler.help = ['ᴍᴇɴᴜ']
handler.tags = ['main']
handler.command = /^(menu|help|list)$/i


module.exports = handler
