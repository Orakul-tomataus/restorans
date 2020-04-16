import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  showCartDlg,
  logout
} from "../../Redux/Actions";
import { categories } from "../../Data";

const mapStateToProps = state => {
  return {
    nrOfItemsInCard: state.cartItems.length,
    isAuthenticated: state.isAuthenticated
  };
};

const categoryOptions = categories.map(x => {
  return (
    <option key={x.name} value={x.name}>{x.name}</option>
  );
});

class ConnectedHeader extends Component {
  state = {
    searchTerm: "",
    categoryFilterValue: categories[0].name
  };

  render() {
    return (
        <nav>
          <div className="left">
            <select 
              className="browser-default"
              value={this.state.categoryFilterValue}
              onChange={e => {
                this.setState({ categoryFilterValue: e.target.value });
              }} 
              onClick={() => {
                this.props.history.push(
                  "/?category=" +
                  this.state.categoryFilterValue +
                  "&term=" +
                  this.state.searchTerm
                );
              }}
            >
              {categoryOptions}
            </select>
              
          </div>
          <div className="right"
          style={{marginRight:10}}>
            <div className='row'>
              <div className='col '>
                    {this.props.isAuthenticated ? (
                      <div className='row'>
                        <div className='col'>
                          <i className="material-icons">face</i>
                        </div>
                        <div className='col'>
                          <div className='btn red'
                          >
                            Log out
                            </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className='btn'
                        style={{ marginRight: 20 }}
                        onClick={() => {
                          this.props.history.push("/login");
                        }}
                      >
                        Log in
                      </div>
                      )}
              </div>
              <div className='col '>
              <div
              className="btn"
                onClick={() => {
                  this.props.dispatch(showCartDlg(true));
                }}
              >
                  <div className="row">
                    <div className="col s6">
                      <i className="material-icons">shopping_cart</i>
                    </div>
                    <div className="col s6">
                      <span className="white-text" style={{fontSize:25}}>{this.props.nrOfItemsInCard}</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </nav>
    );
  }
}

const Header = withRouter(connect(mapStateToProps)(ConnectedHeader));
export default Header;
