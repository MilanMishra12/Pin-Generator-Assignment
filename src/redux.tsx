 import { createStore } from 'redux';
 import {Action} from 'redux'

interface initialState {
  addPin: Array<IPin>
}

const defaultState : initialState = {
  addPin:[]
  };

export interface IPin {
  pin : string;
}

export interface PinAction extends Action {
  type:any;
  payLoad : any
  
}

//Action functions
export const addPins = (pin:number) => {
  return {
    type: 'ADD_PIN',

    payLoad: pin
  }
}

export function deletePins  (pinId:number) {
  return {
    type: 'DEL_PIN',
    payLoad: pinId
  }
}



//Reducer functions
export function pinReducer (state:initialState = defaultState , action:PinAction ) : initialState  {
  
      switch (action.type) {
                            case 'ADD_PIN': return {
                                        addPin : [...state.addPin, action.payLoad]
                                    }
                            case 'DEL_PIN': return {
                                        addPin: state.addPin.filter((pin : any, index:any) => index !== action.payLoad)
                                    }

                            default: return state
                }
           
           
}




export const store = createStore(pinReducer);

