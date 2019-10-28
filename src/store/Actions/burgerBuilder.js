import * as actionTypes from "./actionTypes";
import Axios from "../../axios";

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchingIngredientsFailed = () => {
  return {
    type: actionTypes.FETCHED_INGREDIENTS_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    Axios.get("/Ingredients.json")
      .then(res => {
        dispatch(setIngredients(res.data));
      })
      .catch(err => {
        dispatch(fetchingIngredientsFailed);
      });
  };
};
