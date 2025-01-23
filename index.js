import express from 'express';
import twilio from 'twilio';
import axios from 'axios';
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv'; // Step 2: Import dotenv

const { twiml: { VoiceResponse } } = twilio;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

async function query(data) {
    const response = await axios.post(
        "https://digital-coach-1.app.flowiseai.com/api/v1/prediction/de24425a-423f-4669-96f9-b7443e7d35ee",
        data,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
    return response.data;
}

// Assuming the rest of your code remains the same

app.post('/voice', async (request, response) => {
  console.log('req');
  console.log(request.body);
  const twiml = new VoiceResponse();
  
  console.log('userSpeech', request.body.SpeechResult);
  if (request.body.SpeechResult) {
    console.log('speechFound');
    try {
      const aiResponse = await query({ question: request.body.SpeechResult });
      console.log('airesponse', aiResponse);
      twiml.say(aiResponse.text);
    } catch (error) {
      console.error('Error querying AI Agent:', error);
      twiml.say('Sorry absher, there was an error processing your request.');
    }
  } else {
    console.log('i am called');
    const gather = twiml.gather({
      input: 'speech',
      timeout: 5,
      speechTimeout: 'auto',
      action: '/voice',
  
    });
    gather.say('Hello my name is absher, How may I help you?');
    twiml.redirect('/voice');
  }

  response.type('text/xml');
  response.send(twiml.toString());
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

