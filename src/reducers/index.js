export default (state, action)  => {
  switch (action.type){
    case "SET_TECHNOLOGY":
    console.log(action);
    return {
      ...state,
      tech:action.text
    }
   

    default:
      return state;
  }
  
};
