const { ytmp4 } = require('ruhend-scraper');
exports.default = {
   names: ['Downloader'],
   tags: ['ytmp4'],
   command: ['ytmp4', 'ytv'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (!text) return m.reply(`Masukan Link Youtubenya ${prefix+command} https://youtu.be/MvsAesQ-4zA`)
      let { title, size, video, quality, thumbnail } = await ytmp4(text)     
      let caption = ` 📽 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐕𝐈𝐃𝐄𝐎\n`
      caption += ` ⭔ Judul : ${title}\n`
      caption += ` ⭔ Kualitas : ${quality}\n`
      caption += ` ⭔ Size : ${size}`      
      let media = await Format.streamFile(conn, video, 'mp4', m);      
      conn.adReply(m.chat, caption, thumbnail || cover, m).then(() => {
         conn.docFile(m.chat, media, `${title}-${quality}~Ruhend-MD.mp4`, '', 'video/mp4', m);
      }) 
   },
   limit: 3,
   premium: false
};
