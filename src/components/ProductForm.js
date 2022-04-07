import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarOModificarProducto } from '../store/store';

const ProductForm = () => {
  const categorias = [
    { codigo: 1, nombre: 'Categoria 1' },
    { codigo: 2, nombre: 'Categoria 2' },
    { codigo: 3, nombre: 'Categoria 3' },
    { codigo: 4, nombre: 'Categoria 4' },
  ];

  const producto = useSelector((state) => state.producto);
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    codigo: producto.codigo || 0,
    nombre: producto.nombre || '',
    cantidad: producto.cantidad || '',
    precio: producto.precio || '',
    categoria: producto.categoria || 1,
  });

  const onChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues((v) => ({
      ...v,
      [name]: value,
    }));
  };

  useEffect(() => {
    setValues({
      codigo: producto.codigo || 0,
      nombre: producto.nombre || '',
      cantidad: producto.cantidad || '',
      precio: producto.precio || '',
      categoria: producto.categoria || 1,
    });
  }, [producto]);

  const onSubmit = (event) => {
    event.preventDefault();
    const payload = {
      ...values,
      cantidad: Number(values.cantidad),
      precio: Number(values.precio)
    };
    dispatch(agregarOModificarProducto(payload));
  };

  return (
    <form action='index.html' onSubmit={onSubmit}>
      <div className='mb-3'>
        <label htmlFor='nombre' className='form-label'>
          Nombre
        </label>
        <input
          type='text'
          className='form-control'
          name='nombre'
          id='nombre'
          value={values.nombre}
          onChange={onChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='cantidad' className='form-label'>
          Cantidad
        </label>
        <input
          type='number'
          className='form-control'
          name='cantidad'
          id='cantidad'
          value={values.cantidad}
          onChange={onChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='precio' className='form-label'>
          Precio
        </label>
        <div className='input-group'>
          <span className='input-group-text'>$</span>
          <input
            type='number'
            className='form-control'
            name='precio'
            id='precio'
            value={values.precio}
            onChange={onChange}
          />
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='categoria' className='form-label'>
          Categoria
        </label>
        <select
          name='categoria'
          className='form-control'
          id='categoria'
          value={values.categoria}
          onChange={onChange}
        >
          {categorias?.map(({ codigo, nombre }, index) => (
            <option key={`category-item-${index}`} value={codigo}>
              {nombre}
            </option>
          ))}
        </select>
      </div>
      <div className='mb-3'>
        <button type='submit' className='btn btn-primary'>
          Guardar
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
