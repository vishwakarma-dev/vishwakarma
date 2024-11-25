'use client';

import React, { useEffect, useState } from 'react';
import { Typography, Container } from '@mui/material';

const ProtectedPage: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setMessage('Access denied. Please log in.');
        return;
      }
      else{
        setMessage("User Sign In Successful") 
      }

      // try {
      //   const response = await axiosInstance.get('/api/protected', {
      //     headers: { Authorization: `Bearer ${token}` },
      //   });
      //   setMessage(response.data);
      // } catch (error) {
      //   setMessage('Failed to fetch protected data.');
      // }
    };

    fetchProtectedData();
  }, []);

  return (
    <Container>
      <Typography variant="h4">Protected Page</Typography>
      <Typography>{message}</Typography>
    </Container>
  );
};

export default ProtectedPage;
