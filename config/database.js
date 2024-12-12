let mysql = require('mysql')

let koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'uas_api_icha'
})

koneksi.connect(function(error){ //mnggil koneksi
    if(!!error){
        console.log(error)  //kalau koneksi erorr
    }else{
        console.log('koneksi berjaya!!')
    }
})

module.exports = koneksi;