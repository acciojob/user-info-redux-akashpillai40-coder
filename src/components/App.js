
import React from "react";
import './../styles/App.css';
import { updateEmail, updateName } from "../store/userSlice";
import {useSelector, useDispatch} from 'react-redux'
const App = () => {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
       <h1>User Information</h1>
     <input 
     type="text"
     placeholder="Name"
     name='name'
     value={user.name}
     onChange={(e) => dispatch(updateName(e.target.value))}
     />

     <input 
     type="email"
     placeholder="Email"
     value={user.email}
     name='email-id'
     onChange={ (e) => dispatch(updateEmail(e.target.value))}
     />

   

     {/* Values from store */}
    
<div className="output">
  <p>Name - {user.name}</p>
  <p>Email - {user.email}</p>
</div>
    </div>
  )
}

export default App
