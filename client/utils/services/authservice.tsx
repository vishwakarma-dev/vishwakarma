// utils/api.ts
import axiosInstance from '../axiosInstance';
import { IUserSignInInterface, IUserSignUpInterface } from '@/types/IUserInterface';

export const registerUser = async (user : IUserSignUpInterface) => {
  const response = await axiosInstance.post('api/auth/register', user);
  return response.data;
};

export const loginUser = async (user : IUserSignInInterface) => {
  const response = await axiosInstance.post('api/auth/login', user);
  return response.data;
};
