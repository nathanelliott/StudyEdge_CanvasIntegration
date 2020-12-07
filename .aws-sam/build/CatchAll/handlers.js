const AWS = require("aws-sdk");
// const chime = new AWS.Chime();
// const { v4: uuidv4 } = require("uuid");
// const api = require('./api');
// const pusher = require('./pusher');
// Set the AWS SDK Chime endpoint. The global endpoint is https://service.chime.aws.amazon.com.
// chime.endpoint = new AWS.Endpoint("https://service.chime.aws.amazon.com");

const json = (statusCode, contentType, body) => {
    return {
        statusCode,
        headers: { "content-type": contentType },
        body: JSON.stringify(body),
    };
};

exports.createJWT = async (event, context, callback) => {
//    return json(200, "application/json", {"first_name": "johnaban5", "mysql": process.env.MYSQL_HOST, "last_name": "ell"});
    return json(200, "application/json", {"method": "createJWT"});
};

exports.refreshJWT = async (event, context, callback) => {
    return json(200, "application/json", {"method": "refreshJWT"});
};

exports.catchAll = async (event, context, callback) => {
    console.log("see what this catchAll even is 1");
    console.log(event["queryStringParameters"]);
    // console.log("see what this even is 2");
    // console.log(event['params']['querystring']);
    console.log("see what this even is 3");
    console.log(event.body);
    return json(200, "application/json", {"method": "catchAll"});
};

const StaticFileHandler = require('serverless-aws-static-file-handler')

exports.index = async (event, context, callback) => {
    const clientFilesPath = __dirname + "/html/";
    const fileHandler = new StaticFileHandler(clientFilesPath)
    return await fileHandler.get(event,context);
}