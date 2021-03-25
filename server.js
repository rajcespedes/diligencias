const   express = require('express'),
        Client = require('pg').Client,
        app = express();



app.listen('5000');

var client = new Client(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'diligencias',
        password: 'test123.',
        port: 5432        
    }  
);

client.connect();

client.query(`INSERT INTO precio (precio) VALUES (500)`, function(err,res) {
    console.log(res);
    client.end();
    }
);

app.get( '/', (req,res) => res.send('some route') );

