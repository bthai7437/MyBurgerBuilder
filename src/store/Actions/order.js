import * as actionTypes from "./actionTypes";
import Axios from "../../axios";
export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASED_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASED_FAIL,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASED_BURGER_START
  };
};

export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    Axios.post("/orders.json?auth=" + token, orderData)
      .then(response => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(err => {
        dispatch(purchaseBurgerFail(err));
      });
  };
};

export const fetchOrderSuccess = orders => {
  return {
    type: actionTypes.FETCHED_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrderFail = err => {
  return {
    type: actionTypes.FETCHED_ORDERS_FAIL,
    err: err
  };
};

export const fetchOrderStart = () => {
  return {
    type: actionTypes.FETCHED_ORDERS_START
  };
};

export const fetchOrders = token => {
  return dispatch => {
    Axios.get("/orders.json?auth=" + token)
      .then(res => {
        const fetchedData = [];
        for (let key in res.data) {
          fetchedData.push({
            ...res.data[key],
            id: key
          });
        }
        console.log(fetchedData);
        dispatch(fetchOrderSuccess(fetchedData));
      })
      .catch(err => {
        dispatch(fetchOrderFail(err));
      });
  };
};
export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASED_INIT
  };
};
