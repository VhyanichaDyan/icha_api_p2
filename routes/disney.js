const express = require('express')
const router = express.Router()

//untuk mengimpor db
const koneksi=require('../config/database')

//import express validator
const{body,validationResult} = require('express-validator')

//view
router.get('/',function(req,res){
    //isi data yaa
    koneksi.query('SELECT * FROM disney ORDER BY id desc',function(err,rows){
    if(err){
        return res.status(500).json({
            status:false,
            message: 'server gagal',
        })
    }else{
        return res.status(200).json({
            status:true,
            message: 'Yee data tampil',
            data:rows
        })
    }
    })
})

//insert
router.post('/store',[
    //validasi
    body('nama').notEmpty(),
    body('warna').notEmpty(),
    body('jenis_kelamin').notEmpty(),
    body('emosi').notEmpty(),
    body('deskripsi').notEmpty(),
    body('voice_aktor').notEmpty(),

], (req,res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors:errors.array()
        })
    }

//definisi form data
    let formData = {
        nama:req.body.nama,
        warna:req.body.warna,
        jenis_kelamin:req.body.jenis_kelamin,
        emosi:req.body.emosi,
        deskripsi:req.body.deskripsi,
        voice_aktor:req.body.voice_aktor,
    }


    //masukan data
    koneksi.query('INSERT INTO disney set ?', formData, function(err,rows){
        if(err){
            return res.status(500).json({
                status:false,
                message: 'server eh error',
            })
        }else{
            return res.status(201).json({
                status:true,
                message: 'berhasil memasukan  data',
                
            })
        }
    })
})


//untuk detail data
router.get('/:id', function(req,res){
    let id = req.params.id

    koneksi.query(`SELECT * FROM disney WHERE ID=${id}`,
    function(error,rows){
        if(error){
            return res.status(500).json({
                status:false,
                message: 'ups..server error',
            })
        }
        //ini untuk post id ada apa belum
        if(rows.legth <=0){
            return res.status(404).json({
                status:false,
                message: 'eee data ga ada lho',
            })
        }else{
            return res.status(200).json({
                status:true,
                message: 'data berhasil yee',
                data:rows[0]
                })
            }
        }
    )
})

//melakukan update atau edit dta
router.patch('/update/:id',[
    body('nama').notEmpty(),
    body('warna').notEmpty(),
    body('jenis_kelamin').notEmpty(),
    body('emosi').notEmpty(),
    body('deskripsi').notEmpty(),
    body('voice_aktor').notEmpty(),
],(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(442).json({
           errors:errors.array()
        })
    }
    let id = req.params.id //agar mengambil data id

    let formData={
        nama:req.body.nama,
        warna:req.body.warna,
        jenis_kelamin:req.body.jenis_kelamin,
        emosi:req.body.emosi,
        deskripsi:req.body.deskripsi,
        voice_aktor:req.body.voice_aktor,
    }


    // update query
    koneksi.query(`UPDATE disney set? WHERE id=${id}`, formData,
        function(errors,rows){
            if(errors){
                return res.status(500).json({
                    status:false,
                    message: 'server eror'
                })
            }else{
                return res.status(200).json({
                    status:true,
                    message: 'update data berhasil,hoyee'
                })
            }
        }
    )
})


//delete
router.delete('/delete/(:id)',
    function(req,res){
        let id = req.params.id

        koneksi.query(`DELETE FROM disney WHERE id = ${id}`,
            function(errors,rows){
                if(errors){
                    return res.status(500).json({
                        status:false,
                        message: 'internal server error'
                    })
                }else{
                    return res.status(200).json({
                        status:true,
                        message: 'data telah dihapus'
                    })
                }
            }
        )
    })

module.exports = router