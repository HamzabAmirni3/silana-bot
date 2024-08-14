const { download } = require('aptoide-scraper');
exports.default = {
   names: ['Downloader'],
   tags: ['apk'],
   command: ['apk', 'apkdl'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Masukan apk yang ingin di cari contoh ${prefix+command} facebook lite`);
      if (m.isBaileys) return
      let res = await download(text);
      m.reply(loading);
      let icon = res.icon
      let paket = res.package
      let size = res.size
      let nama = res.name
      let up = res.lastup
      let file = res.dllink
      let caption = ` 𝐀𝐏𝐊 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃\n`
      caption += ` ${java} ${paket}\n`
      caption += ` ${java} ${size}\n\n`
      caption += ` ${java} Nama : ${nama}\n`
      caption += ` ${java} Update : ${up}\n`
      caption += ` ${java} Nama Paket : ${paket}\n`
      caption += ` ${java} Size : ${size}\n\n`
      caption += ` *Sending File...*`
      conn.adReply(m.chat, caption, icon, m, {
         showAds: true
      }).then(() => {
         conn.sendMessage(m.chat, { document: { url: file }, fileName: nama + '.apk', mimetype: 'application/vnd.android.package-archive' }, { quoted: m });
      });
   },
   limit: 5,
   premium: false
};
