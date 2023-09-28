
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePhoneNumber(phoneNumber) {
  const re = /^\d{10}$/;
  return re.test(phoneNumber);
}

function validateDate(dateString) {
  const re = /^\d{4}-\d{2}-\d{2}$/;
  if (!re.test(dateString)) return false;
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return false;
  return true;
}

const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

function sendSMS(to, body) {
  client.messages
    .create({
      body: body,
      from: 'your_twilio_phone_number',
      to: to
    })
    .then(message => console.log(message.sid))
    .catch(error => console.error(error));
}

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('your_sendgrid_api_key');

function sendEmail(to, subject, body) {
  const msg = {
    to: to,
    from: 'your_email_address',
    subject: subject,
    text: body,
  };
  sgMail
    .send(msg)
    .then(() => console.log('Email sent'))
    .catch(error => console.error(error));
}