import { ADD_PIN, DELETE_PIN, GET_PIN, UPDATE_ID } from "../constants/types";

interface initialState {
  pins: Array<IPin>;
}

const defaultState: initialState = {
  pins: [],
};

export interface IPin {
  pin: string;
  id: number;
}

export const pinReducer = (state: initialState = defaultState, action: any) => {
  switch (action.type) {
    case ADD_PIN:
      return {
        ...state,
        pins: [action.payload, ...state.pins],
      };

    case GET_PIN:
      let arr: any = state.pins.filter((pin) => pin.id == action.payload);
      arr = arr.values(); //it will return object
      for (let val of arr) {
        // every value will come into this
        arr = val; //storing it into arr
      }
      return {
        ...state,
        pin: arr, //we will save all in pin
      };

    case UPDATE_ID:
      return {
        ...state,
        pins: state.pins.map((pin) =>
          pin.id == action.payload.id ? action.payload : pin
        ),
      };

    case DELETE_PIN:
      return {
        ...state,
        pins: state.pins.filter((pin) => pin.id != action.payload),
      };

    default:
      return state;
  }
};
