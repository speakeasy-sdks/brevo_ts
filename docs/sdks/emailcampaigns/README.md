# EmailCampaigns
(*emailCampaigns*)

### Available Operations

* [createEmailCampaign](#createemailcampaign) - Create an email campaign
* [deleteEmailCampaign](#deleteemailcampaign) - Delete an email campaign
* [emailExportRecipients](#emailexportrecipients) - Export the recipients of an email campaign
* [getAbTestCampaignResult](#getabtestcampaignresult) - Get an A/B test email campaign results
* [getEmailCampaign](#getemailcampaign) - Get an email campaign report
* [getEmailCampaigns](#getemailcampaigns) - Return all your created email campaigns
* [getSharedTemplateUrl](#getsharedtemplateurl) - Get a shared template url
* [sendEmailCampaignNow](#sendemailcampaignnow) - Send an email campaign immediately, based on campaignId
* [sendReport](#sendreport) - Send the report of a campaign
* [sendTestEmail](#sendtestemail) - Send an email campaign to your test list
* [updateCampaignStatus](#updatecampaignstatus) - Update an email campaign status
* [updateEmailCampaign](#updateemailcampaign) - Update an email campaign
* [uploadImageToGallery](#uploadimagetogallery) - Upload an image to your account's image gallery

## createEmailCampaign

Create an email campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { WinnerCriteria } from "BREVO/models/components";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.emailCampaigns.createEmailCampaign({
    abTesting: true,
    attachmentUrl: "https://attachment.domain.com",
    footer: "[DEFAULT_FOOTER]",
    header: "[DEFAULT_HEADER]",
    htmlContent: "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>",
    htmlUrl: "https://html.domain.com",
    increaseRate: 70,
    initialQuota: 3000,
    inlineImageActivation: true,
    ipWarmupEnable: true,
    mirrorActive: true,
    name: "Newsletter - May 2017",
    params: {
      "FNAME": "string",
      "LNAME": "string",
    },
    previewText: "Thanks for your order!",
    recipients: {
      exclusionListIds: [
        8,
      ],
      listIds: [
        32,
      ],
      segmentIds: [
        23,
      ],
    },
    replyTo: "support@myshop.com",
    scheduledAt: "2017-06-01T12:30:00+02:00",
    sendAtBestTime: true,
    sender: {
      email: "newsletter@myshop.com",
      id: 3,
      name: "Mary from MyShop",
    },
    splitRule: 50,
    subject: "Discover the New Collection !",
    subjectA: "Discover the New Collection!",
    subjectB: "Want to discover the New Collection?",
    tag: "Newsletter",
    toField: "{FNAME} {LNAME}",
    unsubscriptionPageId: "62cbb7fabbe85021021aac52",
    updateFormId: "6313436b9ad40e23b371d095",
    utmCampaign: "NL_05_2017",
    winnerCriteria: WinnerCriteria.Open,
    winnerDelay: 50,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateEmailCampaign](../../models/components/createemailcampaign.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateEmailCampaignResponse](../../models/operations/createemailcampaignresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## deleteEmailCampaign

Delete an email campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.emailCampaigns.deleteEmailCampaign({
    campaignId: 413690,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteEmailCampaignRequest](../../models/operations/deleteemailcampaignrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteEmailCampaignResponse](../../models/operations/deleteemailcampaignresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## emailExportRecipients

Export the recipients of an email campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { RecipientsType } from "BREVO/models/components";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.emailCampaigns.emailExportRecipients({
    campaignId: 116313,
    emailExportRecipients: {
      notifyURL: "http://requestb.in/173lyyx1",
      recipientsType: RecipientsType.Openers,
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EmailExportRecipientsRequest](../../models/operations/emailexportrecipientsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.EmailExportRecipientsResponse](../../models/operations/emailexportrecipientsresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## getAbTestCampaignResult

Obtain winning version of an A/B test email campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.emailCampaigns.getAbTestCampaignResult({
    campaignId: 968439,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAbTestCampaignResultRequest](../../models/operations/getabtestcampaignresultrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetAbTestCampaignResultResponse](../../models/operations/getabtestcampaignresultresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## getEmailCampaign

Get an email campaign report

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { Statistics } from "BREVO/models/operations";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.emailCampaigns.getEmailCampaign({
    campaignId: 715666,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEmailCampaignRequest](../../models/operations/getemailcampaignrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetEmailCampaignResponse](../../models/operations/getemailcampaignresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## getEmailCampaigns

Return all your created email campaigns

### Example Usage

```typescript
import { Brevo } from "BREVO";
import {
  ExcludeHtmlContent,
  GetEmailCampaignsQueryParamSort,
  QueryParamStatistics,
  Status,
  Type,
} from "BREVO/models/operations";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.emailCampaigns.getEmailCampaigns({});

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEmailCampaignsRequest](../../models/operations/getemailcampaignsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetEmailCampaignsResponse](../../models/operations/getemailcampaignsresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## getSharedTemplateUrl

Get a unique URL to share & import an email template from one Brevo account to another.

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.emailCampaigns.getSharedTemplateUrl({
    campaignId: 374812,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSharedTemplateUrlRequest](../../models/operations/getsharedtemplateurlrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetSharedTemplateUrlResponse](../../models/operations/getsharedtemplateurlresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404,405       | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## sendEmailCampaignNow

Send an email campaign immediately, based on campaignId

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.emailCampaigns.sendEmailCampaignNow({
    campaignId: 666463,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SendEmailCampaignNowRequest](../../models/operations/sendemailcampaignnowrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.SendEmailCampaignNowResponse](../../models/operations/sendemailcampaignnowresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,402,404       | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## sendReport

A PDF will be sent to the specified email addresses

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { SendReportLanguage } from "BREVO/models/components";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.emailCampaigns.sendReport({
    campaignId: 349447,
    sendReport: {
      email: {
        body: "Please find attached the report of our last email campaign.",
        to: [
          "jim.suehan@example.com",
        ],
      },
      language: SendReportLanguage.En,
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SendReportRequest](../../models/operations/sendreportrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.SendReportResponse](../../models/operations/sendreportresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## sendTestEmail

Send an email campaign to your test list

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.emailCampaigns.sendTestEmail({
    campaignId: 634623,
    sendTestEmail: {
      emailTo: [
        "helen.jurger@example.com",
      ],
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SendTestEmailRequest](../../models/operations/sendtestemailrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.SendTestEmailResponse](../../models/operations/sendtestemailresponse.md)>**
### Errors

| Error Object          | Status Code           | Content Type          |
| --------------------- | --------------------- | --------------------- |
| errors.PostSendFailed | 400,404               | application/json      |
| errors.SDKError       | 4xx-5xx               | */*                   |

## updateCampaignStatus

Update an email campaign status

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateCampaignStatusStatus } from "BREVO/models/components";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.emailCampaigns.updateCampaignStatus({
    campaignId: 859791,
    updateCampaignStatus: {},
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCampaignStatusRequest](../../models/operations/updatecampaignstatusrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateCampaignStatusResponse](../../models/operations/updatecampaignstatusresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## updateEmailCampaign

Update an email campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateEmailCampaignWinnerCriteria } from "BREVO/models/components";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.emailCampaigns.updateEmailCampaign({
    campaignId: 130470,
    updateEmailCampaign: {
      abTesting: true,
      attachmentUrl: "https://attachment.domain.com",
      footer: "[DEFAULT_FOOTER]",
      header: "[DEFAULT_HEADER]",
      htmlContent: "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>",
      htmlUrl: "https://html.domain.com",
      increaseRate: 70,
      initialQuota: 3000,
      inlineImageActivation: true,
      ipWarmupEnable: true,
      mirrorActive: true,
      name: "Newsletter - May 2017",
      params: {
        "FNAME": "string",
        "LNAME": "string",
      },
      previewText: "Thanks for your order!",
      recipients: {
        exclusionListIds: [
          8,
        ],
        listIds: [
          32,
        ],
        segmentIds: [
          23,
        ],
      },
      recurring: false,
      replyTo: "support@myshop.com",
      scheduledAt: "2017-06-01T12:30:00+02:00",
      sendAtBestTime: true,
      sender: {
        email: "newsletter@myshop.com",
        id: 3,
        name: "Mary from MyShop",
      },
      splitRule: 50,
      subject: "Discover the New Collection !",
      subjectA: "Discover the New Collection!",
      subjectB: "Want to discover the New Collection?",
      tag: "Newsletter",
      toField: "{FNAME} {LNAME}",
      unsubscriptionPageId: "62cbb7fabbe85021021aac52",
      updateFormId: "6313436b9ad40e23b371d095",
      utmCampaign: "NL_05_2017",
      winnerCriteria: UpdateEmailCampaignWinnerCriteria.Open,
      winnerDelay: 50,
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateEmailCampaignRequest](../../models/operations/updateemailcampaignrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateEmailCampaignResponse](../../models/operations/updateemailcampaignresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## uploadImageToGallery

Upload an image to your account's image gallery

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.emailCampaigns.uploadImageToGallery({
    imageUrl: "https://somedomain.com/image1.jpg",
    name: "nature.jpg",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.UploadImageToGallery](../../models/components/uploadimagetogallery.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UploadImageToGalleryResponse](../../models/operations/uploadimagetogalleryresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |
