const { belongsTo } = require('./productos');
const Producto = require('./productos');
const Proveedor = require('./proveedores');

//Asociaciones de Productos y proveedores
Producto.hasOne(Proveedor);
Proveedor.belongsTo(Producto);