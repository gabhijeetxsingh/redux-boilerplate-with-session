import { userDataActionTypes } from './users.types';

export const addUserData =  (data) => {
	console.log(data)
	return {
		type: userDataActionTypes.ADD_USER_DATA,
		payload: data,
	};
};