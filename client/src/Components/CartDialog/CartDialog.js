import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import { connect } from "react-redux";
import { showCartDlg } from "../../Redux/Actions";
import { withRouter } from "react-router-dom";
import Cart from "../Cart/Cart";

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
        </Dialog>
      </div>
    );
  }
}
const CartDialog = withRouter(connect(mapStateToProps)(ConnectedCartDialog));
export default CartDialog;
