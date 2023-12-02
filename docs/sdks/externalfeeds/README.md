# ExternalFeeds
(*externalFeeds*)

### Available Operations

* [createExternalFeed](#createexternalfeed) - Create an external feed
* [deleteExternalFeed](#deleteexternalfeed) - Delete an external feed
* [getAllExternalFeeds](#getallexternalfeeds) - Fetch all external feeds
* [getExternalFeedByUUID](#getexternalfeedbyuuid) - Get an external feed by UUID
* [updateExternalFeed](#updateexternalfeed) - Update an external feed

## createExternalFeed

This endpoint will create an external feed.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { AuthType } from "BREVO/dist/models/components";

async function run() {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.externalFeeds.createExternalFeed({
    cache: true,
    headers: [
      {
        name: "userId",
        value: "user12345",
      },
      {
        name: "userId",
        value: "user12345",
      },
    ],
    maxRetries: 5,
    name: "New feed",
    password: "password",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    url: "http://requestb.in/173lyyx1",
    username: "user",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [components.CreateExternalFeed](../../models/components/createexternalfeed.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateExternalFeedResponse](../../models/operations/createexternalfeedresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## deleteExternalFeed

This endpoint will delete an external feed.

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.externalFeeds.deleteExternalFeed({
    uuid: "b0692cb8-a6d8-42d5-9923-10ace67bc974",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteExternalFeedRequest](../../models/operations/deleteexternalfeedrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteExternalFeedResponse](../../models/operations/deleteexternalfeedresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getAllExternalFeeds

This endpoint can fetch all created external feeds.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { AuthType, GetAllExternalFeedsQueryParamSort } from "BREVO/dist/models/operations";
import { RFCDate } from "BREVO/dist/types";

async function run() {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.externalFeeds.getAllExternalFeeds({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetAllExternalFeedsRequest](../../models/operations/getallexternalfeedsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetAllExternalFeedsResponse](../../models/operations/getallexternalfeedsresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getExternalFeedByUUID

This endpoint will update an external feed.

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.externalFeeds.getExternalFeedByUUID({
    uuid: "fa819eb0-857b-463d-ad10-39975748ac59",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetExternalFeedByUUIDRequest](../../models/operations/getexternalfeedbyuuidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetExternalFeedByUUIDResponse](../../models/operations/getexternalfeedbyuuidresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## updateExternalFeed

This endpoint will update an external feed.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateExternalFeedAuthType } from "BREVO/dist/models/components";

async function run() {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.externalFeeds.updateExternalFeed({
    updateExternalFeed: {
      cache: true,
      headers: [
        {
          name: "userId",
          value: "user12345",
        },
        {
          name: "userId",
          value: "user12345",
        },
      ],
      maxRetries: 5,
      name: "New feed",
      password: "password",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      url: "http://requestb.in/173lyyx1",
      username: "user",
    },
    uuid: "b5fe6c80-273a-4f94-b089-1280ca7739cb",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateExternalFeedRequest](../../models/operations/updateexternalfeedrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateExternalFeedResponse](../../models/operations/updateexternalfeedresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |
