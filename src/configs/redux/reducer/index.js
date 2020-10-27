const intialState = {
  user: " Uwais Nashiruddin Albani",
  todos: [],
};

const reducer = (state = intialState, action) => {
  if (action.type === "CHANGE_USER") {
    return {
      ...state,
      user: action.value,
    };
  }
  if (action.type === "SET_TODOS") {
    return {
      ...state,
      todos: action.value,
    };
  }
  return state;
};

export default reducer;
