import React from 'react';

const ProductRow = ({ name, price, stocked }) => {
  // destructuring props directly inside the parameters
  // the same as: const {name, price, stocked} = props;

  // give red color in the inline styles if product is out-of-stock  
  const style = !stocked ? { color: "red"} : null

  return (
    <tr style={style}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;