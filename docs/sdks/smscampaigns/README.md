# SMSCampaigns
(*smsCampaigns*)

### Available Operations

* [createSmsCampaign](#createsmscampaign) - Creates an SMS campaign
* [deleteSmsCampaign](#deletesmscampaign) - Delete an SMS campaign
* [getSmsCampaign](#getsmscampaign) - Get an SMS campaign
* [getSmsCampaigns](#getsmscampaigns) - Returns the information for all your created SMS campaigns
* [requestSmsRecipientExport](#requestsmsrecipientexport) - Export an SMS campaign's recipients
* [sendSmsCampaignNow](#sendsmscampaignnow) - Send your SMS campaign immediately
* [sendSmsReport](#sendsmsreport) - Send an SMS campaign's report
* [sendTestSms](#sendtestsms) - Send a test SMS campaign
* [updateSmsCampaign](#updatesmscampaign) - Update an SMS campaign
* [updateSmsCampaignStatus](#updatesmscampaignstatus) - Update a campaign's status

## createSmsCampaign

Creates an SMS campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { CreateSmsCampaignResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.smsCampaigns.createSmsCampaign({
  content: "Get a discount by visiting our NY store and saying : Happy Spring!",
  name: "Spring Promo Code",
  organisationPrefix: "MyCompany",
  recipients: {
    exclusionListIds: [
      15,
    ],
    listIds: [
      54,
    ],
  },
  scheduledAt: "2017-05-05T12:30:00+02:00",
  sender: "MyShop",
  unicodeEnabled: true,
  unsubscribeInstruction: "send Stop if you want to unsubscribe.",
}).then((res: CreateSmsCampaignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.CreateSmsCampaign](../../models/shared/createsmscampaign.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.CreateSmsCampaignResponse](../../models/operations/createsmscampaignresponse.md)>**


## deleteSmsCampaign

Delete an SMS campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteSmsCampaignResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.smsCampaigns.deleteSmsCampaign({
  campaignId: 509807,
}).then((res: DeleteSmsCampaignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteSmsCampaignRequest](../../models/operations/deletesmscampaignrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteSmsCampaignResponse](../../models/operations/deletesmscampaignresponse.md)>**


## getSmsCampaign

Get an SMS campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetSmsCampaignResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.smsCampaigns.getSmsCampaign({
  campaignId: 648598,
}).then((res: GetSmsCampaignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetSmsCampaignRequest](../../models/operations/getsmscampaignrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetSmsCampaignResponse](../../models/operations/getsmscampaignresponse.md)>**


## getSmsCampaigns

Returns the information for all your created SMS campaigns

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetSmsCampaignsResponse, GetSmsCampaignsSort, GetSmsCampaignsStatus } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.smsCampaigns.getSmsCampaigns({
  endDate: "veniam",
  limit: 29100,
  offset: 790840,
  sort: GetSmsCampaignsSort.Desc,
  startDate: "quasi",
  status: GetSmsCampaignsStatus.Queued,
}).then((res: GetSmsCampaignsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetSmsCampaignsRequest](../../models/operations/getsmscampaignsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetSmsCampaignsResponse](../../models/operations/getsmscampaignsresponse.md)>**


## requestSmsRecipientExport

It returns the background process ID which on completion calls the notify URL that you have set in the input.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { RequestSmsRecipientExportResponse } from "BREVO/dist/sdk/models/operations";
import { RequestSmsRecipientExportRecipientsType } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.smsCampaigns.requestSmsRecipientExport({
  campaignId: 442036,
  requestSmsRecipientExport: {
    notifyURL: "http://requestb.in/173lyyx1",
    recipientsType: RequestSmsRecipientExportRecipientsType.Answered,
  },
}).then((res: RequestSmsRecipientExportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.RequestSmsRecipientExportRequest](../../models/operations/requestsmsrecipientexportrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.RequestSmsRecipientExportResponse](../../models/operations/requestsmsrecipientexportresponse.md)>**


## sendSmsCampaignNow

Send your SMS campaign immediately

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { SendSmsCampaignNowResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.smsCampaigns.sendSmsCampaignNow({
  campaignId: 991142,
}).then((res: SendSmsCampaignNowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.SendSmsCampaignNowRequest](../../models/operations/sendsmscampaignnowrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.SendSmsCampaignNowResponse](../../models/operations/sendsmscampaignnowresponse.md)>**


## sendSmsReport

Send report of Sent and Archived campaign, to the specified email addresses, with respective data and a pdf attachment in detail.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { SendSmsReportResponse } from "BREVO/dist/sdk/models/operations";
import { SendReportLanguage } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.smsCampaigns.sendSmsReport({
  campaignId: 519952,
  sendReport: {
    email: {
      body: "Please find attached the report of our last email campaign.",
      to: [
        "jim.suehan@example.com",
      ],
    },
    language: SendReportLanguage.En,
  },
}).then((res: SendSmsReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.SendSmsReportRequest](../../models/operations/sendsmsreportrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.SendSmsReportResponse](../../models/operations/sendsmsreportresponse.md)>**


## sendTestSms

Send a test SMS campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { SendTestSmsResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.smsCampaigns.sendTestSms({
  campaignId: 383103,
  sendTestSms: {
    phoneNumber: "33689965433",
  },
}).then((res: SendTestSmsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.SendTestSmsRequest](../../models/operations/sendtestsmsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.SendTestSmsResponse](../../models/operations/sendtestsmsresponse.md)>**


## updateSmsCampaign

Update an SMS campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateSmsCampaignResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.smsCampaigns.updateSmsCampaign({
  campaignId: 693957,
  updateSmsCampaign: {
    content: "Get a discount by visiting our NY store and saying : Happy Spring!",
    name: "Spring Promo Code",
    organisationPrefix: "MyCompany",
    recipients: {
      exclusionListIds: [
        15,
      ],
      listIds: [
        54,
      ],
    },
    scheduledAt: "2017-05-05T12:30:00+02:00",
    sender: "MyShop",
    unicodeEnabled: true,
    unsubscribeInstruction: "send Stop if you want to unsubscribe.",
  },
}).then((res: UpdateSmsCampaignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateSmsCampaignRequest](../../models/operations/updatesmscampaignrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateSmsCampaignResponse](../../models/operations/updatesmscampaignresponse.md)>**


## updateSmsCampaignStatus

Update a campaign's status

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateSmsCampaignStatusResponse } from "BREVO/dist/sdk/models/operations";
import { UpdateCampaignStatusStatus } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.smsCampaigns.updateSmsCampaignStatus({
  campaignId: 806670,
  updateCampaignStatus: {
    status: UpdateCampaignStatusStatus.Suspended,
  },
}).then((res: UpdateSmsCampaignStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UpdateSmsCampaignStatusRequest](../../models/operations/updatesmscampaignstatusrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateSmsCampaignStatusResponse](../../models/operations/updatesmscampaignstatusresponse.md)>**

