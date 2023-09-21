# EmailCampaigns

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
import { CreateEmailCampaignResponse } from "BREVO/dist/sdk/models/operations";
import { CreateEmailCampaignWinnerCriteria } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.emailCampaigns.createEmailCampaign({
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
    "eos": "voluptas",
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
  templateId: 69859,
  toField: "{FNAME} {LNAME}",
  unsubscriptionPageId: "62cbb7fabbe85021021aac52",
  updateFormId: "6313436b9ad40e23b371d095",
  utmCampaign: "NL_05_2017",
  winnerCriteria: CreateEmailCampaignWinnerCriteria.Open,
  winnerDelay: 50,
}).then((res: CreateEmailCampaignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.CreateEmailCampaign](../../models/shared/createemailcampaign.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreateEmailCampaignResponse](../../models/operations/createemailcampaignresponse.md)>**


## deleteEmailCampaign

Delete an email campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteEmailCampaignResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.emailCampaigns.deleteEmailCampaign({
  campaignId: 587600,
}).then((res: DeleteEmailCampaignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteEmailCampaignRequest](../../models/operations/deleteemailcampaignrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteEmailCampaignResponse](../../models/operations/deleteemailcampaignresponse.md)>**


## emailExportRecipients

Export the recipients of an email campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { EmailExportRecipientsResponse } from "BREVO/dist/sdk/models/operations";
import { EmailExportRecipientsRecipientsType } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.emailCampaigns.emailExportRecipients({
  campaignId: 9688,
  emailExportRecipients: {
    notifyURL: "http://requestb.in/173lyyx1",
    recipientsType: EmailExportRecipientsRecipientsType.Openers,
  },
}).then((res: EmailExportRecipientsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.EmailExportRecipientsRequest](../../models/operations/emailexportrecipientsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.EmailExportRecipientsResponse](../../models/operations/emailexportrecipientsresponse.md)>**


## getAbTestCampaignResult

Obtain winning version of an A/B test email campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetAbTestCampaignResultResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.emailCampaigns.getAbTestCampaignResult({
  campaignId: 272822,
}).then((res: GetAbTestCampaignResultResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetAbTestCampaignResultRequest](../../models/operations/getabtestcampaignresultrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetAbTestCampaignResultResponse](../../models/operations/getabtestcampaignresultresponse.md)>**


## getEmailCampaign

Get an email campaign report

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetEmailCampaignResponse, GetEmailCampaignStatistics } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.emailCampaigns.getEmailCampaign({
  campaignId: 892050,
  statistics: GetEmailCampaignStatistics.LinksStats,
}).then((res: GetEmailCampaignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetEmailCampaignRequest](../../models/operations/getemailcampaignrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetEmailCampaignResponse](../../models/operations/getemailcampaignresponse.md)>**


## getEmailCampaigns

Return all your created email campaigns

### Example Usage

```typescript
import { Brevo } from "BREVO";
import {
  GetEmailCampaignsExcludeHTMLContent,
  GetEmailCampaignsResponse,
  GetEmailCampaignsSort,
  GetEmailCampaignsStatistics,
  GetEmailCampaignsStatus,
  GetEmailCampaignsType,
} from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.emailCampaigns.getEmailCampaigns({
  endDate: "aspernatur",
  excludeHtmlContent: GetEmailCampaignsExcludeHTMLContent.True,
  limit: 779192,
  offset: 459856,
  sort: GetEmailCampaignsSort.Desc,
  startDate: "aperiam",
  statistics: GetEmailCampaignsStatistics.StatsByDomain,
  status: GetEmailCampaignsStatus.Draft,
  type: GetEmailCampaignsType.Classic,
}).then((res: GetEmailCampaignsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetEmailCampaignsRequest](../../models/operations/getemailcampaignsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetEmailCampaignsResponse](../../models/operations/getemailcampaignsresponse.md)>**


## getSharedTemplateUrl

Get a unique URL to share & import an email template from one Brevo account to another.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetSharedTemplateUrlResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.emailCampaigns.getSharedTemplateUrl({
  campaignId: 76956,
}).then((res: GetSharedTemplateUrlResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetSharedTemplateUrlRequest](../../models/operations/getsharedtemplateurlrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetSharedTemplateUrlResponse](../../models/operations/getsharedtemplateurlresponse.md)>**


## sendEmailCampaignNow

Send an email campaign immediately, based on campaignId

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { SendEmailCampaignNowResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.emailCampaigns.sendEmailCampaignNow({
  campaignId: 469498,
}).then((res: SendEmailCampaignNowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.SendEmailCampaignNowRequest](../../models/operations/sendemailcampaignnowrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.SendEmailCampaignNowResponse](../../models/operations/sendemailcampaignnowresponse.md)>**


## sendReport

A PDF will be sent to the specified email addresses

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { SendReportResponse } from "BREVO/dist/sdk/models/operations";
import { SendReportLanguage } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.emailCampaigns.sendReport({
  campaignId: 518835,
  sendReport: {
    email: {
      body: "Please find attached the report of our last email campaign.",
      to: [
        "jim.suehan@example.com",
      ],
    },
    language: SendReportLanguage.En,
  },
}).then((res: SendReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.SendReportRequest](../../models/operations/sendreportrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.SendReportResponse](../../models/operations/sendreportresponse.md)>**


## sendTestEmail

Send an email campaign to your test list

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { SendTestEmailResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.emailCampaigns.sendTestEmail({
  campaignId: 882710,
  sendTestEmail: {
    emailTo: [
      "helen.jurger@example.com",
    ],
  },
}).then((res: SendTestEmailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.SendTestEmailRequest](../../models/operations/sendtestemailrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.SendTestEmailResponse](../../models/operations/sendtestemailresponse.md)>**


## updateCampaignStatus

Update an email campaign status

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateCampaignStatusResponse } from "BREVO/dist/sdk/models/operations";
import { UpdateCampaignStatusStatus } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.emailCampaigns.updateCampaignStatus({
  campaignId: 306810,
  updateCampaignStatus: {
    status: UpdateCampaignStatusStatus.Sent,
  },
}).then((res: UpdateCampaignStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateCampaignStatusRequest](../../models/operations/updatecampaignstatusrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateCampaignStatusResponse](../../models/operations/updatecampaignstatusresponse.md)>**


## updateEmailCampaign

Update an email campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateEmailCampaignResponse } from "BREVO/dist/sdk/models/operations";
import { UpdateEmailCampaignWinnerCriteria } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.emailCampaigns.updateEmailCampaign({
  campaignId: 577543,
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
      "commodi": "sapiente",
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
}).then((res: UpdateEmailCampaignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateEmailCampaignRequest](../../models/operations/updateemailcampaignrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateEmailCampaignResponse](../../models/operations/updateemailcampaignresponse.md)>**


## uploadImageToGallery

Upload an image to your account's image gallery

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UploadImageToGalleryResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.emailCampaigns.uploadImageToGallery({
  imageUrl: "https://somedomain.com/image1.jpg",
  name: "nature.jpg",
}).then((res: UploadImageToGalleryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.UploadImageToGallery](../../models/shared/uploadimagetogallery.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.UploadImageToGalleryResponse](../../models/operations/uploadimagetogalleryresponse.md)>**

