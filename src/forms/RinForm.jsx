import React from 'react';

import { Grid, TextField, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function RinForm({ dataValue, onChange }) {
  const handleChange = (event) => {
    const newData = event?.$d ? { date: event.$d } : { [event.target.name]: event.target.value };
    onChange((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <>
      <Typography variant="h6">
        Enter your information
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="name"
            label="Name"
            value={dataValue.name}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="companyName"
            label="Company Name"
            value={dataValue.companyName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="phoneNumber"
            label="Phone Number"
            value={dataValue.phoneNumber}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              name="date"
              label="Date"
              value={dataValue.date}
              onChange={handleChange}
              fullWidth
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="address"
            label="Address"
            value={dataValue.address}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
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
