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
import { GetSmsEventsEvent, GetSmsEventsSort } from "BREVO/dist/sdk/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalSMS.getSmsEvents({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalSMS.getTransacAggregatedSmsReport({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetTransacSmsReportSort } from "BREVO/dist/sdk/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalSMS.getTransacSmsReport({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { SendTransacSmsType } from "BREVO/dist/sdk/models/shared";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalSMS.sendTransacSms({
    content: "Enter this code:CCJJG8 to validate your account",
    organisationPrefix: "MyCompany",
    recipient: "33689965433",
    sender: "MyShop",
    tag: "accountValidation",
    type: SendTransacSmsType.Marketing,
    unicodeEnabled: true,
    webUrl: "http://requestb.in/173lyyx1",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [shared.SendTransacSms](../../models/shared/sendtransacsms.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.SendTransacSmsResponse](../../models/operations/sendtransacsmsresponse.md)>**

