// ChipsInput.js
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CloseIcon from '@material-ui/icons/Close';
import './App.css'; // Import the CSS file

// Sample data with contact names and dummy logos
const suggestions = [
  { name: 'John Doe', logo: 'https://via.placeholder.com/24' },
  { name: 'Jane Smith', logo: 'https://via.placeholder.com/24' },
  { name: 'Bob Johnson', logo: 'https://via.placeholder.com/24' },
  // Add more contact data as needed
];

const ChipsInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);

  const handleInputChange = (event, newValue) => {
    setInputValue(newValue);
  };

  const handleChipAdd = (chip) => {
    setChips([...chips, chip]);
    setInputValue('');
  };

  const handleChipRemove = (chip) => {
    setChips(chips.filter(item => item !== chip));
  };

  return (
    <div className="chips-input-container">
      <Autocomplete
        multiple
        id="chips-autocomplete"
        options={suggestions}
        getOptionLabel={(option) => option.name}
        value={chips}
        inputValue={inputValue}
        onChange={(event, newValue) => setChips(newValue)}
        onInputChange={handleInputChange}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              key={index}
              label={option.name}
              onDelete={() => handleChipRemove(option)}
              avatar={<img src={option.logo} alt={option.name} className="chip-avatar" />}
              color="primary"
              className="chip"
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} label="Type here" variant="outlined" fullWidth className="autocomplete-input" />
        )}
      />
    </div>
  );
};

export default ChipsInput;
