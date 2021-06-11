const initialState = {
    sidebarShow: "responsive",
  };
  
  //const middleware = [thunk]
  
export const changeStateReducer = (state = initialState, { type, ...rest }) => {
    switch (type) {
      case "set":
        return { ...state, ...rest };
      default:
        return state;
    }
  };


