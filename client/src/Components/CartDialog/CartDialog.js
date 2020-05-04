import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import { connect } from "react-redux";
import { showCartDlg } from "../../Redux/Actions";
import { withRouter } from "react-router-dom";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  return { open: state.showCartDialog, items: state.cartItems };
};

class ConnectedCartDialog extends Component {
  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={() => {
            this.props.dispatch(showCartDlg(false));
          }}
        >
          <Cart/>
          <Link to={`/order`} className="btn green"
              disabled={this.props.items.length === 0 }>
              Checkout
            </Link>
        </Dialog>
      </div>
    );
  }
}
const CartDialog = withRouter(connect(mapStateToProps)(ConnectedCartDialog));
export default CartDialog;
