import React from 'react'
import { useHistory } from 'react-router-dom'

function Login(props) {

 const history = useHistory();

 const onSubmit = (e) => {
  e.preventDefault();
  props.onLogin('Brenda');
  history.push('/')
 }

 return (
  <div>
   <h2>Login</h2>
   <form onSubmit={onSubmit}>
    <div>
     username:<input type="text" required />
    </div>
    <div>
     password:<input type='password' required />
    </div>
    <button type="submit">login</button>
   </form>
  </div>
 )
}

export default Login
