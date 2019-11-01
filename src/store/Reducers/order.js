import * as actionTypes from "../Actions/actionTypes";
import { updateObject } from "../Utility/utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false });
};

const purchaseBurgerStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const puchaseSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderID });

  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  });
};

const purchaseFailed = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchedOrdersStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchedOrdersSuccess = (state, action) => {
  return updateObject(state, { orders: action.orders, loading: false });
};

const fetchOrdersFail = (state, action) => {
  return updateObject(state, { loading: false });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASED_INIT:
      return purchaseInit(state, action);
    case actionTypes.PURCHASED_BURGER_START:
      return purchaseBurgerStart(state, action);
    case actionTypes.PURCHASED_SUCCESS:
      return puchaseSuccess(state, action);
    case actionTypes.PURCHASED_FAIL:
      return purchaseFailed(state, action);
    case actionTypes.FETCHED_ORDERS_START:
      return fetchedOrdersStart(state, action);
    case actionTypes.FETCHED_ORDERS_SUCCESS:
      return fetchedOrdersSuccess(state, action);
    case actionTypes.FETCHED_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    default:
      return state;
  }
};

export default reducer;
