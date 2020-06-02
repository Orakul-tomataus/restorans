import React from "react";
import {
  showCartDlg,
  deleteCartItem,
  updateCartItemQnt
} from "../../Redux/Actions";
import { Link } from "react-router-dom";
import Price from '../Price/Price'

const CartRow = props => {
  let { item } = props;
  return (
    <tr>
      <td>
        <Link to={`/details/${item._id}`}>
          <div
            onClick={() => {
              props.dispatch(showCartDlg(false));
            }}
          >
            {item.name}
          </div>
        </Link>
      </td>
      <td><Price value={item.price}/></td>
      <td>
      <input 
      type="number" 
      value={item.quantity}
      onChange={e => {
            let quantity = parseInt(e.target.value, 10);
            if (quantity < 0) return;
            props.dispatch(
              updateCartItemQnt({
                _id: item._id,
                quantity
              })
            );
          }}/>
      </td>
      <td>
        <div 
          className="btn red"
          onClick={() => {
            props.dispatch(deleteCartItem(item._id));
          }}
        >
          Delete
        </div>
      </td>
    </tr>
  );
};

export default CartRow;
