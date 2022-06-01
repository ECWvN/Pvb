// import React, {useRef, useState,} from 'react'
// import { Form, Button, Card, Alert } from 'react-bootstrap'
// import "./Register.css"
// import { useAuth } from '../../contexts/AuthContext' 


// export default function Register() {
//     const nameRef = useRef()
//     const emailRef = useRef()
//     const passwordRef = useRef()
//     const passwordConfirmRef = useRef()
//     const {signup, currentUser} =useAuth()
//     const [error, setError] = useState('')
//     const [loading, setLoading] = useState(false)

//  async function handleSubmit(e){
//     e.preventDefault()
//     if (passwordRef.current.value !== passwordConfirmRef.current.value){
//       return setError('Wachtworden komen niet overeen!')
//     }

// try{
//  setError('')
//  setLoading(true)
//  await signup(emailRef.current.value, passwordRef.current.value)
//  }catch{
//    setError('Registreren mislukt!')
//  }
//  setLoading(false)
// }
    
//   return (
//     <div className='RegisterForm'>
//       <Card>
//          <Card.Body>
//              <h2 className='ResgisterTitle'>Registreren</h2>
//              <div className="RegisterInfoMessage">* verplichte velden</div>
//              {currentUser && currentUser.email}
//              <div className='ErrorStyle'>{error}</div>
//              <Form onSubmit={handleSubmit}>
//                  <Form.Group id="naam" className='formStyle'>
//                      <Form.Label>Naam</Form.Label>
//                      <Form.Control className='InputStyle' type="text" ref={nameRef} required/>
//                  </Form.Group>
//                  <Form.Group id="email" className='formStyle'>
//                      <Form.Label >E-mailadres</Form.Label>
//                      <Form.Control className='InputStyle' type="email" ref={emailRef} required/>
//                  </Form.Group>
//                  <Form.Group id="wachtwoord" className='formStyle'>
//                      <Form.Label>Wachtwoord</Form.Label>
//                      <Form.Control className='InputStyle' type="password" ref={passwordRef} required/>
//                  </Form.Group>
//                  <Form.Group id="wachtwoord-bevestigen" className='formStyle'>
//                      <Form.Label>Wachtwoord bevestigen</Form.Label>
//                      <Form.Control className='InputStyle' type="password" ref={passwordConfirmRef} required/>
//                  </Form.Group>
//                   <Button disabled={loading} type="submit">Registreren</Button>
//              </Form>

//         </Card.Body>
//       </Card>
      
      

//     </div>
//   )
// }


