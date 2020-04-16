import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCheckedOutItems } from "../../Redux/Actions";
import Price from '../Price/Price'

const mapStateToProps = state => {
  return {
    checkedOutItems: state.checkedOutItems
  };
};
class ConnectedOrder extends Component {
  render() {
    let totalPrice = this.props.checkedOutItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    return (
      <div >
        <div >
          Order summary
        </div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.checkedOutItems.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td><Price value={item.price}/></td>
                  <td>{item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div
          style={{
            color: "#504F5A",
            marginLeft: 5,
            marginTop: 50,
            fontSize: 22
          }}
        >
          Total price: <Price value={totalPrice}/>
        </div>
        <div
          className="btn"
          disabled={totalPrice === 0}
          onClick={() => {
            console.log("purchased");
          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          Purchase
        </div>
        <div
          className="btn"
          disabled={totalPrice === 0}
          onClick={() => {
            this.props.dispatch(setCheckedOutItems([]));
          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          Discard
        </div>
      </div>
    );
  }
}
const Order = withRouter(connect(mapStateToProps)(ConnectedOrder));

export default Order;
