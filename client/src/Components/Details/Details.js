import React, { Component } from "react";
import { addItemInCart } from "../../Redux/Actions";
import Api from "../../Api";
import { connect } from "react-redux";
import Price from '../Price/Price'
import './style.css'
import Loading from "../../Loading";
class ConnectedDetails extends Component {
  constructor(props) {
    super(props);

    this.isCompMounted = false;

    this.state = {
      relatedItems: [],
      quantity: 1,
      item: null,
      itemLoading: false
    };
  }

  async fetchProductAndRelatedItems(productId) {
    this.setState({ itemLoading: true });

    let item = await Api.getItemByID(productId);
    let relatedItems = await Api.searchItems({
      category: item.category,
    });
    
    if (this.isCompMounted) {
      this.setState({
        item,
        quantity: 1,
        relatedItems: relatedItems.data.filter(x => x._id !== item._id),
        itemLoading: false,
      });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchProductAndRelatedItems(this.props.match.params.id);
    }
  }

  componentDidMount() {
    this.isCompMounted = true;
    this.fetchProductAndRelatedItems(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.isCompMounted = false;
  }

  render() {
    if (this.state.itemLoading) {
      return <Loading/>
    }

    if (!this.state.item) {
      return null;
    }

    return (
      <div className="connectedDetails">
        <div className="name">
          {this.state.item.name}
        </div>
        <div className="product">
          <img src={this.state.item.imageUrls[0]} alt="" width={250} height={250}/>
          <div className="property">
            <div className="price">
              Price: <Price value={this.state.item.price}/>
            </div>
            {this.state.item.popular && (
              <div className="popular">
                (Popular product)
              </div>
            )}
            <input 
              type="number" 
              value={this.state.quantity}
              label="Quantity"
              inputprops={{ min: 1, max: 10, step: 1 }}
              onChange={e => {
                this.setState({ quantity: parseInt(e.target.value) });
              }}
            />
            <div 
              className='btn'
              style={{ width: 170}}
              onClick={() => {
                this.props.dispatch(
                  addItemInCart({
                    ...this.state.item,
                    quantity: this.state.quantity
                  })
                );
              }}
            >
              Add to Cart <i className="material-icons">add_shopping_cart</i>
            </div>
          </div>
        </div>

        {/* Product description */}
        <div className="description">
          <h1>Product Description</h1>
          <text>
            {this.state.item.description ? this.state.item.description : "Not available"}
          </text>
        </div>
      </div >
    );
  }
}

let Details = connect()(ConnectedDetails);
export default Details;
