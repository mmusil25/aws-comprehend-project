import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function BlueBar() {
  return (
    <Box
      sx={{
        height: 30,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? 'rgba(0, 0, 255, 0.1)'
            : 'rgb(132 132 255 / 25%)',
      }}
    />
  );
}

export default function UserSubmission() {

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  
  return (  
  <>
      <Stack
      component="form"
      sx={{
        width: '100ch',
      }}
      spacing={3}
      noValidate
      justifyContent={"center"}
      autoComplete="off"
    >
    <Typography mt={2}></Typography>

    <h1>
      Amazon Comprehend Project
    </h1>

    <p>
      Enter your text to be analayzed in the field below then hit submit. 
      Wait a few seconds and the sentiment will be returned.
    </p>

    {/* accept user input */}
    <div>
    <form method="post" onSubmit={handleSubmit}>

      <TextField fullWidth id="outlined-basic" label="Your input" variant="outlined" />
      <BlueBar/>
      <Typography align='center'>
      <Button variant="contained">Submit for sentiment analysis</Button>
      </Typography>
    </form>
    </div>
    <BlueBar/>
    <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Happy"
          InputProps={{
            readOnly: true,
          }}
        />
  </Stack>
  </>
  );
}