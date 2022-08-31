/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0000',
}

// Other
global.owner = ['6289501303263']
global.premium = ['6289501303263','6285725860917','62895342991259','6282327316783']
global.packname = 'Hisoka Morrow'
global.author = 'mininproject.dev'
global.sessionName = 'hisoka'
global.prefa = ['!','.','/']
global.sp = '.'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Saya tidak bisa melakukan itu, karena aku bukan admin',
    owner: 'prefix > ini khusus owner bang',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Your Limit Exceed',
}
global.limitawal = {
    premium: "Infinity",
    free: "Infinity"
}
global.thumb = fs.readFileSync('./lib/thumb.png')
global.visoka = { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZT4NETLvQjO6SsjhZkPwPiLVGEFhaORgqA&usqp=CAU' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
