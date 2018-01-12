import types from "../actions/types";

const DEFAULT_STATE = {
  list: [
    {
      title: "todo list everyday",
      details: "building it with scottdemy"
    },
    {
      title: "eat",
      details: "chairs"
    },
    {
      title: "seven days til you die",
      details: "yup"
    }
  ]
};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
      case types.ADD_ITEM:
      return {list: [action.payload, ...state.list]};
    default:
      return state;
  }
}
