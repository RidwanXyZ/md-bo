const fs = require('fs')


// APIKEY's
global.APIs = {
      	zeks: 'https://zeks.me',
      	anto: 'https://hardianto.xyz',
        amel : 'https://melcanz.com',
}


// Apikey Website Api
global.APIKeys = {
      	'https://zeks.me': 'BETA',  //REGISTRASI FOR KEY
        'https://hardianto.xyz': 'hardianto',
        'https://melcanz.com' : 'BETA',  //REGISTRASI FOR KEY
}


// Nomor Owner
global.ownerNumber = ["6289514791129@s.whatsapp.net"]
global.owner = ["6289514791129"]


// Nama Bot
global.botName = 'リドワン先生'


// EXIF
global.packname = 'Akitagawa'
global.author = 'Ridwan sensi'


// OTHERS
global.Prefix = 'Multi'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sessionName = 'Dash'
global.Mode = 'Public'
global.mess = {
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    query: 'Command harus disertai Query..',
    link: 'Command harus disertai Link/Url',
    wait: 'Loading...',
    done: 'Berhasil..',
    wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)',
    rules : `Isi Sendiri!!`
}


// Path Img/Media
global.pathImg = fs.readFileSync('./media/Dash.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')
