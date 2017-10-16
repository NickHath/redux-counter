const initialState = {
  currentValue: 0,
  futureValues: [],
  previousValues: []
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UNDO = 'UNDO';
const REDO = 'REDO';

export default function counter(state=initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return Object.assign({}, state, { currentValue: state.currentValue + action.amount} );
    case DECREMENT:
      return Object.assign({}, state, { currentValue: state.currentValue - action.amount} ); 
    case UNDO:
      let lastVal = state.previousValues.pop();
      return Object.assign({}, state, { currentValue: lastVal });
    case REDO:
      return ;   
    default: 
      return state;
  }
}

export function increment(amount) {
  return {
    type: INCREMENT,
    amount: amount
  }
}

export function decrement(amount) {
  return {
    type: DECREMENT,
    amount: amount
  }
}

export function undo() {
  return {
    type: UNDO
  }
}

export function redo() {
  return {
    type: REDO
  }
}



// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = true;