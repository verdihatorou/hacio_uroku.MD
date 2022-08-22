// fitur gaceng by verdihatorou

let handler = async(m, { conn, args, usedPrefix }) => {
	
let chat = `  ￣へ￣ aku sebel sama kamu tau 
pengen ewee sampe muncrat di kepala ≥﹏≤
 
`.trim()
m.reply(chat)
}
handler.customPrefix = /^(ayg|ayang)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
