import { ADD_PIN, DELETE_PIN, GET_NAME, UPDATE_NAME } from "../constants/types";

export const addPin = (pin: any) => {
  return {
    type: ADD_PIN,
    payload: pin,
  };
};

//DELETE PIN
export const deletePin = (id: number) => ({
  type: DELETE_PIN,
  payload: id,
});

//get pin
export const getName = (name: string) => ({
  type: GET_NAME,
  payload: name,
});

//UPDATE ID
export const updateName = (id: number) => ({
  type: UPDATE_NAME,
  payload: id,
});
