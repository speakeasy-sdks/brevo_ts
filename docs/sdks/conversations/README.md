# conversations

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
  id: "5f0d30c5-fbb2-4587-8532-02c73d5fe9b9",
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
  id: "0c28909b-3fe4-49a8-99cb-f48633323f9b",
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
  id: "77f3a410-0674-4ebf-a928-0d1ba77a89eb",
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
  id: "f737ae42-03ce-45e6-a95d-8a0d446ce2af",
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
  agentEmail: "esse",
  agentId: "harum",
  agentName: "iusto",
  receivedFrom: "ipsum",
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
  agentEmail: "quisquam",
  agentId: "tenetur",
  agentName: "amet",
  receivedFrom: "tempore",
  text: "accusamus",
  visitorId: "numquam",
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
  agentId: "enim",
  groupId: "dolorem",
  text: "sapiente",
  visitorId: "totam",
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
    text: "nihil",
  },
  id: "0b326b5a-7342-49cd-b1a8-422bb679d232",
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
    text: "magni",
  },
  id: "715bf0cb-b1e3-41b8-b90f-3443a1108e0a",
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

