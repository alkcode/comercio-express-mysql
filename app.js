'use strict'
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
// const routes = require('./routes/productos');
const sequelize = require('./db/db');
const Producto = require('./models/productos');
const routerProducto = require('./routes/productos');
const routerProveedor = require('./routes/proveedores');
require('./models/asociaciones');
// const port = 3000
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/api', [routerProducto, routerProveedor]);
// app.use('/api', routerProveedor);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
  sequelize.sync({force: false}).then(()=>{
    console.log('Logueado a la base de datos');
  }).catch(err=>{
    console.log('Error', err);
  });
})