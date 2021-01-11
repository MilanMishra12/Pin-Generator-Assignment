import { ADD_PIN, DELETE_PIN, GET_PIN, UPDATE_ID } from "../constants/types";

export const addPin = (pin: any) => {
  return {
    type: ADD_PIN,
    payload: pin,
  };
};

//get pin

export const getPin = (id: number) => ({
  type: GET_PIN,
  payload: id,
});

//UPDATE ID
export const updateId = (pin: any) => ({
  type: UPDATE_ID,
  payload: pin,
});

//DELETE PIN
export const deletePin = (id: number) => ({
  type: DELETE_PIN,
  payload: id,
});
