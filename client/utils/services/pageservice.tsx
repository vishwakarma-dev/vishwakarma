// utils/api.ts
import axiosInstance from '../axiosInstance';

// Define the types for your API responses if necessary
interface SavePageResponse {
  message: string;
  slug: string;
}

interface Section {
  type: string;
  content: string;
}

// API functions
export const savePage = async (title: string, sections: Section[]): Promise<SavePageResponse> => {
  const response = await axiosInstance.post('/api/save-page', { title, sections });
  return response.data;
};

// Add more API functions as needed
