import React from 'react';

import ProductCategoryRow from './product_category_row';
import ProductRow from './product_row';

export default (props) => {
  const rows = [];
  var lastCategory = null;
  props.products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1 || (!product.stocked && props.inStockOnly)) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category} />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table className="table table-hover">
      <thead className="thead">
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
