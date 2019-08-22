let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = function (event, context, callback) {
    ses.sendEmail({
        Destination: {
            ToAddresses: ['kumudika@adroitlogic.com'],
            CcAddresses: [],
            BccAddresses: []
        },
        Message: {
            Body: {
                Text: {
                    Data: `test`
                }
            },
            Subject: {
                Data: 'Test'
            }
        },
        Source: 'achal.rvce@gmail.com',
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });

    callback(null, { "message": "Successfully executed" });
}