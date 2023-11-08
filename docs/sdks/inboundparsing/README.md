# InboundParsing
(*.inboundParsing*)

### Available Operations

* [getInboundEmailAttachment](#getinboundemailattachment) - Retrieve inbound attachment with download token.
* [getInboundEmailEvents](#getinboundemailevents) - Get the list of all the events for the received emails.
* [getInboundEmailEventsByUuid](#getinboundemaileventsbyuuid) - Fetch all events history for one particular received email.

## getInboundEmailAttachment

This endpoint will retrieve inbound attachment with download token.

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.inboundParsing.getInboundEmailAttachment({
    downloadToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetInboundEmailAttachmentRequest](../../models/operations/getinboundemailattachmentrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetInboundEmailAttachmentResponse](../../models/operations/getinboundemailattachmentresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getInboundEmailEvents

This endpoint will show the list of all the events for the received emails.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetInboundEmailEventsQueryParamSort } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.inboundParsing.getInboundEmailEvents({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetInboundEmailEventsRequest](../../models/operations/getinboundemaileventsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetInboundEmailEventsResponse](../../models/operations/getinboundemaileventsresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getInboundEmailEventsByUuid

This endpoint will show the list of all events history for one particular received email.

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.inboundParsing.getInboundEmailEventsByUuid({
    uuid: "0b78133b-5346-4c5c-9f06-f4b3166b05d6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetInboundEmailEventsByUuidRequest](../../models/operations/getinboundemaileventsbyuuidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetInboundEmailEventsByUuidResponse](../../models/operations/getinboundemaileventsbyuuidresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |
