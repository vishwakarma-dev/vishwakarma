"use client"; 
import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import { loginUser } from '../../../utils/services/authservice';
import { IUserSignInInterface } from '../../../types/IUserInterface'; // Importing the interface
import { useRouter } from 'next/navigation'; // Importing useRouter

const Login: React.FC = () => {
  const [formData, setFormData] = useState<IUserSignInInterface>({
    email_id: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ emailId?: string; password?: string }>({});

  const router = useRouter(); // Initializing useRouter

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    // Reset previous errors
    setErrors({});
    
    // Basic validation
    let hasErrors = false;
    if (!formData.email_id) {
      setErrors((prev) => ({ ...prev, emailId: 'Email ID is required' }));
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email_id)) {
      setErrors((prev) => ({ ...prev, emailId: 'Invalid email format' }));
      hasErrors = true;
    }

    if (!formData.password) {
      setErrors((prev) => ({ ...prev, password: 'Password is required' }));
      hasErrors = true;
    }

    if (hasErrors) return;

    try {
      const response = await loginUser(formData);
      localStorage.setItem('token', response.token); // Store the token in local storage
      setMessage('Login successful!');
      router.push('/protected');
      // Redirect to protected page or home page (you can use router.push('/protected') for routing)
    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField
        label="Email ID"
        name="email_id"
        value={formData.email_id}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.emailId}
        helperText={errors.emailId}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.password}
        helperText={errors.password}
      />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
      {message && <Typography>{message}</Typography>}
    </Container>
  );
};

export default Login;
