const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.lambdaHandler = async (event, context) => {
    // try {
    //     // const ret = await axios(url);
    //     response = {
    //         'statusCode': 200,
    //         'body': JSON.stringify({
    //             message: 'hello world',
    //             // location: ret.data.trim()
    //         })
    //     }
    // } catch (err) {
    //     console.log(err);
    //     return err;
    // }
    // const getObjectRequests = () => {
    //     const params = {
    //       Bucket: "musiclab-codechallenge",
    //       Key: "songData.json"
    //     };
    //     return s3.getObject(params).promise().then(data => {
    //       console.info(data.Body.toString());
    //         const response = {
    //         'statusCode': 200,
    //         'body': data.body.toString()
    //     }
    //     return response
    //     }).catch(err => {
    //       console.error("Error calling S3 getObject:", err);
    //       return Promise.reject(err);
    //     })
    //   };
    //   return Promise.resolve(getObjectRequests).then(() => {
    //     console.debug('Complete!');
    //   });

    s3.getObject({
      Bucket: "musiclab-codechallenge",
      Key: "songData.json"
    }, function(err, data) {
        if (err) {
            console.log(err, err.stack);
            return err
        } else {
            console.info(data.Body.toString());
            const response = {
              'statusCode': 200,
              'body': JSON.stringify({
                  message: 'hello world'
              })
          }
          return response
        }
    });
};
