const bodyParser = require('body-parser')
const cors = require('cors'); 
const express = require('express');
const app = express();
app.use(cors());

const path = require('path');
const multer = require('multer');
const fs = require('fs');

const nodemailer = require("nodemailer");
const DIR = './uploads';
 
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
 
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 

var getFields = multer();



app.post('/sendmail',getFields.none(), function (req, res) {
  let data = req.body;
  console.log(data);
  async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.optimusfm.co",
      port:  465,
      TLS: false, // true for 465, false for other ports
      auth: {
        user: 'email@optimusfm.co', // generated ethereal user
        pass: 'holdco1234'// generated ethereal password
      }
    });



  // send mail with defined transport object
     transporter.sendMail({
        from: '"Optimus Website Contact" <email@optimusfm.co>', // sender address
        to: "info@optimusfm.co", // list of receivers
        subject: `Message Sent by ${data.name}`, // Subject line
        // text: "Hello world?", // plain text body
        html: `
                <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                <style type="text/css">
                  
                                          .row{
                                                 display: flex;
                                                  flex-direction: row;
                                                  width: 100%;
                                                  height: 50px;
                                                  justify-content: center !important; 
                                          }
                  table{
                    width: 100%;
                                                  margin-top: 30px;
                                                  margin-bottom: 30px;
                  }
                                          td{
                                                  width: 50%;
                                                  display: flex;
                                                  flex-direction: row;
                                          }
                                         .row img{
                                                  width: 40%;
                                                  margin:auto;
                                          }
                  tr{
                                                  display: flex;
                                                  flex-direction: row;
                                                  width: 100%;
                                                  justify-content: center; 
                  }
                                          h1{
                                                  text-align: center;
                                                  margin:auto;
                                          }
                  tr h1{
                    text-align: center;
                                                  padding: 5px ;
                                                  font-size: large;
                  }
                                          .top100{
                                                  margin-top: 50px
                                          }
                                          .row h1{
                                            margin-bottom:30px
                                          }
                </style>
                </head>
                <body> 
                        
                        <div class="row">
                                <img  src="https://www.optimusfm.co/assets/images/optimus.png">                
                        </div>
                        <div class="row top100">
                                <h1> From ${data.name}</h1>             
                        </div>
                         

                        <table cellpadding="0" cellspacing="0"  border="1">       
                                <tr>                    
                                        <td><h1>Contact Name</h1></td>                 
                                        <td><h1>${data.name}</h1></td>                 
                                </tr> 
                                
                                <tr>                    
                                        <td><h1>E-mail Address</h1></td>                 
                                        <td><h1>${data.email}</h1></td>                 
                                </tr>
                                <tr>                    
                                        <td><h1>Message</h1></td>                 
                                        <td><h1>${data.message}</h1></td>                 
                                </tr>    
                                
                                
                                 
                                 
                                    
                        </table>    
                         <div class="row">
                                <p style="font-size:10px">This message and any attachments (the "message") is intended solely for the addressees and is confidential.  If you receive this message in error, please delete it and immediately notify the sender. Any use not in accord with its purpose, any dissemination or disclosure, either whole or partial, is prohibited except formal approval. The internet cannot guarantee the integrity of this message.  Optimus FM (and its subsidiaries) shall (will) not therefore be liable for the message if modified.</p>               
                        </div>

                         
                </body>
                  `
              });


    }

      main().catch(console.error);
        return res.send({
          success: true
        });
    

 });

const PORT = process.env.PORT || 443;
 
app.listen(PORT, function () {
  console.log('Node.js server is running on port ' + PORT);
});

