const accountSid = process.env.twilioact;
const authToken = process.env.twiliosecret;
const client = require('twilio')(accountSid, authToken);

const sendMessage = async sendNum => {
    let msg = await client.messages
        .create({
            body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
            from: '+17752047864',
            to: sendNum
        })
        // .then(message => console.log(message.sid));
    return msg.sid
}

module.exports = {
    sendMessage
}