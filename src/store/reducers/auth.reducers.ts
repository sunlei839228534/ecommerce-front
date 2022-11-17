import { AuthUnionType, RESET_SIGNUP, SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../actions/auth.actions";

export interface AuthState {
  signup: {
    loaded: boolean,
    success: boolean,
    message: string
  }
}

const initalState: AuthState = {
  signup: {
    loaded: false,
    success: false,
    message: ''
  }
}

export default function authReducer(state = initalState, action: AuthUnionType) {
  switch (action.type) {
    case SIGNUP: {
      return {
        ...state,
        signup: {
          loaded: false,
          success: false,
        }
      }
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        signup: {
          loaded: true,
          success: true
        }
      }
    }
    case SIGNUP_FAIL: {
      return {
        ...state,
        signup: {
          loaded: true,
          succes: false,
          message: action.message
        }
      }
    }
    case RESET_SIGNUP: {
      return {
        ...state,
        signup: {
          loaded: false,
          success: false,
          message: ''
        }
      }
    }
    default: {
      return state
    }
  }
}