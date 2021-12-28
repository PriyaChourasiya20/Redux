import {connect} from 'react-redux';
import * as Actions from './ActionType';
import CounterComponent from '../Component/CounterComponent';

const mapStateToProps = state => ({
  count: state.counterReducer.count,
});

const mapDispatchToProp = dispatch => ({
  increment: () => dispatch({type: Actions.COUNTER_INCREMENT}),
  decrement: () => dispatch({type: Actions.COUNTER_DECREMENT}),
});

export default connect(mapStateToProps, mapDispatchToProp)(CounterComponent);
