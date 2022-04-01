const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `*─────� DONATE 」 ───*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
*-------「 DONATE 」 -------*

┏━━━━━━━ *「 ⛾ 𝑪𝒐𝒇𝒇𝒆𝒆 」* ━━━━━━┓
┃╭───────────────────
┃│➸ 𝙂𝙊𝙋𝘼𝙔 : 083113989278
┃│➸ 𝘿𝘼𝙉𝘼 : 082323341102
┃│
┃│➸ 𝙋𝙐𝙇𝙎𝘼 : 083113989278
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━━━┛
𝙉𝙖𝙗𝙞 𝙈𝙪𝙝𝙖𝙖𝙢𝙢𝙖𝙙 𝙎𝘼𝙒 𝙗𝙚𝙧𝙨𝙖𝙗𝙙𝙖:

والصدقة تطفىء الخطيئة كما تطفىء الماء النار

“𝙎𝙚𝙙𝙚𝙠𝙖𝙝 𝙞𝙩𝙪 𝙙𝙖𝙥𝙖𝙩 𝙢𝙚𝙣𝙜𝙝𝙖𝙥𝙪𝙨 𝙙𝙤𝙨𝙖 𝙨𝙚𝙗𝙖𝙜𝙖𝙞𝙢𝙖𝙣𝙖 𝙝𝙖𝙡𝙣𝙮𝙖 𝙖𝙞𝙧 𝙢𝙚𝙢𝙖𝙙𝙖𝙢𝙠𝙖𝙣 𝙖𝙥𝙞.” (𝙃𝙍. 𝙏𝙞𝙧𝙢𝙞𝙙𝙯𝙞)

Contact person Owner:
wa.me/6283113989278 (Owner)

*donasi via follow ig juga boleh*`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/donasi.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '📍instagram',
               url: instagram
             }

           },
               {
             quickReplyButton: {
               displayText: 'Back To Menu',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp']
handler.command = /^(donasi|donate)$/i

module.exports = handler