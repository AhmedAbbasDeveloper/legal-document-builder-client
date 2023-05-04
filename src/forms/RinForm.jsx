import React from 'react';

import { Grid, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function AddressForm({ dataValue, onChange }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const setDate = (date) => {
    onChange((prevData) => ({
      ...prevData,
      date: date.$d,
    }));
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Enter your information
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="name"
            name="name"
            label="Name"
            value={dataValue.name}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="companyName"
            name="companyName"
            label="Company Name"
            value={dataValue.companyName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            value={dataValue.phoneNumber}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DatePicker
            id="date"
            name="date"
            label="Date"
            value={dataValue.date}
            onChange={setDate}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Address"
            value={dataValue.address}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            label="City"
            value={dataValue.city}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="postalCode"
            name="postalCode"
            label="Postal Code"
            value={dataValue.postalCode}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}
