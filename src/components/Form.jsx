import React, { useState } from 'react';

import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';

import SelectDocumentForm from '../forms/SelectDocumentForm';
import RinForm from '../forms/RinForm';

import apiClient from '../clients/api-client';

export default function Form() {
  const [activeStep, setActiveStep] = useState(0);
  const [documentType, setDocumentType] = useState('');
  const [data, setData] = useState({});

  const steps = ['Document selection', 'Information collection'];

  const generateDocument = () => {
    apiClient.post(
      `/${documentType}`,
      data,
      { responseType: 'arraybuffer' },
    ).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'output.docx');
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
    });
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleNext = () => {
    if (activeStep === 0 && documentType === '') {
      return;
    }

    if (activeStep === 1 && (Object.values(data).some((value) => value === '') || data.date === null)) {
      return;
    }

    if (activeStep === steps.length - 1) {
      generateDocument();
    }

    setActiveStep(activeStep + 1);
  };

  const getDataTemplate = (docType) => {
    switch (docType) {
      case 'rin':
        return {
          name: '',
          companyName: '',
          phoneNumber: '',
          date: null,
          address: '',
          city: '',
          postalCode: '',
        };
      default:
        throw new Error('Unknown document type');
    }
  };

  const handleDocumentTypeChange = (event) => {
    const newDocumentType = event.target.value;
    setDocumentType(newDocumentType);
    setData(getDataTemplate(newDocumentType));
  };

  const getFormContent = (docType) => {
    switch (docType) {
      case 'rin':
        return <RinForm dataValue={data} onChange={setData} />;
      default:
        throw new Error('Unknown document type');
    }
  };

  return (
    <>
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <Typography variant="h5">
            Thank you for using the Legal Document Generator.
          </Typography>
          <Typography variant="subtitle1">
            {'Your document should be downloading now. Click '}
            <a href="/" onClick={() => setActiveStep(0)}>here</a>
            {' to prepare another document.'}
          </Typography>
        </>
      ) : (
        <>
          {activeStep === 0 && (
            <SelectDocumentForm
              documentTypeValue={documentType}
              onDocumentTypeChange={handleDocumentTypeChange}
            />
          )}

          {activeStep === 1 && (
            getFormContent(documentType)
          )}

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                Back
              </Button>
            )}

            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 3, ml: 1 }}
            >
              {activeStep === steps.length - 1 ? 'Generate Document' : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </>
  );
}
