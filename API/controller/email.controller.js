import nodemailer from 'nodemailer';

function senMail(email,password)
{
   var transporter = nodemailer.createTransport({
   service: 'gmail',
    auth: {
    user: 'rajeshpatankar24@gmail.com',
    pass: 'vvfz djgv xttu twvu'
  }
});

var mailOptions = {
  from: 'rajeshpatankar24@gmail.com',
  to: email,
  subject: 'Verify your account details',
  html:"<h1>Welcome to tender</h1><p>You have successfully register to our site , your login credentials are attached below</p><h2>Email:"+email+"</h2><h2>Password:"+password+"</h2><h1>Click on the link below to verify your account</h1>http://localhost:3000/verify/"+email
   
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    alert('Email sent: ' + info.response);
  }
});
}

export default senMail;