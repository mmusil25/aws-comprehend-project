// React imports
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AWS from 'aws-sdk';
require ('aws-sdk');

// Common Variables for AWS
var bucketName = "comprehend-project-1";
var bucketRegion = "us-east-2";
var IdentityPoolID = "us-east-2:aa3baaa3-c79c-4b4a-95d8-dfc9f7ddd81c";

//Configure AWS services

AWS.config.update({
	region: bucketRegion,
	credentials: new AWS.CognitoIdentityCredentials({
	IdentityPoolId: IdentityPoolID
	})
});

var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var s3 = new AWS.S3({
	apiVersion: "2006-03-01",
	params: { Bucket: bucketName }
});

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }

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

    console.log(formData);


    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  
  return (  
  <>
  <Paper elevation={5}>
      <Box
      sx={{
        display: 'flow',
        margin: 2,
        flexWrap: 'wrap'
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
      <Typography mt={2}></Typography>
      <BlueBar/>
      <Typography mt={2}></Typography>
      <Typography align='center'>
      <Button variant="contained" type="submit">Submit for sentiment analysis</Button>
      </Typography>
    </form>
    </div>
    <Typography mt={2}></Typography>
    <BlueBar/>
    <Typography mt={2}></Typography>
    <TextField fullWidth
          id="outlined-read-only-input"
          label="Sentiment Output"
          defaultValue="Happy"

          InputProps={{
            readOnly: true,
          }}
        />
  </Box>
  </Paper>
  
  </>
  );
}