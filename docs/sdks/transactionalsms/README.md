# TransactionalSMS
(*transactionalSMS*)

### Available Operations

* [getSmsEvents](#getsmsevents) - Get all your SMS activity (unaggregated events)
* [getTransacAggregatedSmsReport](#gettransacaggregatedsmsreport) - Get your SMS activity aggregated over a period of time
* [getTransacSmsReport](#gettransacsmsreport) - Get your SMS activity aggregated per day
* [sendTransacSms](#sendtransacsms) - Send SMS message to a mobile number

## getSmsEvents

Get all your SMS activity (unaggregated events)

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetSmsEventsEvent, GetSmsEventsResponse, GetSmsEventsSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalSMS.getSmsEvents({
  days: 821719,
  endDate: "animi",
  event: GetSmsEventsEvent.Sent,
  limit: 397257,
  offset: 37565,
  phoneNumber: "repellat",
  sort: GetSmsEventsSort.Desc,
  startDate: "ullam",
  tags: "in",
}).then((res: GetSmsEventsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetSmsEventsRequest](../../models/operations/getsmseventsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetSmsEventsResponse](../../models/operations/getsmseventsresponse.md)>**


## getTransacAggregatedSmsReport

Get your SMS activity aggregated over a period of time

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetTransacAggregatedSmsReportResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalSMS.getTransacAggregatedSmsReport({
  days: 721407,
  endDate: "earum",
  startDate: "officia",
  tag: "laborum",
}).then((res: GetTransacAggregatedSmsReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetTransacAggregatedSmsReportRequest](../../models/operations/gettransacaggregatedsmsreportrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetTransacAggregatedSmsReportResponse](../../models/operations/gettransacaggregatedsmsreportresponse.md)>**


## getTransacSmsReport

Get your SMS activity aggregated per day

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetTransacSmsReportResponse, GetTransacSmsReportSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalSMS.getTransacSmsReport({
  days: 813054,
  endDate: "modi",
  sort: GetTransacSmsReportSort.Desc,
  startDate: "molestias",
  tag: "officiis",
}).then((res: GetTransacSmsReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetTransacSmsReportRequest](../../models/operations/gettransacsmsreportrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetTransacSmsReportResponse](../../models/operations/gettransacsmsreportresponse.md)>**


## sendTransacSms

Send SMS message to a mobile number

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { SendTransacSmsResponse } from "BREVO/dist/sdk/models/operations";
import { SendTransacSmsType } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalSMS.sendTransacSms({
  content: "Enter this code:CCJJG8 to validate your account",
  organisationPrefix: "MyCompany",
  recipient: "33689965433",
  sender: "MyShop",
  tag: "accountValidation",
  type: SendTransacSmsType.Marketing,
  unicodeEnabled: true,
  webUrl: "http://requestb.in/173lyyx1",
}).then((res: SendTransacSmsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [shared.SendTransacSms](../../models/shared/sendtransacsms.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.SendTransacSmsResponse](../../models/operations/sendtransacsmsresponse.md)>**

