import React from 'react';
import { connect } from 'react-redux';
import Users from './users/Users';
import './App.css';
import {
	selectUserData
} from './redux/users/users.selector';
import { addUserData } from './redux/users/users.actions';

function App(props) {

  const addUser = (evt) => {
    if(evt && evt.preventDefault) {
      evt.preventDefault();
    }
    const form = new FormData(evt.target);
    let postData = {};
    for(let pair of form.entries()) {
        postData[pair[0]] =  pair[1]; 
    }
    props.addUserData(postData)

    evt.target.reset();

  }
  

  return (
    <div className="App">
        <form onSubmit={addUser}>
            <input type="text" name="name" placeholder="name"/>
            <input type="text" name="email" placeholder="email@gmail.com"/>
            <button className="submit-btn">SAVE</button>
        </form>
        <Users users={props.users}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { session } = state;
  return {
    checked: session.checked,
    authenticated: session.authenticated,
    users : selectUserData(state.userData.users)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addUserData: user => dispatch(addUserData(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
