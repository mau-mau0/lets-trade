import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectNetwork() {
  const [network, setNetwork] = React.useState('');

  const handleChange = (event) => {
    setNetwork(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Network</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={network}
          label="Network"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ethereum</MenuItem>
          <MenuItem value={20}>Polygon</MenuItem>
          <MenuItem value={30}>Binance</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}