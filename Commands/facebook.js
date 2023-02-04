const { Facebook,cmd } = require('../lib')
cmd({
        pattern: "insta",
        desc: "download Facebook Video.",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('Need post url.')
let response = await Facebook(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*Downloaded Media from Facebook.*`, citel)
}
    });
