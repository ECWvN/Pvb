// import { useContext, useState } from "react"
// import React from "react";
// import { createUserWithEmailAndPassword} from "firebase/auth";
// import {auth} from "../../firebase"
// import { initializeApp } from "firebase/app";
// import { useNavigate, Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// import "./Register.css";

// const Register = () => {
//   const [error, setError] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleregister = (e) =>{
//     e.preventDefault();

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
    
//   .catch((error) => {
//     setError(true);
//   });

//   return (
//     <div className="login">
//          <div className="loginTitle">Inloggen</div>
//      <div className="loginForm">
//      <form onSubmit={handleLogin}>
//      <label className="formLabel" for="email">E-mailadres </label>
//         <input type="email"  onChange={e=>setEmail(e.target.value)} />
//         <label className="formLabel" for="password">Wachtwoord </label>
//         <input type="password"  onChange={e=>setPassword(e.target.value)} />
//         <Link to= "#"><div className="forgotpassword">wachtwoord vergeten?</div></Link>
//         <button type="submit">login</button>
//         { error && <span>Niet gelukt!</span>}
//       </form>
//      </div>

   
//     </div>
//   )
// };
// }

// export default Register

