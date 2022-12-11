const chalk = require('chalk')
const fs = require('fs')
const moment = require('moment-timezone')
const hour_now = moment().format('hh:mm:ss')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
let users = db.data.users[m.sender]
srl = '乂'
ctc = '❒'
text = '*Text*'
link = '*Links*'
query = '*Query*'
npo = '*Number*'
mv = '*Image/Video*'
im = '*Image*'
sd = '*Sound*'
vd ='*Video*'
emo = '*Emoji*'
exports.allmenu = (prefix, pushname, namaBot, ownerName) => {
return `${srl}  *Menu ${namaBot}* ${srl}

Name : ${db.data.users[m.sender].name}
Umur : ${db.data.users[m.sender].age}
Registered : ${db.data.users[m.sender].registered ? '✅' : '❎'}
Nomor : @${m.sender.split("@")[0]}
Waktu : ${dt} ${hour_now}
Pemilik : ${ownerName}

${srl} *OTHERS* ${srl}
${ctc} ${prefix}verifikasi
${ctc} ${prefix}ceksn
${ctc} ${prefix}gameslot
${ctc} ${prefix}sewabot
${ctc} ${prefix}readme
${ctc} ${prefix}snk
${ctc} ${prefix}owner
${ctc} ${prefix}liststore
${ctc} ${prefix}listchannel
${ctc} ${prefix}listonline
${ctc} ${prefix}litsprivate
${ctc} ${prefix}litsgroup
${ctc} ${prefix}listblock
${ctc} ${prefix}unreg ${text}
${ctc} ${prefix}afk ${text}
${ctc} ${prefix}simi ${text}
${ctc} ${prefix}tts ${text}
${ctc} ${prefix}nowa ${npo}

${srl} *Converter To Link* ${srl}
${ctc} ${prefix}tinyurl ${link}
${ctc} ${prefix}tourl ${im} / ${vd}

${srl} *QUOTES* ${srl}
${ctc} ${prefix}katabijak
${ctc} ${prefix}quotes
${ctc} ${prefix}pantun 

${srl} *GROUP SETTINGS* ${srl}
${ctc} ${prefix}antivionce
${ctc} ${prefix}antilink
${ctc} ${prefix}ephemeral
${ctc} ${prefix}welcomegroup
${ctc} ${prefix}delete
${ctc} ${prefix}leave
${ctc} ${prefix}linkgc
${ctc} ${prefix}revoke
${ctc} ${prefix}kick 
${ctc} ${prefix}add
${ctc} ${prefix}promote
${ctc} ${prefix}demote
${ctc} ${prefix}setsubject
${ctc} ${prefix}setdesc
${ctc} ${prefix}setppgrup
${ctc} ${prefix}tagall
${ctc} ${prefix}hidetag

${srl} *GAMES JADIAN* ${srl}
${ctc} ${prefix}tembakpasangan 
${ctc} ${prefix}terimapasangan
${ctc} ${prefix}cekpasangan
${ctc} ${prefix}putuspasangan
${ctc} ${prefix}tolakpasangan
${ctc} ${prefix}ikhlasinpasangan

${srl} *STALK* ${srl}
${ctc} ${prefix}igstalk ${query}
${ctc} ${prefix}githubstalk ${query}

${srl} *SEARCHING* ${srl}
${ctc} ${prefix}play ${query}
${ctc} ${prefix}joox ${query}
${ctc} ${prefix}ytsearch ${query}
${ctc} ${prefix}pinterest ${query}
${ctc} ${prefix}sfilesearch ${query}
${ctc} ${prefix}google ${query}

${srl} *VIDEO RANDOM* ${srl}
${ctc} ${prefix}asupan
${ctc} ${prefix}gorerandom

${srl} *DOWNLOADS* ${srl}
${ctc} ${prefix}igvideo ${link}
${ctc} ${prefix}igfoto ${link}
${ctc} ${prefix}ytmp3 ${link}
${ctc} ${prefix}ytmp4 ${link}
${ctc} ${prefix}cocofun ${link}
${ctc} ${prefix}likevideo ${link}
${ctc} ${prefix}gitclone ${link}
${ctc} ${prefix}tiktok ${link}
${ctc} ${prefix}tiktoknowm ${link}
${ctc} ${prefix}tiktokmusic ${link}
${ctc} ${prefix}soundcloud ${link}

${srl} *CONVERTER MEDIA* ${srl}
${ctc} ${prefix}sticker ${im}
${ctc} ${prefix}stickergif ${vd}
${ctc} ${prefix}removebg ${im}
${ctc} ${prefix}stickerwm ${text}
${ctc} ${prefix}emojimix2 ${emo}
${ctc} ${prefix}emojimix ${emo} | ${emo}
${ctc} ${prefix}whatmusic ${sd} | ${vd}

${srl} *TEXT MAKER* ${srl}
${ctc} ${prefix}candy ${text}
${ctc} ${prefix}christmas ${text}
${ctc} ${prefix}3dchristmas ${text}
${ctc} ${prefix}sparklechristmas ${text}
${ctc} ${prefix}deepsea ${text}
${ctc} ${prefix}scifi ${text}
${ctc} ${prefix}rainbow2 ${text}
${ctc} ${prefix}waterpipe ${text}
${ctc} ${prefix}spooky ${text}
${ctc} ${prefix}pencil ${text}
${ctc} ${prefix}circuit ${text}
${ctc} ${prefix}discovery ${text}
${ctc} ${prefix}metalic ${text}
${ctc} ${prefix}fiction ${text}
${ctc} ${prefix}demon ${text}
${ctc} ${prefix}transformer ${text}
${ctc} ${prefix}berry ${text}
${ctc} ${prefix}thunder ${text}
${ctc} ${prefix}3dstone2 ${text}
${ctc} ${prefix}neonlight ${text}
${ctc} ${prefix}glitch ${text}
${ctc} ${prefix}harrypotter ${text}
${ctc} ${prefix}brokenglass ${text}
${ctc} ${prefix}papercut ${text}
${ctc} ${prefix}watercolor ${text}
${ctc} ${prefix}multicolor ${text}
${ctc} ${prefix}neondevil ${text}
${ctc} ${prefix}underwater ${text}
${ctc} ${prefix}graffitibike ${text}
${ctc} ${prefix}snow ${text}
${ctc} ${prefix}cloud ${text}
${ctc} ${prefix}honey ${text}
${ctc} ${prefix}ice ${text}
${ctc} ${prefix}fruitjuice ${text}
${ctc} ${prefix}biscuit ${text}
${ctc} ${prefix}wood ${text}
${ctc} ${prefix}chocolate ${text}
${ctc} ${prefix}strawberry ${text}
${ctc} ${prefix}matrix ${text}
${ctc} ${prefix}blood ${text}
${ctc} ${prefix}dropwater ${text}
${ctc} ${prefix}toxic ${text}
${ctc} ${prefix}lava ${text}
${ctc} ${prefix}rock ${text}
${ctc} ${prefix}bloodglas ${text}
${ctc} ${prefix}halloween ${text}
${ctc} ${prefix}darkgold ${text}
${ctc} ${prefix}joker ${text}
${ctc} ${prefix}wicker ${text}
${ctc} ${prefix}firework ${text}
${ctc} ${prefix}skeleton ${text}
${ctc} ${prefix}blackpink ${text}
${ctc} ${prefix}sand ${text}
${ctc} ${prefix}glue ${text}
${ctc} ${prefix}1917 ${text}
${ctc} ${prefix}leaves ${text}
${ctc} ${prefix}demon ${text}`
}
exports.bahasa = (prefix) => {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh `
}
exports.sewa= (prefix) => {
return `*Berikut List Harga Sewa Bot*

_Sewa Bot Untuk dimasukin kedalam group dan digunakan di dalam group_

• *Paket 1 : Rp. 15.000*
   • Bot Join 1 Group ✅
   • Durasi 1 Bulan ✅
   • Bisa Set Text Welcome/Left ✅
   • Fast Response  & 24 Jam Online✅

• *Paket 2 : Rp. 30.000*
    • Bot Join 1 Group ✅
    • Durasi 2 Bulan + 15 Hari ✅
    • Bisa Set Text Welcome/Left ✅
    • Fast Response  & 24 Jam Online✅


• *Paket 3 : Rp. 65.000*
    • Bot Join 2 Group ✅
    • Durasi 2 Bulan + 15 Hari ✅
    • Bisa Set Text Welcome/Left ✅
    • Fast Response  & 24 Jam Online✅


- *Jika Ingin Menambah Sewa Group Hanya : Rp. 10.000*
- *Jika Ingin Menambah Durasi Hanya : Rp. 10.000*


*Kegunaan Sewa Bot :*
• *Bot Bisa Di Masukin Kedalam Group*
• *Bisa Menyambut Member Baru / Keluar*
• *Fast Response & Ada Error Langsung di perbaiki*


Minat? Chat Owner Bot Dengan Ketik ${prefix}owner.`
}
exports.channel= (prefix) => {
return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.snk= (prefix) => {
return ` ➠ Batas usia pengguna (user) minimal 15 - 35 tahun, lebih atau kurang dari itu akan langsung ter-banned saat melakukan verifikasi.

➠ Data pengguna (user), grup, dan chat akan terhapus otomatis apabila tidak terdeteksi aktifitas selama 7 hari (alasan: pembersihan database).

➠ Dilarang melakukan spam, beri jeda untuk setiap penggunaan command selama 3 detik.

➠ Dilarang melakukan panggilan suara maupun video (Telepon & Video Call), jika itu dilakukan maka akan ter-blokir.

➠ Dilarang toxic terhadap bot karena akan medapatkan sanksi berupa banned dan blokir.

➠ Dilarang mencari & membuat konten dewasa (+18), misalnya membuat stiker dari foto telanjang atau mencari ASMR desah.

➠ Jika ingin membuka blokir dan banned masing² dikenai biaya sebesar 5K.

➠ Pelaku spam akan di banned permanen berlaku untuk user gratis dan premium (+ no refund).

➠ Semua Syarat & Ketentuan dapat berubah sewaktu waktu tanpa pemberitahuan terlebih dahulu.`
}
exports.readme= (prefix) => {
return ` *「 STALK 」*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktokstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}igstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smulestalk @tobz2k19*

            *「 YT SEARCH 」*

*[video]* Diisi dengan Judul Video yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}video Erpan1140*
Jika ingin mendownload video harap ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[lagu]* Diisi dengan Judul Lagu yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}music Alan Walker Alone*
Jika ingin mendownload lagu harap ketik #getmusic [IdDownload] atau #getmusic [urutan]

*[IdDownload] atau [urutan]* Diisi dengan IdDownload yang valid tanpa tanda “[” dan “]”
Contoh : *Jika tidak reply pesan : ${prefix}getmusic Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getmusic 1*
Contoh : *Jika tidak reply pesan : ${prefix}getvideo Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getvideo 1*

            *「 DOWNLOADER 」*

*[linkStarmaker]* Diisi dengan link Starmaker yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp4 https://youtu.be/Bskehapzke8*

*[linkTiktok]* Diisi dengan link Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

*[linkSmule]* Diisi dengan link Smule yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smule https://www.smule.com/p/767512225_3062360163*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[linkTiktok]* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalTv Indosiar*

*[query]* Diisi dengan query/pencarian yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}googlesearch siapa itu elaina*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}cuaca tangerang*

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *${prefix}quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *${prefix}lirik aku bukan boneka*`
}
exports.slot=`📌55FIVE OFFICIAL💯

55five adalah game lotre terpercaya

🖌 Minimal isi ulang 20k untukk Penarikan 30k

🖌 Isi ulang dan penarikan bisa melalui Bank dan E-Wallet seperti DANA, OVO, GoPai dan lainya

🖇 Link daftar : https://55fivel.com/#/register?r_code=XoDaF476283

🖇 Link Grup : https://chat.whatsapp.com/HG2A8wTxbZG3OklmiQdgVB`
exports.listdm1= (prefix) => {
return`${srl} *Arena of Valor* ${srl}

AOV 7 Vouchers : 3.000
AOV 18 Vouchers : 6.000
AOV 40 Vouchers : 10.000
AOV 90 Vouchers : 22.000
AOV 230 Vouchers : 47.180
AOV 470 Vouchers : 99.380
AOV 950 Vouchers : 197.830
AOV 1430 Vouchers : 286.390
AOV 2390 Vouchers : 476.455
AOV 4800 Vouchers : 953.415`
}
exports.listdm2= (prefix) => {
return`${srl} *AU2 Mobile* ${srl}

AU2 72 Diamonds : 15.000
AU2 144 Diamonds : 29.500
AU2 360 Diamonds : 72.630
AU2 1536 Diamonds : 286.680
AU2 2376 Diamonds : 419.530
AU2 3936 Diamonds : 709.180
AU2 7776 Diamonds : 1.449.180`
}
exports.listdm3= (prefix) => {
return`${srl} *Boyaa Capsa Susun* ${srl}

Capsa Susun 45.5M Koin : 5.000
Capsa Susun 50M Koin : 6.000
Capsa Susun 97.5M Koin : 10.000
Capsa Susun 107.2M Koin : 11.765
Capsa Susun 200.2M Koin : 20.580
Capsa Susun 220.2M Koin : 22.520
Capsa Susun 338.9M Koin : 33.190
Capsa Susun 533M Koin : 49.680
Capsa Susun 586.3M Koin : 54.530
Capsa Susun 819M Koin : 73.930
Capsa Susun 1.12B Koin : 99.180
Capsa Susun 1.23B Koin : 108.880
Capsa Susun 2.29B Koin : 196.180
Capsa Susun 3.63B Koin : 295.180
Capsa Susun 3.99B Koin : 325.280
Capsa Susun 6.18B Koin : 489.180
Capsa Susun 13B Koin : 980.180`
}
exports.listdm4 = (prefix) => {
return`${srl} *Call of Duty* ${srl}

 53 CP : 10.000
 106 CP : 19.500
 264 CP : 48.000
 528 CP : 97.730
 1056 CP : 195.230
 1584 CP : 289.555
 2640 CP : 479.380
 5280 CP : 960.380
 10560 CP : 1.950.380`
}
exports.listdm5 = (prefix) => {
return`${srl} *Dragon Raja SEA* ${srl}

 76 Coupons : 15.830
 90 Coupons : 22.520
 337 Coupons : 82.205
 456 Coupons : 95.180
 820 Coupons : 158.180
 988 Coupons : 215.580
 1699 Coupons : 315.180
 2553 Coupons : 540.680
 3589 Coupons : 749.080
 Investment Fund : 215.180
 Investment Fund II : 215.180`
}
exports.listdm6 = (prefix) => {
return`${srl} *Membership Free Fire* ${srl}

Membership Mingguan
= 29.000
MM + 20
Diamond =
30.000
MM + 50
Diamond =
35.158
MM + 70
Diamond =
38.561
MM + 100
Diamond =
40.566
MM + 140
Diamond =
46.372
MM + 210
Diamond =
55.183
MM + 355
Diamond =
75.805
MM + 520
Diamond =
96.898
Membership Bulanan
= 84.150`
}
exports.listdm7 = (prefix) => {
return`${srl} *PUBG MOBILE* ${srl}

PUBG MOBILE 50 UC
 = 10.000
PUBG MOBILE 100 UC
 = 18.990
PUBG MOBILE 125 UC
= 23.490
PUBG MOBILE 150 UC
= 27.800
PUBG MOBILE 250 UC
= 46.400
PUBG MOBILE 500 UC
= 89.300
PUBG MOBILE 600 UC
= 105.460
PUBG MOBILE 700 UC
= 133.180
PUBG MOBILE 800 UC
= 149.180
PUBG MOBILE 1250 UC
= 248.755
PUBG MOBILE 1500 UC
= 269.505`
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyanBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})