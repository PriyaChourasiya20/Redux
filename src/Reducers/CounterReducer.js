import * as Actions from '../Actions/ActionType';

const initialState = {
  count: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.COUNTER_INCREMENT:
      return {
        count: state.count + 1,
      };

    case Actions.COUNTER_DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default CounterReducer;
