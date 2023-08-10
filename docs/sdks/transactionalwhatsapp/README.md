# transactionalWhatsApp

### Available Operations

* [getWhatsappEventReport](#getwhatsappeventreport) - Get all your WhatsApp activity (unaggregated events)
* [sendWhatsappMessage](#sendwhatsappmessage) - Send a WhatsApp message

## getWhatsappEventReport

This endpoint will show the unaggregated statistics for WhatsApp activity (30 days by default if `startDate` and `endDate` or `days` is not passed. The date range can not exceed 90 days)

### Example Usage

```typescript
import { Brevo } from "BREVO";
import {
  GetWhatsappEventReportEvent,
  GetWhatsappEventReportResponse,
  GetWhatsappEventReportSort,
} from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalWhatsApp.getWhatsappEventReport({
  contactNumber: "693.683.8549 x4592",
  days: 722184,
  endDate: "vero",
  event: GetWhatsappEventReportEvent.Sent,
  limit: 371919,
  offset: 425946,
  sort: GetWhatsappEventReportSort.Asc,
  startDate: "quasi",
}).then((res: GetWhatsappEventReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetWhatsappEventReportRequest](../../models/operations/getwhatsappeventreportrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetWhatsappEventReportResponse](../../models/operations/getwhatsappeventreportresponse.md)>**


## sendWhatsappMessage

This endpoint is used to send a WhatsApp message. <br/>(**The first message you send using the API must contain a Template ID. You must create a template on WhatsApp on the Brevo platform to fetch the Template ID.**)

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { SendWhatsappMessageResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalWhatsApp.sendWhatsappMessage({
  contactNumbers: [
    "919876543210",
    "919876543210",
    "919876543210",
    "919876543210",
  ],
  senderNumber: "919876543210",
  templateId: 123,
}).then((res: SendWhatsappMessageResponse) => {
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

**Promise<[operations.SendWhatsappMessageResponse](../../models/operations/sendwhatsappmessageresponse.md)>**

