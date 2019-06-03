const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'REMOVE':
      return state - 1;
    case 'REMOVETEN':
      return state - 10;
    case 'ADDTEN':
      return state + 10;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}

export default counterReducer;