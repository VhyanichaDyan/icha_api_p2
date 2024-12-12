const express = require('express')
const app = express()
const port = 3000

//mengimpor body parser
const bodyParser= require('body-parser')
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));  //buat nagsih tahu file html,css di folder public

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//mengimport route di disney
    const postRouter = require('./routes/disney')
    app.use('/api/disney', postRouter) //fngsi agar menggunakan router disney diexpress

    app.get('/',(req, res) => {  //buat definisikan rute http ke halaman utama
        const filePath = path.join(__dirname, 'public', 'index.html');
        console.log('Berhasil Yee: ${filePath}');
        res.sendFile(filePath, (err) => {  //ngirim fil index.html dr folder public
            if (err) {
                console.error('Error yah:', err);
                res.status(err.status).end();
            }
        });
    })

    // digunakan untuk memanggil port atau aplikasi berjalan di port/ akses halaman web
app.listen(port,() =>{
    console.log(`aplikasi berjalan di http://localhost:${port}`)
})



//cek website
// app.get('/', (req,res) =>{
//     res.send('hai jerman') //dimana res dipanggil untuk dijalankan di webnya  
// })

//insert,edit,delete