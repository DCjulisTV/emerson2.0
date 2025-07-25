async function menuDono(prefix, botName = "MeuBot", userName = "Usuário") {
  return `
╭┈⊰ 🌸 『 *${botName}* 』
┊Olá, *${userName}*!
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯

╭┈❪🍧ฺꕸ▸ *CONFIGURAÇÕES*
┊
┊> ${prefix}prefixo
┊> ${prefix}numerodono
┊> ${prefix}nomedono
┊> ${prefix}nomebot
┊> ${prefix}fotomenu
┊> ${prefix}videomenu
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯

╭┈❪🍧ฺꕸ▸ *GERENCIAMENTO*
┊
┊> ${prefix}addsubdono
┊> ${prefix}delsubdono
┊> ${prefix}listasubdonos
┊> ${prefix}addpremium
┊> ${prefix}delpremium
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯
`;
}

module.exports = menuDono;
