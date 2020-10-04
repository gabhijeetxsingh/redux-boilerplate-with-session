import { sessionService } from 'redux-react-session';

const LoginApi = (data) => {
    const email = "abhijeet@gmail.com";
    const password = "test";

    if(data.email === email && data.password === password) {
      return {status : true ,token : "amsecrettoken", data, message : "Successfully loggedIn"}
    }
    else {
      
      return {status : false , message : "Check Id and password again"}
    }
}


export const login = (data, history) => {
  
    return async () => {
      try{

            let result = LoginApi(data);

            if(result.status) {

              await sessionService.saveSession({ token : result.token })
              
              await sessionService.saveUser(result.data)
              
              try {
                
                history.push('/redux');
                
              }catch(err) {
                console.log(err)
              }
              
              return {isAuthorised : true, status : result.status, message: result.message};
            }
            else {
              
              return {isAuthorised : false, status : result.status, message: result.message};
            }
      }
      catch(err) {
        console.log(err)
        return {isAuthorised : false};;
      }

  };
}

const logoutApi = () => {
  return {message : "User has been logged out"}
}

export const logout = (history) => {
  return () => {
    return logoutApi().then((msg) => {
      sessionService.deleteSession();
      sessionService.deleteUser();
      history.push('/');
    }).catch(err => {
      throw (err);
    });
  };
};
