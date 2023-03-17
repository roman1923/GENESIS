const SET_VIDEO = "SET_VIDEO";

const initialState = {
    video: '',
  };
  
  export default function videoReducer(state = initialState, action) {
    switch (action.type) {
      case SET_VIDEO:
        return {
          ...state,
          video: action.payload
        };
        default:
          return state;
    }
  }
  
 export const setVideo = (videos) => ({ type: SET_VIDEO, payload: videos });