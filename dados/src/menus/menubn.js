async function menubn(prefix, botName = "MeuBot", userName = "Usuário", isLiteMode = false) {
  let menuContent = `
╭┈⊰ 🌸 『 *${botName}* 』
┊Olá, *${userName}*!
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯

╭┈❪🍧ฺꕸ▸ *JOGOS*
┊
┊> ${prefix}jogodavelha
┊> ${prefix}eununca
┊> ${prefix}vab
┊> ${prefix}chance
┊> ${prefix}casal
┊> ${prefix}shipo
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯

╭┈❪🍧ฺꕸ▸ *INTERAÇÕES*
┊
┊> ${prefix}chute
┊> ${prefix}chutar
┊> ${prefix}tapa
┊> ${prefix}soco
┊> ${prefix}socar
┊> ${prefix}explodir
┊> ${prefix}abraco
┊> ${prefix}abracar
┊> ${prefix}morder
┊> ${prefix}mordida
┊> ${prefix}lamber
┊> ${prefix}lambida
┊> ${prefix}beijo
┊> ${prefix}beijar
┊> ${prefix}mata
┊> ${prefix}matar
┊> ${prefix}cafune
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯
  
╭┈❪🍧ฺꕸ▸ *BRINCADEIRAS - M*
┊${!isLiteMode ? `\n┊•.̇𖥨֗🍓⭟${prefix}gay` : ''}
┊> ${prefix}burro
┊> ${prefix}inteligente
┊> ${prefix}otaku
┊> ${prefix}fiel
┊> ${prefix}chato
┊> ${prefix}sortudo
┊> ${prefix}azarado
┊> ${prefix}forte
┊> ${prefix}fraco
┊> ${prefix}otario
┊> ${prefix}macho
┊> ${prefix}nerd
┊> ${prefix}preguicoso
┊> ${prefix}lindo
┊> ${prefix}desumilde
┊> ${prefix}humilde
┊> ${prefix}programador
┊> ${prefix}billionario
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯

`;
}

module.exports = menubn;
