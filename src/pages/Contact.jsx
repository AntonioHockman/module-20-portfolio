import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { validateEmail } from '../utils/helpers';
import { useState } from 'react';

function Contact() {
  const [formState,setFormState] = useState({name:'',email:'',message:''})
  const [userMessage,setUserMessage] = useState('')
  const handleChange = (e) => {setFormState({...formState,[e.target.name]:e.target.value})}
  const handleValidation = (e) => {
    if (e.target.name === 'email'){
      if (!validateEmail(e.target.value)) {
        setUserMessage('invalid email')
      } else {
        setUserMessage('')
      }
    }else {
      if (!e.target.value.length) {
        setUserMessage ('required field') 
      } else {
        setUserMessage('')
      }
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault() 
    setUserMessage ('email sent') 
    setFormState({name:'',email:'',message:''})
  }
  return (
    <Form onSubmit={handleSubmit} >
      <h2>Contact me! </h2>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="your name" name="name" value ={formState.name} onBlur={handleValidation} onChange ={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name="email" value ={formState.email} onBlur={handleValidation} onChange ={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" value ={formState.message} onBlur={handleValidation} onChange ={handleChange}/>
      </Form.Group>
      {userMessage&&(
        <p>{userMessage}</p>
      )}
      <Button variant="primary" type="submit" disabled={!formState.email||!formState.name||!formState.message}>
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
