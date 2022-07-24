const { Deepgram } = require('@deepgram/sdk');
const fs = require('fs');

// The API key you created in step 1
const deepgramApiKey = '38109b1f5c182fa059d22dd620ecd84eb27c38cc';

// Replace with your file path and audio mimetype
const pathToFile = 'C:/Users/Vijay/Downloads/WhatsApp Audio 2022-07-19 at 2.36.45 PM.mp3';
const mimetype = 'audio/mp3';

// Initializes the Deepgram SDK
const deepgram = new Deepgram(deepgramApiKey);

console.log('Requesting transcript...')

deepgram.transcription.preRecorded(
  { buffer: fs.readFileSync(pathToFile), mimetype },
  { punctuate: true, language: 'en-US' },
)
.then((transcription) => {
  console.dir(transcription, {depth: null});
})
.catch((err) => {
  console.log(err);
});
