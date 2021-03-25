const   express = require('express'),
        Pool = require('pg'),
        app = express();



app.listen('5000');

const pool = new Pool(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'diligencias',
        password: 'test123.',
        port: 5432        
    }  
);

pool.connect();

pool.query('SELECT NOW()', function(err,res) {
    console.log(res);
    pool.end();
    }
);

app.get( '/', (req,res) => res.send('some route') );

