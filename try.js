// var Nuance = require("nuance");
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var fs = require('fs');
// var nuance = new Nuance("NMDPTRIAL_pourab_karchaudhuri_gmail_com20170810000801", "5d749a68aac71fda640a22a5fbeffb4df9d50f9eba0cff67415aadec96de6ef353095cfdd07bd83485fada80e9d5cde2abdd8165e980cc2bda791770588563ab");

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));


// fs.readFile('./response.json', 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// });






app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '/', 'index.html'));
});
app.get('/passdata', function(request, response){
  response.send('success');

});
app.post('/', function(request, response){
  //nuanceTTS(text);
  response.send('success');
});
app.listen(7000);
// function nuanceTTS(text){
//   nuance.sendTTSRequest({
//       "text": text, //The text you would like to convert to speech.
//       "output": "./voice/testFile.wav", //The output file.
//       "outputFormat": "wav", //The codec you would like to use.
//       "language": "en_US", //The language code (please refer to Nuance's documentation for more info).
//       "voice": "Tom", //The voice you would like to use (please refer to Nuance's documentation for more info).
//       "identifier": "WelcomeIntent", //The user identifier (please refer to Nuance's documentation for more info).
//       "success": function(){ //The success callback function.
//           console.log("The file was saved.");
//       },
//       "error": function(response){ //The error callback function - returns the response from Nuance that you can debug.
//           console.log("An error was occurred");
//           console.log(response);
//       }
//   });
// }

// nuance.sendDictationRequest({
//     "identifier": "WelcomeIntent", //The user identifier (please refer to Nuance's documentation for more info).
//     "language": "en-US", //The language code (please refer to Nuance's documentation for more info).
//     "path": "audio.amr", //The path to the file you would like to send to Nuance.
//     "additionalHeaders": {}, //If you'd like to supply more headers or replace the default headers, supply them here.
//     "success": function(resp){ //The success callback function.
//         console.log(resp);
//     },
//     "error": function(resp){ //The error callback function - returns the response from Nuance that you can debug.
//         console.log("An error was occurred.");
//         console.log(resp);
//     }
// });
