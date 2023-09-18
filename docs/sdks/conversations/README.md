# Conversations

### Available Operations

* [deleteConversationsMessagesId](#deleteconversationsmessagesid) - Delete a message sent by an agent
* [deleteConversationsPushedMessagesId](#deleteconversationspushedmessagesid) - Delete an automated message
* [getConversationsMessagesId](#getconversationsmessagesid) - Get a message
* [getConversationsPushedMessagesId](#getconversationspushedmessagesid) - Get an automated message
* [postConversationsAgentOnlinePing](#postconversationsagentonlineping) - Sets agent’s status to online for 2-3 minutes
* [postConversationsMessages](#postconversationsmessages) - Send a message as an agent
* [postConversationsPushedMessages](#postconversationspushedmessages) - Send an automated message to a visitor
* [putConversationsMessagesId](#putconversationsmessagesid) - Update a message sent by an agent
* [putConversationsPushedMessagesId](#putconversationspushedmessagesid) - Update an automated message

## deleteConversationsMessagesId

Only agents’ messages can be deleted.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteConversationsMessagesIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.conversations.deleteConversationsMessagesId({
  id: "b14cd66a-e395-4efb-9ba8-8f3a66997074",
}).then((res: DeleteConversationsMessagesIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.DeleteConversationsMessagesIdRequest](../../models/operations/deleteconversationsmessagesidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.DeleteConversationsMessagesIdResponse](../../models/operations/deleteconversationsmessagesidresponse.md)>**


## deleteConversationsPushedMessagesId

Delete an automated message

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteConversationsPushedMessagesIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.conversations.deleteConversationsPushedMessagesId({
  id: "ba4469b6-e214-4195-9890-afa563e2516f",
}).then((res: DeleteConversationsPushedMessagesIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.DeleteConversationsPushedMessagesIdRequest](../../models/operations/deleteconversationspushedmessagesidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.DeleteConversationsPushedMessagesIdResponse](../../models/operations/deleteconversationspushedmessagesidresponse.md)>**


## getConversationsMessagesId

Get a message

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetConversationsMessagesIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.conversations.getConversationsMessagesId({
  id: "e4c8b711-e5b7-4fd2-ad02-8921cddc6926",
}).then((res: GetConversationsMessagesIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetConversationsMessagesIdRequest](../../models/operations/getconversationsmessagesidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetConversationsMessagesIdResponse](../../models/operations/getconversationsmessagesidresponse.md)>**


## getConversationsPushedMessagesId

Get an automated message

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetConversationsPushedMessagesIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.conversations.getConversationsPushedMessagesId({
  id: "01fb576b-0d5f-40d3-8c5f-bb2587053202",
}).then((res: GetConversationsPushedMessagesIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetConversationsPushedMessagesIdRequest](../../models/operations/getconversationspushedmessagesidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetConversationsPushedMessagesIdResponse](../../models/operations/getconversationspushedmessagesidresponse.md)>**


## postConversationsAgentOnlinePing

We recommend pinging this endpoint every minute for as long as the agent has to be considered online.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PostConversationsAgentOnlinePingResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.conversations.postConversationsAgentOnlinePing({
  agentEmail: "minus",
  agentId: "quam",
  agentName: "dolor",
  receivedFrom: "vero",
}).then((res: PostConversationsAgentOnlinePingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PostConversationsAgentOnlinePingRequestBody](../../models/operations/postconversationsagentonlinepingrequestbody.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PostConversationsAgentOnlinePingResponse](../../models/operations/postconversationsagentonlinepingresponse.md)>**


## postConversationsMessages

Send a message as an agent

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PostConversationsMessagesResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.conversations.postConversationsMessages({
  agentEmail: "nostrum",
  agentId: "hic",
  agentName: "recusandae",
  receivedFrom: "omnis",
  text: "facilis",
  visitorId: "perspiciatis",
}).then((res: PostConversationsMessagesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PostConversationsMessagesRequestBody](../../models/operations/postconversationsmessagesrequestbody.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PostConversationsMessagesResponse](../../models/operations/postconversationsmessagesresponse.md)>**


## postConversationsPushedMessages

Example of automated messages: order status, announce new features in your web app, etc.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PostConversationsPushedMessagesResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.conversations.postConversationsPushedMessages({
  agentId: "voluptatem",
  groupId: "porro",
  text: "consequuntur",
  visitorId: "blanditiis",
}).then((res: PostConversationsPushedMessagesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PostConversationsPushedMessagesRequestBody](../../models/operations/postconversationspushedmessagesrequestbody.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PostConversationsPushedMessagesResponse](../../models/operations/postconversationspushedmessagesresponse.md)>**


## putConversationsMessagesId

Only agents’ messages can be edited.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PutConversationsMessagesIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.conversations.putConversationsMessagesId({
  requestBody: {
    text: "error",
  },
  id: "09b3fe49-a8d9-4cbf-8863-3323f9b77f3a",
}).then((res: PutConversationsMessagesIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PutConversationsMessagesIdRequest](../../models/operations/putconversationsmessagesidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PutConversationsMessagesIdResponse](../../models/operations/putconversationsmessagesidresponse.md)>**


## putConversationsPushedMessagesId

Update an automated message

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PutConversationsPushedMessagesIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.conversations.putConversationsPushedMessagesId({
  requestBody: {
    text: "numquam",
  },
  id: "100674eb-f692-480d-9ba7-7a89ebf737ae",
}).then((res: PutConversationsPushedMessagesIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PutConversationsPushedMessagesIdRequest](../../models/operations/putconversationspushedmessagesidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PutConversationsPushedMessagesIdResponse](../../models/operations/putconversationspushedmessagesidresponse.md)>**

