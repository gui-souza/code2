const AWS = require('aws-sdk');
const ec2 = new AWS.EC2({
  region: 'sa-east-1'
});

module.exports = (amiId, subnetId, cb) => {
  ec2.runInstances({
    ImageId: amiId,
    MinCount: 1,
    MaxCount: 1,
    KeyName: 'aws-sp-kp',
    InstanceType: 't2.micro',
    SubnetId: subnetId
  }, (err) => {
    if (err) {
      cb(err);
    } else {
      cb(null);
    }
  });
};
