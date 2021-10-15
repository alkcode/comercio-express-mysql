const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db');

class Proveedores extends Model{}

Proveedores.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    proveedor:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName: 'proveedores'
});
module.exports = Proveedores;