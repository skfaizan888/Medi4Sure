export const insurancemanReducer = (
  state = { perInfo: [], famInfo: [] },
  action
) => {
  if (action.type === "ADD_PERSONAL_INFO") {
    return {
      ...state,
      perInfo: [action.data],
    };
  }
  if (action.type === "ADD_FAMILY_INFO") {
    return {
      ...state,
      famInfo: [action.data],
    };
  }
  return state;
};
