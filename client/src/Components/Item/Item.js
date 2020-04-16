import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemInCart } from "../../Redux/Actions";
import { withRouter } from "react-router-dom";
import Price from '../Price/Price'

class ConnectedItem extends Component {
  render() {
    return(
      <div 
        className="card col s3"
        onClick={() => {
          this.props.history.push("/details/" + this.props.item.id);
        }}
      >
        <div className="card-image">
          <img 
            src={this.props.item.imageUrls[0]}
            style={{ height: 140,width:200 }}
            alt=""
            />
          <div
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={e => {
            e.stopPropagation();
            this.props.dispatch(
              addItemInCart({ ...this.props.item, quantity: 1 })
            );
          }}
          >
            <i className="material-icons">add</i>
            </div>
        </div>
        <div className="card-content">
        <div>
              {this.props.item.name}
            </div>
            <div>Price: <Price value={this.props.item.price}/></div>
        </div>
      </div>

    );
  }
}

export default withRouter(connect()(ConnectedItem));
