import React from 'react';

export default (props) => {
  const onInputChange = (e) => {
    props.onUserInput(
      e.target.value,
      props.inStockOnly
    );
  };

  const onCheckboxChange = () => {
    props.onUserInput(props.filterText, !props.inStockOnly);
  };

  return (
    <form className="form-group">
      <input
        type="text"
        placeholder="Search..."
        className="form-control"
        value={props.filterText}
        onChange={onInputChange}/>
      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={onCheckboxChange}/>
        {' '}
        Only show products in stock
      </p>
    </form>
  );
}
