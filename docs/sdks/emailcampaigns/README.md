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
import { CreateEmailCampaignWinnerCriteria } from "BREVO/dist/sdk/models/shared";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.emailCampaigns.createEmailCampaign({
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
    winnerCriteria: CreateEmailCampaignWinnerCriteria.Open,
    winnerDelay: 50,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.emailCampaigns.deleteEmailCampaign({
    campaignId: 413690,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { EmailExportRecipientsRecipientsType } from "BREVO/dist/sdk/models/shared";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.emailCampaigns.emailExportRecipients({
    campaignId: 116313,
    emailExportRecipients: {
      notifyURL: "http://requestb.in/173lyyx1",
      recipientsType: EmailExportRecipientsRecipientsType.Openers,
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.emailCampaigns.getAbTestCampaignResult({
    campaignId: 968439,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetEmailCampaignStatistics } from "BREVO/dist/sdk/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.emailCampaigns.getEmailCampaign({
    campaignId: 715666,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
  GetEmailCampaignsSort,
  GetEmailCampaignsStatistics,
  GetEmailCampaignsStatus,
  GetEmailCampaignsType,
} from "BREVO/dist/sdk/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.emailCampaigns.getEmailCampaigns({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.emailCampaigns.getSharedTemplateUrl({
    campaignId: 374812,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.emailCampaigns.sendEmailCampaignNow({
    campaignId: 666463,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { SendReportLanguage } from "BREVO/dist/sdk/models/shared";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.emailCampaigns.sendReport({
    campaignId: 349447,
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
})();
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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.emailCampaigns.sendTestEmail({
    campaignId: 634623,
    sendTestEmail: {
      emailTo: [
        "h",
        "e",
        "l",
        "e",
        "n",
        ".",
        "j",
        "u",
        "r",
        "g",
        "e",
        "r",
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
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UpdateCampaignStatusStatus } from "BREVO/dist/sdk/models/shared";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.emailCampaigns.updateCampaignStatus({
    campaignId: 859791,
    updateCampaignStatus: {},
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UpdateEmailCampaignWinnerCriteria } from "BREVO/dist/sdk/models/shared";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.emailCampaigns.updateEmailCampaign({
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


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.emailCampaigns.uploadImageToGallery({
    imageUrl: "https://somedomain.com/image1.jpg",
    name: "nature.jpg",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.UploadImageToGallery](../../models/shared/uploadimagetogallery.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.UploadImageToGalleryResponse](../../models/operations/uploadimagetogalleryresponse.md)>**

