import React, { Component } from "react";
import Item from "../Item/Item";
import queryString from "query-string";
import Api from "../../Api";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      totalItemsCount: null,
      items: []
    };
    this.updateQueryString = this.updateQueryString.bind(this);
  }
  async fetchData() {

    this.setState({ loading: true });
    
    let qsAsObject = queryString.parse(this.props.location.search);

    let results = await Api.searchItems(qsAsObject);

    this.setState({
      items: results.data,
      loading: false,
      totalItemsCount: results.totalLength
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  updateQueryString(newValues) {
    let currentQS = queryString.parse(this.props.location.search);
    let newQS = { ...currentQS, ...newValues };
    this.props.history.push("/?" + queryString.stringify(newQS));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    let currentQS = queryString.parse(this.props.location.search);
    let oldQS = queryString.parse(prevProps.location.search);
    
    let areSameObjects = (a, b) => {
      if (Object.keys(a).length !== Object.keys(b).length) return false;
      for (let key in a) {
              if (a[key] !== b[key]) return false;
      }
      return true;
    }
    
    if (!areSameObjects(currentQS,oldQS )) {
      this.fetchData();
    }
  }

  render() {

    if (this.state.loading) {
      return (
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      );
    }

    return (
        <div className="row">
          {this.state.items.map(item => {
            return <Item key={item._id} item={item} />;
          })}
        </div>
    );
  }
}

export default ProductList;
