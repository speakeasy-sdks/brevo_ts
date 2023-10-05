# InboundParsing
(*inboundParsing*)

### Available Operations

* [getInboundEmailAttachment](#getinboundemailattachment) - Retrieve inbound attachment with download token.
* [getInboundEmailEvents](#getinboundemailevents) - Get the list of all the events for the received emails.
* [getInboundEmailEventsByUuid](#getinboundemaileventsbyuuid) - Fetch all events history for one particular received email.

## getInboundEmailAttachment

This endpoint will retrieve inbound attachment with download token.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetInboundEmailAttachmentResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.inboundParsing.getInboundEmailAttachment({
  downloadToken: "Trans",
}).then((res: GetInboundEmailAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetInboundEmailAttachmentRequest](../../models/operations/getinboundemailattachmentrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetInboundEmailAttachmentResponse](../../models/operations/getinboundemailattachmentresponse.md)>**


## getInboundEmailEvents

This endpoint will show the list of all the events for the received emails.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetInboundEmailEventsResponse, GetInboundEmailEventsSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.inboundParsing.getInboundEmailEvents({
  endDate: "Home disappointment Specialist",
  limit: 772189,
  offset: 827566,
  sender: "RSS Taylor",
  sort: GetInboundEmailEventsSort.Desc,
  startDate: "unleash Bicycle Oregon",
}).then((res: GetInboundEmailEventsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetInboundEmailEventsRequest](../../models/operations/getinboundemaileventsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetInboundEmailEventsResponse](../../models/operations/getinboundemaileventsresponse.md)>**


## getInboundEmailEventsByUuid

This endpoint will show the list of all events history for one particular received email.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetInboundEmailEventsByUuidResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.inboundParsing.getInboundEmailEventsByUuid({
  uuid: "0b78133b-5346-4c5c-9f06-f4b3166b05d6",
}).then((res: GetInboundEmailEventsByUuidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetInboundEmailEventsByUuidRequest](../../models/operations/getinboundemaileventsbyuuidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetInboundEmailEventsByUuidResponse](../../models/operations/getinboundemaileventsbyuuidresponse.md)>**

