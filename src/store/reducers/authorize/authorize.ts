import { SET_AUTHORIZE } from "../../actions";
import { initialUserStatus } from "./const";
import { AuthorizationAction } from "./types";

  
 export const authorize = (state = initialUserStatus, action: AuthorizationAction) => {
    switch (action.type) {
      case SET_AUTHORIZE: {
        return action.payload;
      }
      default: {
        return state;
      }
    }
  };