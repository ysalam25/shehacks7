const cohere = require('cohere-ai');
const express = require('express');
const app = express();

app.use(express.static('static'));

cohere.init('p8tXQEyIxLQmpux3DDZTz0tzcpmb7ENU4ZLC8SRG');
(async () => { 
    const response = await cohere.classify({ 
      model: 'large', 
      inputs: ["Any decent trader spends 90% of their efforts exploring how they could be wrong. That should apply to everyone’s decision making.", "Congratulations to all of this years @OliverAwards winners!"], 
      examples: [{"text": "Elon Musk says Twitter Blue subscribers should be able to pay with dogecoin", "label": "Business news"}, {"text": "Probability of a US recession in the next 12 months, via WSJ", "label": "Business news"}, {"text": "European futures slide", "label": "Business news"}, {"text": "NASDAQ rises 2% to ATH", "label": "Business news"}, {"text": "FTX Founder is one of the world\'s richest crypto billionaires, with a fortune valued at $20 billion.", "label": "Business news"}, {"text": "Sweet Potato Macaroni Cheese is #RecipeOfTheDay, and I’m very happy about it!", "label": "Cooking"}, {"text": "3-Ingredient Slow Cooker recipes", "label": "Cooking"}, {"text": "This is by far the BEST biscuit recipe I’ve ever tried", "label": "Cooking"}, {"text": "Baking my first loaf of banana bread...", "label": "Cooking"}, {"text": "From the queen of Italian cooking, this is one of the most iconic tomato sauce recipes ever", "label": "Cooking"}, {"text": "I’ve actually read this book and it was extremely insightful. A quick read as well and available as a free audiobook through many libraries.", "label": "Arts & Culture"}, {"text": "Today’s Daily Cartoon", "label": "Arts & Culture"}, {"text": "Get a glimpse of the stage adaptation of Hayao Miyazaki’s 2001 Oscar-winning animated feature Spirited Away", "label": "Arts & Culture"}, {"text": "The #Banksy Exhibit in Cambridge, MA is absolutely terrific.", "label": "Arts & Culture"}, {"text": "“A Whisper in Time” large abstract paining 48’ x 48’", "label": "Arts & Culture"}] 
    }); 
    console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`); 
    // console.log(response.body);
  })(); 

  server = app.listen(80);