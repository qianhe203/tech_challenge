const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.lambdaHandler = async (event, context) => {
    console.log("hello!!");
    const params = {
        Bucket: "musiclab-codechallenge",
        Key: "songData.json",
    };
    try {
        const { ContentType, Body } = await s3.getObject(params).promise();
        console.log('CONTENT TYPE:', ContentType);
        console.log(Body.toString());
        const response = {
         'statusCode': 200,
             'body': Body.toString()
        };
        return response;
    } catch (err) {
        console.log(err);
        const message = `Error!!!!`;
        console.log(message);
        throw new Error(message);
    }
};
