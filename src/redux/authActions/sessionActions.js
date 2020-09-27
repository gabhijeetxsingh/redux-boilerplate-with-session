import { sessionService } from 'redux-react-session';

export const login = (user, history) => {
  
    return async () => {
      try{

            const { token } = {token : "iamsecrettoken"}
            await sessionService.saveSession({ token })

            await sessionService.saveUser({name : "abhi"})

            try {

              //history.push('/');

            }catch(err) {
              console.log(err)
            }

            return {isAuthorised : true, userInfo : userInfo.data};
      }
      catch(err) {
        console.log(err)
        return {isAuthorised : false};;
      }

  };
}

export const logout = (history) => {
  return () => {
    return loginApi.logout().then(() => {
      sessionService.deleteSession();
      sessionService.deleteUser();
      history.push('/');
    }).catch(err => {
      throw (err);
    });
  };
};
