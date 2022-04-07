import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productoEliminado, productoSeleccionado } from '../store/store';

const ProductItem = ({ producto, acciones }) => {


  return (
    <tr>
      <td>{producto.codigo}</td>
      <td>{producto.nombre}</td>
      <td>{producto.cantidad}</td>
      <td>{producto.precio}</td>
      <td>{producto.total}</td>
      <td>
        <div className='btn-group'>
          <a
            title='editar'
            href='#'
            className='btn btn-sm btn-outline-secondary'
            onClick={() => acciones.seleccionar(producto.codigo)}
          >
            <i className='bi bi-pencil-square'></i>
          </a>
          <a
            title='eliminar'
            href='#'
            className='btn btn-sm btn-outline-danger'
            onClick={() => acciones.eliminar(producto.codigo)}
          >
            <i className='bi bi-trash'></i>
          </a>
        </div>
      </td>
    </tr>
  );
};

const ProductList = () => {

  const productos = useSelector(state => state.productos);
  const dispatch = useDispatch();
  
  // [
  //   {
  //     codigo: 1,
  //     nombre: 'Producto A',
  //     cantidad: 10,
  //     precio: 100,
  //     total: 1000,
  //   },
  //   {
  //     codigo: 2,
  //     nombre: 'Producto A',
  //     cantidad: 10,
  //     precio: 100,
  //     total: 1000,
  //   },
  // ];

  const seleccionar = (codigo) => {
    dispatch(productoSeleccionado(codigo));
  };

  const eliminar = (codigo) => {
    dispatch(productoEliminado(codigo));
  };

  const acciones = {
    seleccionar,
    eliminar,
  };

  const cantidadTotal = sum(productos, (x) => x.cantidad);
  const precioTotal = sum(productos, (x) => x.precio);
  const granTotal = sum(productos, (x) => x.total);

  return (
    <table className='table'>
      <thead>
        <tr>
          <td>Codigo</td>
          <td>Nombre</td>
          <td>Cantidad</td>
          <td>Precio</td>
          <td>Total</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {productos?.map((item, index) => (
          <ProductItem
            producto={item}
            key={`product-item-${index}`}
            acciones={acciones}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan='2'>Totales: </td>
          <td id='cantidad-total'>{cantidadTotal}</td>
          <td id='precio-total'>{precioTotal}</td>
          <td id='gran-total'>{granTotal}</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

function sum(elementos, selector) {
  return elementos.map(selector).reduce((a, b) => a + b, 0);
}

export default ProductList;
