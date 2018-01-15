import types from "../actions/types";

const DEFAULT_STATE = {
  list: [],
  single: null
};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.GET_SINGLE_ITEM:
      console.log("GET SINGLE ITEM: ", action);
      return { ...state, single: action.payload.data.todo };
    case types.GET_ITEMS:
      console.log("GET ITEMS: ", action);
      return { list: action.payload.data.todos };
    case types.ADD_ITEM:
      console.log("ADD ITEM: ", action);
      return state;
    case types.DELETE_ITEM:
      console.log("DELETE ITEM: ", action);
      return state;
    default:
      return state;
  }
}
