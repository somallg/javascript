import React, { Component } from 'react';

import SearchBar from './search_bar';
import ProductTable from './product_table';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      inStockOnly: false
    }
  }

  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput.bind(this)}/>
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}/>
      </div>
    );
  }
}

export default FilterableProductTable;
