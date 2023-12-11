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

async function run() {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.smsCampaigns.createSmsCampaign({
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
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [components.CreateSmsCampaign](../../models/components/createsmscampaign.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateSmsCampaignResponse](../../models/operations/createsmscampaignresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## deleteSmsCampaign

Delete an SMS campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.smsCampaigns.deleteSmsCampaign({
    campaignId: 225721,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteSmsCampaignRequest](../../models/operations/deletesmscampaignrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteSmsCampaignResponse](../../models/operations/deletesmscampaignresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getSmsCampaign

Get an SMS campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.smsCampaigns.getSmsCampaign({
    campaignId: 704072,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetSmsCampaignRequest](../../models/operations/getsmscampaignrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetSmsCampaignResponse](../../models/operations/getsmscampaignresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getSmsCampaigns

Returns the information for all your created SMS campaigns

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetSmsCampaignsQueryParamSort, QueryParamStatus } from "BREVO/dist/models/operations";

async function run() {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.smsCampaigns.getSmsCampaigns({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetSmsCampaignsRequest](../../models/operations/getsmscampaignsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetSmsCampaignsResponse](../../models/operations/getsmscampaignsresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## requestSmsRecipientExport

It returns the background process ID which on completion calls the notify URL that you have set in the input.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { RequestSmsRecipientExportRecipientsType } from "BREVO/dist/models/components";

async function run() {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.smsCampaigns.requestSmsRecipientExport({
    campaignId: 946569,
    requestSmsRecipientExport: {
      notifyURL: "http://requestb.in/173lyyx1",
      recipientsType: RequestSmsRecipientExportRecipientsType.Answered,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.RequestSmsRecipientExportRequest](../../models/operations/requestsmsrecipientexportrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.RequestSmsRecipientExportResponse](../../models/operations/requestsmsrecipientexportresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## sendSmsCampaignNow

Send your SMS campaign immediately

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.smsCampaigns.sendSmsCampaignNow({
    campaignId: 697931,
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
| `request`                                                                                    | [operations.SendSmsCampaignNowRequest](../../models/operations/sendsmscampaignnowrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.SendSmsCampaignNowResponse](../../models/operations/sendsmscampaignnowresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,402,404       | application/json  |
| errors.SDKError   | 400-600           | */*               |

## sendSmsReport

Send report of Sent and Archived campaign, to the specified email addresses, with respective data and a pdf attachment in detail.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { SendReportLanguage } from "BREVO/dist/models/components";

async function run() {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.smsCampaigns.sendSmsReport({
    campaignId: 786011,
    sendReport: {
      email: {
        body: "Please find attached the report of our last email campaign.",
        to: [
          "j",
          "i",
          "m",
          ".",
          "s",
          "u",
          "e",
          "h",
          "a",
          "n",
          "@",
          "e",
          "x",
          "a",
          "m",
          "p",
          "l",
          "e",
          ".",
          "c",
          "o",
          "m",
        ],
      },
      language: SendReportLanguage.En,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.SendSmsReportRequest](../../models/operations/sendsmsreportrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.SendSmsReportResponse](../../models/operations/sendsmsreportresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## sendTestSms

Send a test SMS campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.smsCampaigns.sendTestSms({
    campaignId: 562258,
    sendTestSms: {
      phoneNumber: "33689965433",
    },
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
| `request`                                                                      | [operations.SendTestSmsRequest](../../models/operations/sendtestsmsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.SendTestSmsResponse](../../models/operations/sendtestsmsresponse.md)>**
### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.PostSendSmsTestFailed | 400                          | application/json             |
| errors.ErrorModel            | 404                          | application/json             |
| errors.SDKError              | 400-600                      | */*                          |

## updateSmsCampaign

Update an SMS campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.smsCampaigns.updateSmsCampaign({
    campaignId: 537860,
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
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateSmsCampaignRequest](../../models/operations/updatesmscampaignrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateSmsCampaignResponse](../../models/operations/updatesmscampaignresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## updateSmsCampaignStatus

Update a campaign's status

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateCampaignStatusStatus } from "BREVO/dist/models/components";

async function run() {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.smsCampaigns.updateSmsCampaignStatus({
    campaignId: 258044,
    updateCampaignStatus: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UpdateSmsCampaignStatusRequest](../../models/operations/updatesmscampaignstatusrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateSmsCampaignStatusResponse](../../models/operations/updatesmscampaignstatusresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |
