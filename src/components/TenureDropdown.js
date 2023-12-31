import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TenureDropdown = ({ data, setData }) => {
  const handleChange = (event) => {
    setData({ ...data, tenure: event.target.value });
  };
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>Tenure</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={data.tenure}
        label='Tenure'
        onChange={handleChange}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TenureDropdown;
