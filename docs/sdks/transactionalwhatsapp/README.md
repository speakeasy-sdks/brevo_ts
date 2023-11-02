# TransactionalWhatsApp
(*transactionalWhatsApp*)

### Available Operations

* [getWhatsappEventReport](#getwhatsappeventreport) - Get all your WhatsApp activity (unaggregated events)
* [sendWhatsappMessage](#sendwhatsappmessage) - Send a WhatsApp message

## getWhatsappEventReport

This endpoint will show the unaggregated statistics for WhatsApp activity (30 days by default if `startDate` and `endDate` or `days` is not passed. The date range can not exceed 90 days)

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetWhatsappEventReportEvent, GetWhatsappEventReportSort } from "BREVO/dist/sdk/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalWhatsApp.getWhatsappEventReport({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalWhatsApp.sendWhatsappMessage("string");


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

**Promise<[operations.SendWhatsappMessageResponse](../../models/operations/sendwhatsappmessageresponse.md)>**

