import { combineReducers } from 'redux';
import userDataReducer from './users/users.reducer';
import { sessionReducer } from 'redux-react-session';

const rootReducer = combineReducers({
	userData : userDataReducer,
	session: sessionReducer
});

export default rootReducer;
