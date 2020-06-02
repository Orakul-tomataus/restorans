import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartRow from "./CartRow";
import Price from '../Price/Price';

const mapStateToProps = state => {
  return { items: state.cartItems };
};

class ConnectedCartDialog extends Component {
  render() {
    let totalPrice = this.props.items.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    
    return (
      <div>
          <div
            style={{
              maxHeight: 400,
              padding: 10,
              overflow: "auto"
            }}
          >
            <table>
              <thead>
                <tr>
                  <th>Product </th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.props.items.map((item, index) => {
                  return <CartRow item={item} key={item._id} {...this.props} />;
                })}
              </tbody>
            </table>
          </div>

          <div style={{ display: "flex", padding: 20, alignItems: "center" }}>
            <div
              style={{
                flex: 1
              }}
            >
              Total Price: <Price value={totalPrice}/>
            </div>
          </div>
          {(this.props.items.length)?this.props.children:""}
      </div>
    );
  }
}
const Cart = withRouter(connect(mapStateToProps)(ConnectedCartDialog));
export default Cart;
