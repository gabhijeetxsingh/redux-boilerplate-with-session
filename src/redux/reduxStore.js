import { 
	createStore, 
	applyMiddleware 
} from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import ReduxThunk from 'redux-thunk';
import { sessionService } from 'redux-react-session';
const env = process.env.NODE_ENV || "development";

let middleware = [];

if(env === "development") {
	middleware = [logger, ReduxThunk]
}
else {
	middleware = [ReduxThunk]
}

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);


const validateSession = (session) => {
	// check if your session is still valid
	console.log(session)
	return true;
}
const options = { refreshOnCheckAuth: true, redirectPath: '/', driver: 'COOKIES', validateSession };

sessionService.initSessionService(store, options)
.then(() => {
	if(env === "development") {
		console.log('Redux React Session is ready and a session was refreshed from your storage')
	}
})
.catch(() => {
	if(env === "development") {
		console.log('Redux React Session is ready and there is no session in your storage')
	}
});

sessionService.initSessionService(store);

export default store;
  