import AWS, { config } from "aws-sdk";
import { Consumer, SQSMessage } from "sqs-consumer";

config.update({ region: "ap-northeast-1" });
const queueUrl = process.env.SQS_URI;

const app = Consumer.create({
  queueUrl,
  handleMessage: async (message: SQSMessage): Promise<void> => {
    const messageBody = message.Body as string;
    const messageAttributes = message.MessageAttributes;

    if (messageAttributes === undefined) {
      throw new Error("messageAttributes is not defined");
    }

    const action = messageAttributes.Action;
    switch (action.StringValue) {
      case "HealthCheck": {
        console.log(JSON.parse(messageBody));
        break;
      }
      default: {
        throw new Error(`Undefined Action. ${action.StringValue}`);
      }
    }
  },
  messageAttributeNames: ["Action"],
  sqs: new AWS.SQS(),
});

app.on("error", (err: Error, errorMessage) => {
  console.log("job-queueにてQueueとのやり取りを行う際、処理に失敗しました。");
});

app.on("processing_error", (err: Error, message) => {
  console.error(`job-queueメッセージ処理に失敗しました。 ${message}, ${err}`);
});

app.on("message_received", (message) => {
  console.log(`1つのQueue を受信しました。処理を開始します。\n ${message}`);
});

app.start();
