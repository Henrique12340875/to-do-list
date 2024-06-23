require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const app = express();

app.engine('handlebars',exphbs.engine({ defaultLayout:'main' }))
app.set('view engine','handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))

app.get('/',(req,res) => {
    res.render('olamundo.handlebars');
})

const port = process.env.PORT | 3000

console.log(port);

app.listen(port,() => {
    console.log('aplicação rodando em http://localhost:8187/ !')
})