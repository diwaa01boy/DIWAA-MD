/DIWAA BOY OFFICIAL WHATSAPP USERBOT/

const { xxx,cmd } = require('../lib')
cmd({
        pattern: "xxx",
        desc: "enjoy your life.",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('Need post url.')
let response = await xxx(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*Downloaded Media from xhamster.*`, citel)
}
    });
