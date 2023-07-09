import React from 'react';

import { MenuItem, Select, Typography } from '@mui/material';

export default function SelectDocumentForm({ documentTypeValue, onDocumentTypeChange }) {
  return (
    <>
      <Typography variant="h6">
        Select a document type
      </Typography>

      <Select
        name="documentType"
        label="Document Type"
        value={documentTypeValue}
        onChange={onDocumentTypeChange}
        fullWidth
      >
        <MenuItem value="rin">RIN</MenuItem>
      </Select>
    </>
  );
}
