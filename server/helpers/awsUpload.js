const AWS = require('aws-sdk');

const postToAWS = (body, name, callback) => {
  const options = ({
    apiVersion: '2006-03-01',
    region: 'us-west-1',
    accessKeyId: 'AKIAJZSBCX4LDZ3ZVSEA',
    secretAccessKey: '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',
    signatureVersion: 'v4'
  });

  const s3 = new AWS.S3(options);

  s3.putObject({
    Bucket: 'hrla22-ebay-fe',
    Key: name,
    ACL: 'public-read',
    Body: body,
    ContentType: 'image/jpeg'
  }, (err, data) => {
    if (err) {
      console.log('error putting in s3', err);
      callback(err, null);
    } else {
      console.log('successfully put in s3', data);
      callback(null, data)
    }
  })
}

module.exports = {
  postToAWS: postToAWS
}