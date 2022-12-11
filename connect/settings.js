process.on('uncaughtException', console.error) //Safe Log Error 
const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.owner = ['6283853152230']
global.ownerName = 'Restaa x Team TKJ'
global.namaBot =  '𝐍𝐢𝐠𝐡𝐭 𝐁𝐨𝐭'
global.packname = '𝐍𝐢𝐠𝐡𝐭 𝐁𝐨𝐭' 
global.author = 'TKJ x RPL'
global.prefa = ['','!','.','#','!']
global.sessionName = 'botmd'
//Message Nya Ubah Disini
global.mess = {
admin: '*ᴏɴʟʏ ᴀᴅᴍɪɴ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',
botAdmin: 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin!',
botOwner: '*ᴏɴʟʏ ᴅᴇᴠᴇʟᴏᴘᴇʀ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ',
group: 'Perintah ini hanya bisa di gunakan dalam group!', 
private: 'Only Private Chat',
endLimit: 'Limit Harian Sudah Habis, Limit Akan Direset Besok',
wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
link: '[❗] Link yang anda kirim tidak valid!', 
link1: 'Link Yang Anda Gunakan Eror',
nsfw: 'Nsfw Belum Diaktifkan Di Group ini',
regis: 'Silakan Daftar terlebih dahulu dengan ketik #verifikasi nama.umur\nContoh : #verifikasi Night.19',
done: 'Done!',
}


//Sesuaikan
global.thumb = { url : 'https://telegra.ph/file/de6d085e41436bf460be3.jpg'}
global.thumb1 = 'https://telegra.ph/file/b86bec7b5889031848108.jpg'
global.thumb2 = { url: 'https://telegra.ph/file/cfa44511b60419ea31cb0.jpg'}
global.thumb3 = { url: 'https://telegra.ph/file/1bf2ddb39df8796edbb79.jpg'}
global.erorurl =  'https://telegra.ph/file/df5397e6ed9ebcd05c0cb.jpg'

    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
