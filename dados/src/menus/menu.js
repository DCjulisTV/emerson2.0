async function menu(prefix, botName = "MeuBot", userName = "Usuário") {
  return `
╭┈⊰ 🌸 『 *${botName}* 』
┊Olá, *${userName}*!
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯

╭┈❪🍧ฺꕸ▸ *MENU*
┊
┊> ${prefix}menuadm
┊> ${prefix}menubn
┊> ${prefix}menudono
┊> ${prefix}gpt
┊> ${prefix}gpt4
┊> ${prefix}tiktok
┊> ${prefix}pinterest
┊> ${prefix}instagram
┊> ${prefix}letra
┊> ${prefix}play
┊> ${prefix}playvid
┊> ${prefix}clima
┊> ${prefix}dicionario
┊> ${prefix}wikipedia
┊> ${prefix}ttp
┊> ${prefix}sticker
┊> ${prefix}ping
┊> ${prefix}perfil
┊> ${prefix}rankativo
┊> ${prefix}rankinativo
┊> ${prefix}rankativog
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯
`;
}

module.exports = menu;

