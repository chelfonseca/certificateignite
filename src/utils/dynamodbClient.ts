import { DynamoDB } from "aws-sdk"
// import { DynamoDB } from "@aws-sdk/client-dynamodb";


// const region = "us-west-2";

const options = {
    region: "localhost",
    endpoint: "http://localhost:8000",
    accessKeyId: "x",
    secretAccessKey: "x",
};

const isOffline = () => {
    return process.env.IS_OFFLINE;
};

export const document = isOffline() 
    ? new DynamoDB.DocumentClient(options)
    : new DynamoDB.DocumentClient();


// export const document = isOffline()
//     ? new DynamoDB(options)
//     : new DynamoDB()

