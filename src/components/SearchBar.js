import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4">
      <TextField
        label="Pesquisar"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white'
            },
            '&:hover fieldset': {
              borderColor: 'white'
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white'
            },
          },
          '& .MuiInputLabel-root': {
            color: 'white'
          },
          '& .MuiInputBase-input': {
            color: 'white'
          },
        }}
      />
    </div>
  );
};

export default SearchBar;
