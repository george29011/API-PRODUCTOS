const express = require('express');

const app = express();

app.use(express.json());

// Puerto del servidor
const PORT = 3000;

// Lista inicial de productos
let productos = [
  {
    id: 1,
    nombre: 'Computador',
    precio: 2500000,
  },
  {
    id: 2,
    nombre: 'Teclado',
    precio: 80000,
  },
  {
    id: 3,
    nombre: 'Mouse',
    precio: 45000,
  },
];

// Primer endpoint: consultar todos los productos
app.get('/productos', (req, res) => {
  res.status(200).json(productos);
});

// Segundo endpoint: consultar un producto por su ID
app.get('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return res.status(404).json({
      mensaje: 'Producto no encontrado',
    });
  }

  res.status(200).json(producto);
});
// Tercer endpoint: crear un producto
app.post('/productos', (req, res) => {
  const { nombre, precio } = req.body;

  if (
    !nombre ||
    precio === undefined ||
    typeof precio !== 'number' ||
    precio <= 0
  ) {
    return res.status(400).json({
      mensaje: 'Nombre y precio válido son obligatorios',
    });
  }

  const nuevoProducto = {
    id: productos.length > 0 ? Math.max(...productos.map((p) => p.id)) + 1 : 1,
    nombre,
    precio,
  };

  productos.push(nuevoProducto);

  res.status(201).json(nuevoProducto);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
