const { Tiktok,cmd } = require('../lib')
cmd({
        pattern: "tiktok",
        desc: "download tiktok video.",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('Need post url.')
let response = await Tiktok(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*Downloaded Media from Tiktok.*`, citel)
}
    });
