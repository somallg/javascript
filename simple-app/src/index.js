// import scss
import 'bootstrap-loader';
import '../style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import FilterableProductTable from './components/filterable_product_table';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <FilterableProductTable products={PRODUCTS} />
  </Provider>
  , document.querySelector('.container'));
