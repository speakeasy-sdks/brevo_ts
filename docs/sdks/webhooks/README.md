# Webhooks
(*.webhooks*)

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
import { CreateWebhookType, Events } from "BREVO/dist/models/components";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.webhooks.createWebhook({
    description: "Webhook triggered on unsubscription",
    domain: "example.com",
    events: [
      Events.Deferred,
      Events.ContactDeleted,
      Events.InboundEmailProcessed,
      Events.Deferred,
      Events.InboundEmailProcessed,
      Events.Request,
      Events.Spam,
      Events.ContactDeleted,
      Events.Spam,
      Events.UniqueOpened,
      Events.Invalid,
      Events.ListAddition,
    ],
    type: CreateWebhookType.Marketing,
    url: "http://requestb.in/173lyyx1",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [components.CreateWebhook](../../models/shared/createwebhook.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.CreateWebhookResponse](../../models/operations/createwebhookresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## deleteWebhook

Delete a webhook

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.webhooks.deleteWebhook({
    webhookId: 594215,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteWebhookRequest](../../models/operations/deletewebhookrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteWebhookResponse](../../models/operations/deletewebhookresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## exportWebhooksHistory

This endpoint will submit a request to get the history of webhooks in the CSV file. The link to download that CSV file will send to the webhook link provided in notifyURL of the body payload.

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.webhooks.exportWebhooksHistory("string");

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [any](../../models//.md)                                     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ExportWebhooksHistoryResponse](../../models/operations/exportwebhookshistoryresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getWebhook

Get a webhook details

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.webhooks.getWebhook({
    webhookId: 841269,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetWebhookRequest](../../models/operations/getwebhookrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetWebhookResponse](../../models/operations/getwebhookresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getWebhooks

Get all webhooks

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetWebhooksQueryParamSort, QueryParamType } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.webhooks.getWebhooks({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetWebhooksRequest](../../models/operations/getwebhooksrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetWebhooksResponse](../../models/operations/getwebhooksresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## updateWebhook

Update a webhook

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateWebhookEvents } from "BREVO/dist/models/components";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.webhooks.updateWebhook({
    updateWebhook: {
      description: "Webhook triggered on contact hardbounce",
      domain: "example.com",
      events: [
        UpdateWebhookEvents.Invalid,
        UpdateWebhookEvents.UniqueOpened,
        UpdateWebhookEvents.ListAddition,
        UpdateWebhookEvents.SoftBounce,
        UpdateWebhookEvents.Delivered,
        UpdateWebhookEvents.Delivered,
        UpdateWebhookEvents.SoftBounce,
        UpdateWebhookEvents.Sent,
        UpdateWebhookEvents.Delivered,
        UpdateWebhookEvents.Invalid,
      ],
      url: "http://requestb.in/173lyyx1",
    },
    webhookId: 133269,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateWebhookRequest](../../models/operations/updatewebhookrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateWebhookResponse](../../models/operations/updatewebhookresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |
