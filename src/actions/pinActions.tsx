import { ADD_PIN, DELETE_PIN } from "../constants/types";

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
