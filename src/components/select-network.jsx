import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

export default function SelectNetwork() {
  const [network, setNetwork] = React.useState('');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleChange = (event) => {
    setNetwork(event.target.value);
  };

  return (
    <Box
      display="flex"
      backgroundColor={colors.primary[400]}
      borderRadius="3px"
      sx={{ m: 1, minWidth: 120 }}
    >
      <FormControl sx={{ minWidth: "inherit" }}>
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
    </Box>
  );
}