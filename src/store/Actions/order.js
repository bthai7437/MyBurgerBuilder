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

export const purchaseBurgerStart = orderData => {
  return dispatch => {
    Axios.post("/orders.json", orderData)
      .then(response => {
        dispatch(purchaseBurgerSuccess(response.data, orderData));
      })
      .catch(err => {
        dispatch(purchaseBurgerFail(err));
      });
  };
};
