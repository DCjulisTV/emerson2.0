async function menuadm(prefix, botName = "MeuBot", userName = "Usuário", isLiteMode = false) {
  return `
╭┈⊰ 🌸 『 *${botName}* 』
┊Olá, *${userName}*!
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯

╭┈❪🍧ฺꕸ▸ *ADMINISTRAÇÃO*
┊
┊> ${prefix}ban
┊> ${prefix}promover
┊> ${prefix}rebaixar
┊> ${prefix}mute
┊> ${prefix}desmute
┊> ${prefix}adv
┊> ${prefix}rmadv
┊> ${prefix}listadv
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯

╭┈❪🍧ฺꕸ▸ *GERENCIAMENTO*
┊
┊> ${prefix}limpar
┊> ${prefix}hidetag
┊> ${prefix}marcar
┊> ${prefix}linkgp
┊> ${prefix}grupo A/F
┊> ${prefix}setname
┊> ${prefix}setdesc
┊> ${prefix}addregra
┊> ${prefix}delregra
┊> ${prefix}limitmessage
┊> ${prefix}dellimitmessage
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯

╭┈❪🍧ฺꕸ▸ *MODERADORES*
┊
┊> ${prefix}addmod
┊> ${prefix}delmod
┊> ${prefix}listmods
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯

╭┈❪🍧ฺꕸ▸ *ATIVAÇÕES*
┊
┊> ${prefix}autodl
┊> ${prefix}modonsfw
┊> ${prefix}bemvindo
┊> ${prefix}saida
┊> ${prefix}soadm
┊> ${prefix}antilinkgp
┊> ${prefix}antilinkhard
┊> ${prefix}antiflood
┊> ${prefix}antifake
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯

╭┈❪🍧ฺꕸ▸ *CONFIGURAÇÕES*
┊
┊> ${prefix}legendasaiu
┊> ${prefix}legendabv
┊> ${prefix}fotobv
┊> ${prefix}rmfotobv
┊> ${prefix}fotosaiu
┊> ${prefix}rmfotosaiu
┊> ${prefix}abrirgp
┊> ${prefix}fechargp
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯
`;
}

module.exports = menuadm;
