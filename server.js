const express = require('express')
const path    = require('path')
const bp      = require('body-parser')
const app     = express()
const tw      = require('./server/twilio')
const nm      = require('./server/nexmo')
const port    = 3000

require('dotenv').config()

app.use(express.static(path.join(__dirname, 'public')));
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.get('/', (req, res) => res.sendFile(__dirname +'/public/example.html'));

app.post('/sendText', async (req, res) => {
    if (req.body.carrier ==='Twilio'){
        try{       
            let send = await tw.sendMessage(req.body.phoneNumber);
            res.json(send)
        } catch (err){
            res.json(err)
        }
    } else if (req.body.carrier ==='Nexmo'){
        console.log(req.body)
        try{       
            let send = await nm.sendMessage(req.body.phoneNumber);
            res.json(send)
        } catch (err){
            res.json(err)
        }
    }
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))