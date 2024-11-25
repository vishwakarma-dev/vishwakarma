"use client"; 
import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import { registerUser } from '../../../utils/services/authservice';
import { IUserSignUpInterface } from '../../../types/IUserInterface'; // Importing the interface

const Register: React.FC = () => {
  const [formData, setFormData] = useState<IUserSignUpInterface>({
    first_name: '',
    last_name: '',
    email_id: '',
    mobile_number: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    try {
      await registerUser(formData);
      setMessage('User registered successfully!');
    } catch (error) {
      console.log(error)
      setMessage('Registration failed.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Register</Typography>
      <TextField
        label="First Name"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email ID"
        name="email_id"
        value={formData.email_id}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Mobile Number"
        name="mobile_number"
        value={formData.mobile_number}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleRegister}>Register</Button>
      {message && <Typography>{message}</Typography>}
    </Container>
  );
};

export default Register;
