# Webhooks
(*webhooks*)

### Available Operations

* [createWebhook](#createwebhook) - Create a webhook
* [deleteWebhook](#deletewebhook) - Delete a webhook
* [exportWebhooksHistory](#exportwebhookshistory) - Export all transactional events
* [getWebhook](#getwebhook) - Get a webhook details
* [getWebhooks](#getwebhooks) - Get all webhooks
* [updateWebhook](#updatewebhook) - Update a webhook

## createWebhook

Create a webhook

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { CreateWebhookResponse } from "BREVO/dist/sdk/models/operations";
import { CreateWebhookEvents, CreateWebhookType } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.webhooks.createWebhook({
  description: "Webhook triggered on unsubscription",
  domain: "example.com",
  events: [
    CreateWebhookEvents.Unsubscribed,
  ],
  type: CreateWebhookType.Marketing,
  url: "http://requestb.in/173lyyx1",
}).then((res: CreateWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.CreateWebhook](../../models/shared/createwebhook.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateWebhookResponse](../../models/operations/createwebhookresponse.md)>**


## deleteWebhook

Delete a webhook

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteWebhookResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.webhooks.deleteWebhook({
  webhookId: 594215,
}).then((res: DeleteWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteWebhookRequest](../../models/operations/deletewebhookrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteWebhookResponse](../../models/operations/deletewebhookresponse.md)>**


## exportWebhooksHistory

This endpoint will submit a request to get the history of webhooks in the CSV file. The link to download that CSV file will send to the webhook link provided in notifyURL of the body payload.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { ExportWebhooksHistoryResponse } from "BREVO/dist/sdk/models/operations";
import { ExportWebhooksHistoryEvent } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.webhooks.exportWebhooksHistory({
  days: 7,
  email: "example@brevo.com",
  endDate: "2023-02-17",
  event: ExportWebhooksHistoryEvent.Request,
  messageId: <23befbae-1505-47a8-bd27-e30ef739f32c@fr.sib>,
  notifyURL: "https://brevo.com",
  sort: "desc",
  startDate: "2023-02-13",
  webhookId: 2345,
}).then((res: ExportWebhooksHistoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [any](../../models//.md)                                     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ExportWebhooksHistoryResponse](../../models/operations/exportwebhookshistoryresponse.md)>**


## getWebhook

Get a webhook details

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetWebhookResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.webhooks.getWebhook({
  webhookId: 841269,
}).then((res: GetWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetWebhookRequest](../../models/operations/getwebhookrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetWebhookResponse](../../models/operations/getwebhookresponse.md)>**


## getWebhooks

Get all webhooks

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetWebhooksResponse, GetWebhooksSort, GetWebhooksType } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.webhooks.getWebhooks({
  sort: GetWebhooksSort.Asc,
  type: GetWebhooksType.Marketing,
}).then((res: GetWebhooksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetWebhooksRequest](../../models/operations/getwebhooksrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetWebhooksResponse](../../models/operations/getwebhooksresponse.md)>**


## updateWebhook

Update a webhook

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateWebhookResponse } from "BREVO/dist/sdk/models/operations";
import { UpdateWebhookEvents } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.webhooks.updateWebhook({
  updateWebhook: {
    description: "Webhook triggered on contact hardbounce",
    domain: "example.com",
    events: [
      UpdateWebhookEvents.HardBounce,
    ],
    url: "http://requestb.in/173lyyx1",
  },
  webhookId: 520428,
}).then((res: UpdateWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateWebhookRequest](../../models/operations/updatewebhookrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateWebhookResponse](../../models/operations/updatewebhookresponse.md)>**

