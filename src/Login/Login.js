import React, {useState} from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/authActions/sessionActions';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

function Login(props) {

  const [message, setMessage] = useState("")

  const LogMeIn = async (evt) => {
    if(evt && evt.preventDefault) {
      evt.preventDefault();
    }
    
    const form = new FormData(evt.target);
    
    let postData = {};
    
    for(let pair of form.entries()) {
        postData[pair[0]] =  pair[1]; 
    }
 
    let response = await props.login(postData, props.history)

    setMessage(response.message)
  }
  

  return (
    <div className="App">
        Login Page
        <form onSubmit={LogMeIn}>
            <input type="text" name="email" placeholder="email"/>
            <input type="text" name="password" placeholder="**********"/>
            <button className="submit-btn">Login</button>
        </form>
        {message}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { session } = state;
  return {
    checked: session.checked,
    authenticated: session.authenticated,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    login: (data, history) => dispatch(login(data, history)),
  };
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Login);
