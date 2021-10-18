'use strict'
const Producto = require('../models/productos');
const { Op } = require("sequelize");
const Proveedores = require('../models/proveedores');


const controller = {
    
    prueba:(req, res) =>{
        return res.status(200).send({
            mesage: 'Soy el test de mi backend'
        });
    },
    consultarProductos:(req, res)=>{
        Producto.findAll(
            // {
            // include:{
            //     model:Proveedores,
            //     attributes:['proveedor']
            // }
        //}
        )
        .then(producto=>{
            if(producto==''){
                return res.status(200).send({
                    mesage: 'No hay productos registrados'
                });
            }
            res.json(producto);
        }).catch(err=>{
            return res.status(404).send({
                mesage: 'No hay productos registrados',
                err
            });
        });

    },
    
    consultarProductoId:(req, res)=>{
        let idProducto = req.params.id;
        Producto.findByPk(idProducto)
        .then(producto=>{
            return res.status(200).send({
                mesage: 'El producto encontrado:',
                producto
            });

        }).catch(err=>{
            return res.status(404).send({
                mesage: 'No se pudo encontrar al productor',
                err
            });
        });
    },
    
    consultarProductoNombre:(req, res)=>{
        let producto = req.body;
        Producto.findAll({
            where:{
                descripcion:{
                    [Op.like]: `${producto.descripcion}%`, 
                }
            }
        }).then(producto=>{
            if(producto==''){
                return res.status(200).send({
                    mesage: 'El producto no se encontro con la busqueda esperada'
                });
            }
            return res.status(200).send({
                mesage: 'El producto encontrado:',
                producto
            });
        }).catch(err=>{
            return res.status(404).send({
                mesage: 'No se pudo encontrar el producto',
                err
            });
        });
    },

    guardarProductos:(req, res)=>{
        let params = req.body;
        Producto.create({
            codigo:params.codigo,
            descripcion:params.descripcion,
            categoria: params.categoria,
            stock: params.stock,
            precioCompra: params.precioCompra,
            precioVenta: params.precioVenta,
            idProveedor: params.idProveedor
        }).then(producto=>{
            return res.status(200).send({
                mesage: 'Nuevo producto registrado',
                producto
            });

        }).catch(err=>{
            return res.status(404).send({
                mesage: 'No se pudo registrar el producto'
                
            });
        })
    },

    actualizarProducto:(req, res)=>{
        let idProducto = req.params.id;

        let params = req.body;

        console.log(req.params.id);

        Producto.update({
            codigo:params.codigo,
            descripcion:params.descripcion,
            categoria: params.categoria,
            stock: params.stock,
            precioCompra: params.precioCompra,
            precioVenta: params.precioVenta,
            idProveedor: params.idProveedor
        },{
            where:{
                id: req.params.id
            }

        }).then(producto=>{
            return res.status(200).send({
                mesage: 'Producto actualizado',
                producto
            });
        }).catch(err=>{
            return res.status(404).send({
                mesage: 'No se pudo actualizar el producto'
                
            });
        })
    },
    
    eliminarProducto: (req, res) =>{
        Producto.destroy({
            where:{
                id: req.params.id
            }
        }).then(result=>{
            return res.status(200).send({
                mesage: 'Producto eliminado'
            });
        }).catch(err=>{
            return res.status(404).send({
                mesage: 'No se pudo eliminar el producto'
                
            });
        })
    }
}


module.exports = controller;