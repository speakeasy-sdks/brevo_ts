# externalFeeds

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
  authType: CreateExternalFeedAuthType.Basic,
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
  uuid: "a70c6882-82aa-4482-962f-222e9817ee17",
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
  endDate: new RFCDate("2021-03-31"),
  limit: 399025,
  offset: 93459,
  search: "saepe",
  sort: GetAllExternalFeedsSort.Asc,
  startDate: new RFCDate("2022-01-20"),
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
  uuid: "b95bc0ab-3c20-4c4f-b789-fd871f99dd2e",
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
  uuid: "d121aa6f-1e67-44bd-b04f-15756082d68e",
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

