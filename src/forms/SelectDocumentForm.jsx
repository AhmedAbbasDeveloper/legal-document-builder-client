import React from 'react';

import {
  Grid, MenuItem, Select, Typography,
} from '@mui/material';

export default function SelectDocumentForm({ documentTypeValue, onDocumentTypeChange }) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Select a document
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Select
            id="documentType"
            name="documentType"
            label="Document Type"
            value={documentTypeValue}
            onChange={onDocumentTypeChange}
            fullWidth
          >
            <MenuItem value="rin">RIN</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </>
  );
}
