'use strict'
const Proveedor = require('../models/proveedores');
const { Op } = require("sequelize");


const controller={
    pru:(req,res)=>{
        return res.status(200).send({
            mesage: 'Soy el test de mi pru'
        });
    },

    registrarProveedor: (req, res)=>{
        let params = req.body;
        Proveedor.create({
            proveedor:params.proveedor,
            productoId: params.productoId
        }).then(proveedor=>{
            return res.status(200).send({
                mesage: 'Proveedor registrado',
                proveedor
            });
        }).catch(err=>{
            return res.status(404).send({
                mesage: 'Error al Proveedor registrado'
            });
        });
    },

    consultarProveedores: (req, res)=>{
        Proveedor.findAll()
        .then(proveedores=>{
            if(proveedores==''){
                return res.status(200).send({
                    mesage: 'No hay proveedores registrados aun'
                });
            }
            return res.status(200).send({
                proveedores
            });
        }).catch(err=>{
            return res.status(404).send({
                mesage: 'Error al consultar a los proveedores',
                err
            });
        })
    },

    consultarProveedorNombre:(req, res)=>{
        let idProveedor = req.body;
        Proveedor.findAll({
            where:{
                proveedor:{
                    [Op.like]: `${idProveedor.proveedor}%`, 
                }
            }
        }).then(proveedor=>{
            if(proveedor==''){
                return res.status(200).send({
                    mesage: 'El proveedor no se encontro con la busqueda esperada'
                });
            }
            return res.status(200).send({
                mesage: 'El proveedor encontrado:',
                proveedor
            });
        }).catch(err=>{
            return res.status(404).send({
                mesage: 'No se pudo encontrar al proveedor',
                err
            });
        });
    },

    consultarProveedorId:(req, res)=>{
        let idProveedor = req.params.id;
        Proveedor.findByPk(idProveedor)
        .then(proveedor=>{
            return res.status(200).send({
                mesage: 'El proveedor encontrado:',
                proveedor
            });

        }).catch(err=>{
            return res.status(404).send({
                mesage: 'No se pudo encontrar al proveedor',
                err
            });
        });
    },

    actualizarProveedor:(req, res)=>{
        let idProveedor = req.params.id;
        let params= req.body;
        Proveedor.update({
            proveedor: params.proveedor
        },{
            where:{
                id: idProveedor
            }
        }).then(proveedor=>{
            return res.status(200).send({
                mesage: 'Producto actualizado',
                proveedor
            });
        }).catch(err=>{
            return res.status(404).send({
                mesage: 'No se pudo actualizar el proveedor',
                err
                
            });
        });
    },

    eliminarProveedor:(req, res)=>{
        Proveedor.destroy({
            where:{
                id:req.params.id
            }
        }).then(proveedor=>{
            return res.status(200).send({
                mesage: 'Producto eliminado',
                proveedor
            });
        }).catch(err=>{
            return res.status(404).send({
                mesage: 'No se pudo eliminar el proveedor'
                
            });
        })
    }
}

module.exports = controller;