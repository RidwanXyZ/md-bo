let { fetchJson } = require('../lib/myfunc')
require('../message/config')

let covid = async( textImg ) => {
fetchJson(api('anto','/api/info/covid',{},'apikey')).then(async data =>{
for(let i of data){
let copit =`*πΎππππΏ πππππππΌππππ*

*Indonesia*
  Β» Positif : ${i.indo.positif_indo}
  Β» Meninggal : ${i.indo.meninggal_indo}
  Β» Sembuh : ${i.indo.sembuh_indo}
  Β» Last Update : ${i.indo.update_indo}

*Global*
  Β» Total Negara : ${i.global.negara}
  Β» Positif : ${i.global.positif}
  Β» Meninggal : ${i.global.meninggal}
  Β» Last Update : ${i.global.update}
`.trim()
return textImg(copit)
}
})
}

module.exports = covid
