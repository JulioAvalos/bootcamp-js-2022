import { applyMiddleware, createStore } from 'redux';
// import { ui } from './ui';
import * as $store from './store';

const savedState = sessionStorage.getItem('state');
const deserialized = savedState && JSON.parse(savedState);
const preloadedState = deserialized || {
  producto: {},
  productos: [],
};

const middlewares = applyMiddleware(
  $store.loggerMiddleware,
  $store.agregarOModificarProductoMiddleware,
  $store.generadorCodigoProductoBuilder(0),
  $store.storageMiddleware
);
const store = createStore($store.reducer, preloadedState, middlewares);

export default store;

// store.subscribe(dispatchOnChange(store, (state) => {
//   ui.renderForm(state.producto);
//   ui.renderTable(state.productos);
// }));

// ui.onFormSubmit = (producto) => store.dispatch($store.agregarOModificarProducto(producto));
// ui.onEliminarClick = (codigo) => store.dispatch($store.productoEliminado(codigo));
// ui.onEditarClick = (codigo) => store.dispatch($store.productoSeleccionado(codigo));

// function dispatchOnChange(store, dispatch) {
//   let latestState;
//   return function () {
//     let currentState = store.getState();
//     if (currentState != latestState) {
//       latestState = currentState;
//       dispatch(currentState);
//     }
//   }
// }
