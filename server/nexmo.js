const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: process.env.nexmoacct,
  apiSecret: process.env.nexmosecret,
});

const from = '17344121708';
const text = 'Hello from Nexmo';

const sendMessage = async to => {
  let msg = await nexmo.message.sendSms(from, to, text)
  return msg;
};

module.exports = {sendMessage}