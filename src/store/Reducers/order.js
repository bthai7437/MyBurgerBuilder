import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  orders: [],
  loading: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASED_SUCCESS:
      const newOrder = { ...action };
      //TODO:
      return {
        ...state,
        loading: false,
        orders: state.orders.concat()
      };
    case actionTypes.PURCHASED_FAIL:
      return {};
    default:
      return state;
  }
};

export default reducer;
