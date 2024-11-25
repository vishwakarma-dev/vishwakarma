'use client'; 
import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { savePage } from '../../utils/services/pageservice'; // Import the savePage function

interface Section {
  type: 'text';
  content: string;
}

const PageBuilder: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [title, setTitle] = useState<string>('');

  const addSection = () => {
    setSections([...sections, { type: 'text', content: '' }]);
  };

  const handleContentChange = (index: number, value: string) => {
    const updatedSections = [...sections];
    updatedSections[index].content = value;
    setSections(updatedSections);
  };

  const handleSavePage = async () => {
    try {
      const result = await savePage(title, sections);
      console.log(result.message);
    } catch (error) {
      console.error('Error saving page:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Page Builder</Typography>
      <TextField 
        label="Page Title" 
        fullWidth 
        margin="normal" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
      />
      {sections.map((section, index) => (
        <TextField
          key={index}
          label={`Section ${index + 1}`}
          fullWidth
          margin="normal"
          value={section.content}
          onChange={(e) => handleContentChange(index, e.target.value)}
        />
      ))}
      <Button variant="contained" color="primary" onClick={addSection}>
        Add Section
      </Button>
      <Button variant="contained" color="secondary" onClick={handleSavePage} style={{ marginLeft: '10px' }}>
        Save Page
      </Button>
    </Container>
  );
};

export default PageBuilder;
