import React, { Component } from "react";
import Order from "./Order/Order";
import Axios from "../../axios";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import * as actions from "../../store/Actions/index";
import { connect } from "react-redux";
import Spinner from "../UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchedOrders();
  }
  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ));
    }
    return <div> {orders}</div>;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  };
};
const mapDispatchtoState = dispatch => {
  return {
    onFetchedOrders: () => dispatch(actions.fetchOrders())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoState
)(withErrorHandler(Orders, Axios));
