import React from 'react';

import {
  Grid, MenuItem, Select, TextField, Typography,
} from '@mui/material';

export default function AddressForm({ dataValue, onChange }) {
  function handleChange(event) {
    const { name, value } = event.target;
    onChange((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Enter your information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            value={dataValue.name}
            onChange={(e) => handleChange(e)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="companyName"
            name="companyName"
            label="Company Name"
            value={dataValue.companyName}
            onChange={(e) => handleChange(e)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            value={dataValue.address}
            onChange={(e) => handleChange(e)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            value={dataValue.city}
            onChange={(e) => handleChange(e)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            id="province"
            name="province"
            label="Province"
            value={dataValue.province}
            onChange={(e) => handleChange(e)}
            fullWidth
            variant="standard"
          >
            <MenuItem value="AB">Alberta</MenuItem>
            <MenuItem value="BC">British Columbia</MenuItem>
            <MenuItem value="MB">Manitoba</MenuItem>
            <MenuItem value="NB">New Brunswick</MenuItem>
            <MenuItem value="NL">Newfoundland and Labrador</MenuItem>
            <MenuItem value="NS">Nova Scotia</MenuItem>
            <MenuItem value="ON">Ontario</MenuItem>
            <MenuItem value="PE">Prince Edward Island</MenuItem>
            <MenuItem value="QC">Quebec</MenuItem>
            <MenuItem value="SK">Saskatchewan</MenuItem>
            <MenuItem value="NT">Northwest Territories</MenuItem>
            <MenuItem value="NU">Nunavut</MenuItem>
            <MenuItem value="YT">Yukon</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="postalCode"
            name="postalCode"
            label="Postal Code"
            value={dataValue.postalCode}
            onChange={(e) => handleChange(e)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            value={dataValue.phoneNumber}
            onChange={(e) => handleChange(e)}
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </>
  );
}
