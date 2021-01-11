import { ADD_PIN, DELETE_PIN } from "../constants/types";

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

    case DELETE_PIN:
      return {
        ...state,
        pins: state.pins.filter((pin) => pin.id !== action.payload),
      };

    default:
      return state;
  }
};
