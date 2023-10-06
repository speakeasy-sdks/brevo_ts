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
import { CreateExternalFeedResponse } from "BREVO/dist/sdk/models/operations";
import { CreateExternalFeedAuthType } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.externalFeeds.createExternalFeed({
  authType: CreateExternalFeedAuthType.Token,
  cache: true,
  headers: [
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
}).then((res: CreateExternalFeedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.CreateExternalFeed](../../models/shared/createexternalfeed.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.CreateExternalFeedResponse](../../models/operations/createexternalfeedresponse.md)>**


## deleteExternalFeed

This endpoint will delete an external feed.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteExternalFeedResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.externalFeeds.deleteExternalFeed({
  uuid: "b0692cb8-a6d8-42d5-9923-10ace67bc974",
}).then((res: DeleteExternalFeedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteExternalFeedRequest](../../models/operations/deleteexternalfeedrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteExternalFeedResponse](../../models/operations/deleteexternalfeedresponse.md)>**


## getAllExternalFeeds

This endpoint can fetch all created external feeds.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import {
  GetAllExternalFeedsAuthType,
  GetAllExternalFeedsResponse,
  GetAllExternalFeedsSort,
} from "BREVO/dist/sdk/models/operations";
import { RFCDate } from "BREVO/dist/sdk/types";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.externalFeeds.getAllExternalFeeds({
  authType: GetAllExternalFeedsAuthType.NoAuth,
  endDate: new RFCDate("2022-12-17"),
  limit: 611577,
  offset: 408687,
  search: "Bentley",
  sort: GetAllExternalFeedsSort.Desc,
  startDate: new RFCDate("2021-02-23"),
}).then((res: GetAllExternalFeedsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetAllExternalFeedsRequest](../../models/operations/getallexternalfeedsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetAllExternalFeedsResponse](../../models/operations/getallexternalfeedsresponse.md)>**


## getExternalFeedByUUID

This endpoint will update an external feed.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetExternalFeedByUUIDResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.externalFeeds.getExternalFeedByUUID({
  uuid: "fa819eb0-857b-463d-ad10-39975748ac59",
}).then((res: GetExternalFeedByUUIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetExternalFeedByUUIDRequest](../../models/operations/getexternalfeedbyuuidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetExternalFeedByUUIDResponse](../../models/operations/getexternalfeedbyuuidresponse.md)>**


## updateExternalFeed

This endpoint will update an external feed.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateExternalFeedResponse } from "BREVO/dist/sdk/models/operations";
import { UpdateExternalFeedAuthType } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.externalFeeds.updateExternalFeed({
  updateExternalFeed: {
    authType: UpdateExternalFeedAuthType.NoAuth,
    cache: true,
    headers: [
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
  uuid: "5fe6c802-73af-494b-8891-280ca7739cb6",
}).then((res: UpdateExternalFeedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateExternalFeedRequest](../../models/operations/updateexternalfeedrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateExternalFeedResponse](../../models/operations/updateexternalfeedresponse.md)>**

