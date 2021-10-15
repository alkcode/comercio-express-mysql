const { Model, DataTypes } = require('sequelize');

const sequelize = require('../db/db');

class Producto extends Model{}
Producto.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    codigo:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false
    },
    categoria:{
        type:DataTypes.STRING,
        allowNull:false
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 0
    },
    precioCompra:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    precioVenta:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
    // idProveedor:{
    //     type:DataTypes.INTEGER,
    //     allowNull:false
    // }
  
},{
    sequelize,
    modelName:'producto'
});

module.exports = Producto;