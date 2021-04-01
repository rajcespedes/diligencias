const   express = require('express'),
        Pool = require('pg').Client,
        app = express(),
        dotenv = require('dotenv');


dotenv.config();

app.listen('5000');

app.set('view engine','html');

const pool = new Pool(
    {
        host: process.env.HOST,
        user: 'postgres',
        database: 'diligencias',
        password: 'test123.',
        port: 5432        
    }  
);

pool.connect();

pool.query('SELECT * FROM acta', function(err,res) {
    // console.log(res);
    // res.rows.forEach( data => console.log(data.acta) );
    // pool.end();
    }
);


app.get( '/', async function(req,res){

    var result  = await pool.query('SELECT * FROM acta'); 

    console.log(result);MediaKeyMessageEvent

    res.json(result.rows);
    
 }
);