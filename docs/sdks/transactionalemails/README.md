# TransactionalEmails

### Available Operations

* [blockNewDomain](#blocknewdomain) - Add a new domain to the list of blocked domains
* [createSmtpTemplate](#createsmtptemplate) - Create an email template
* [deleteBlockedDomain](#deleteblockeddomain) - Unblock an existing domain from the list of blocked domains
* [deleteHardbounces](#deletehardbounces) - Delete hardbounces
* [deleteScheduledEmailById](#deletescheduledemailbyid) - Delete scheduled emails by batchId or messageId
* [deleteSmtpTemplate](#deletesmtptemplate) - Delete an inactive email template
* [deleteSmtpBlockedContactsEmail](#deletesmtpblockedcontactsemail) - Unblock or resubscribe a transactional contact
* [deleteSmtpLogMessageId](#deletesmtplogmessageid) - Delete an SMTP transactional log
* [getAggregatedSmtpReport](#getaggregatedsmtpreport) - Get your transactional email activity aggregated over a period of time
* [getBlockedDomains](#getblockeddomains) - Get the list of blocked domains
* [getEmailEventReport](#getemaileventreport) - Get all your transactional email activity (unaggregated events)
* [getScheduledEmailById](#getscheduledemailbyid) - Fetch scheduled emails by batchId or messageId
* [getSmtpReport](#getsmtpreport) - Get your transactional email activity aggregated per day
* [getSmtpTemplate](#getsmtptemplate) - Returns the template information
* [getSmtpTemplates](#getsmtptemplates) - Get the list of email templates
* [getTransacBlockedContacts](#gettransacblockedcontacts) - Get the list of blocked or unsubscribed transactional contacts
* [getTransacEmailContent](#gettransacemailcontent) - Get the personalized content of a sent transactional email
* [getTransacEmailsList](#gettransacemailslist) - Get the list of transactional emails on the basis of allowed filters
* [sendTestTemplate](#sendtesttemplate) - Send a template to your test list
* [sendTransacEmail](#sendtransacemail) - Send a transactional email
* [updateSmtpTemplate](#updatesmtptemplate) - Update an email template

## blockNewDomain

Blocks a new domain in order to avoid messages being sent to the same

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { BlockNewDomainResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.blockNewDomain({
  domain: "example.com",
}).then((res: BlockNewDomainResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.BlockDomain](../../models/shared/blockdomain.md)     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.BlockNewDomainResponse](../../models/operations/blocknewdomainresponse.md)>**


## createSmtpTemplate

Create an email template

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { CreateSmtpTemplateResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.createSmtpTemplate({
  attachmentUrl: "https://attachment.domain.com",
  htmlContent: "The order n°xxxxx has been confirmed. Thanks for your purchase",
  htmlUrl: "https://html.domain.com",
  isActive: true,
  replyTo: "support@myshop.com",
  sender: {
    email: "contact@myshop.com",
    id: 3,
    name: "Mary from MyShop",
  },
  subject: "Thanks for your purchase !",
  tag: "OrderConfirmation",
  templateName: "Order Confirmation - EN",
  toField: "{FNAME} {LNAME}",
}).then((res: CreateSmtpTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.CreateSmtpTemplate](../../models/shared/createsmtptemplate.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.CreateSmtpTemplateResponse](../../models/operations/createsmtptemplateresponse.md)>**


## deleteBlockedDomain

Unblocks an existing domain from the list of blocked domains

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteBlockedDomainResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.deleteBlockedDomain({
  domain: "cupiditate",
}).then((res: DeleteBlockedDomainResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteBlockedDomainRequest](../../models/operations/deleteblockeddomainrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteBlockedDomainResponse](../../models/operations/deleteblockeddomainresponse.md)>**


## deleteHardbounces

Delete hardbounces. To use carefully (e.g. in case of temporary ISP failures)

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteHardbouncesResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.deleteHardbounces({
  contactEmail: "alex76@example.com",
  endDate: "2017-01-31",
  startDate: "2016-12-31",
}).then((res: DeleteHardbouncesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.DeleteHardbounces](../../models/shared/deletehardbounces.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.DeleteHardbouncesResponse](../../models/operations/deletehardbouncesresponse.md)>**


## deleteScheduledEmailById

Delete scheduled batch of emails by batchId or single scheduled email by messageId

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteScheduledEmailByIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.deleteScheduledEmailById({
  identifier: "provident",
}).then((res: DeleteScheduledEmailByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.DeleteScheduledEmailByIdRequest](../../models/operations/deletescheduledemailbyidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.DeleteScheduledEmailByIdResponse](../../models/operations/deletescheduledemailbyidresponse.md)>**


## deleteSmtpTemplate

Delete an inactive email template

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteSmtpTemplateResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.deleteSmtpTemplate({
  templateId: 936469,
}).then((res: DeleteSmtpTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteSmtpTemplateRequest](../../models/operations/deletesmtptemplaterequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteSmtpTemplateResponse](../../models/operations/deletesmtptemplateresponse.md)>**


## deleteSmtpBlockedContactsEmail

Unblock or resubscribe a transactional contact

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteSmtpBlockedContactsEmailResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.deleteSmtpBlockedContactsEmail({
  email: "Triston93@hotmail.com",
}).then((res: DeleteSmtpBlockedContactsEmailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeleteSmtpBlockedContactsEmailRequest](../../models/operations/deletesmtpblockedcontactsemailrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeleteSmtpBlockedContactsEmailResponse](../../models/operations/deletesmtpblockedcontactsemailresponse.md)>**


## deleteSmtpLogMessageId

Delete an SMTP transactional log

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteSmtpLogMessageIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.deleteSmtpLogMessageId({
  messageId: "perspiciatis",
}).then((res: DeleteSmtpLogMessageIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.DeleteSmtpLogMessageIdRequest](../../models/operations/deletesmtplogmessageidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.DeleteSmtpLogMessageIdResponse](../../models/operations/deletesmtplogmessageidresponse.md)>**


## getAggregatedSmtpReport

This endpoint will show the aggregated stats for past 90 days by default if `startDate` and `endDate` OR `days` is not passed. The date range can not exceed 90 days

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetAggregatedSmtpReportResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.getAggregatedSmtpReport({
  days: 983427,
  endDate: "debitis",
  startDate: "aliquid",
  tag: "porro",
}).then((res: GetAggregatedSmtpReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetAggregatedSmtpReportRequest](../../models/operations/getaggregatedsmtpreportrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetAggregatedSmtpReportResponse](../../models/operations/getaggregatedsmtpreportresponse.md)>**


## getBlockedDomains

Get the list of blocked domains

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetBlockedDomainsResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.getBlockedDomains().then((res: GetBlockedDomainsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetBlockedDomainsResponse](../../models/operations/getblockeddomainsresponse.md)>**


## getEmailEventReport

This endpoint will show the aggregated stats for past 30 days by default if `startDate` and `endDate` OR `days` is not passed. The date range can not exceed 90 days

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetEmailEventReportEvent, GetEmailEventReportResponse, GetEmailEventReportSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.getEmailEventReport({
  days: 380335,
  email: "Caleb.Runolfsdottir65@gmail.com",
  endDate: "necessitatibus",
  event: GetEmailEventReportEvent.Error,
  limit: 8931,
  messageId: "quasi",
  offset: 90233,
  sort: GetEmailEventReportSort.Asc,
  startDate: "natus",
  tags: "occaecati",
  templateId: 382440,
}).then((res: GetEmailEventReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetEmailEventReportRequest](../../models/operations/getemaileventreportrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetEmailEventReportResponse](../../models/operations/getemaileventreportresponse.md)>**


## getScheduledEmailById

Fetch scheduled batch of emails by batchId or single scheduled email by messageId (Can retrieve data upto 30 days old)

### Example Usage

```typescript
import { Brevo } from "BREVO";
import {
  GetScheduledEmailByIdResponse,
  GetScheduledEmailByIdSort,
  GetScheduledEmailByIdStatus,
} from "BREVO/dist/sdk/models/operations";
import { RFCDate } from "BREVO/dist/sdk/types";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.getScheduledEmailById({
  endDate: new RFCDate("2022-11-26"),
  identifier: "magni",
  limit: 984934,
  offset: 859581,
  sort: GetScheduledEmailByIdSort.Desc,
  startDate: new RFCDate("2022-09-24"),
  status: GetScheduledEmailByIdStatus.InProgress,
}).then((res: GetScheduledEmailByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetScheduledEmailByIdRequest](../../models/operations/getscheduledemailbyidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetScheduledEmailByIdResponse](../../models/operations/getscheduledemailbyidresponse.md)>**


## getSmtpReport

Get your transactional email activity aggregated per day

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetSmtpReportResponse, GetSmtpReportSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.getSmtpReport({
  days: 473190,
  endDate: "dicta",
  limit: 479754,
  offset: 457059,
  sort: GetSmtpReportSort.Desc,
  startDate: "maiores",
  tag: "reiciendis",
}).then((res: GetSmtpReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetSmtpReportRequest](../../models/operations/getsmtpreportrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetSmtpReportResponse](../../models/operations/getsmtpreportresponse.md)>**


## getSmtpTemplate

Returns the template information

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetSmtpTemplateResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.getSmtpTemplate({
  templateId: 423706,
}).then((res: GetSmtpTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetSmtpTemplateRequest](../../models/operations/getsmtptemplaterequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetSmtpTemplateResponse](../../models/operations/getsmtptemplateresponse.md)>**


## getSmtpTemplates

Get the list of email templates

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetSmtpTemplatesResponse, GetSmtpTemplatesSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.getSmtpTemplates({
  limit: 99958,
  offset: 857125,
  sort: GetSmtpTemplatesSort.Asc,
  templateStatus: false,
}).then((res: GetSmtpTemplatesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetSmtpTemplatesRequest](../../models/operations/getsmtptemplatesrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetSmtpTemplatesResponse](../../models/operations/getsmtptemplatesresponse.md)>**


## getTransacBlockedContacts

Get the list of blocked or unsubscribed transactional contacts

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetTransacBlockedContactsResponse, GetTransacBlockedContactsSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.getTransacBlockedContacts({
  endDate: "dicta",
  limit: 483706,
  offset: 271252,
  senders: [
    "esse",
  ],
  sort: GetTransacBlockedContactsSort.Asc,
  startDate: "consectetur",
}).then((res: GetTransacBlockedContactsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetTransacBlockedContactsRequest](../../models/operations/gettransacblockedcontactsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetTransacBlockedContactsResponse](../../models/operations/gettransacblockedcontactsresponse.md)>**


## getTransacEmailContent

Get the personalized content of a sent transactional email

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetTransacEmailContentResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.getTransacEmailContent({
  uuid: "60a15db6-a660-4659-a1ad-eaab5851d6c6",
}).then((res: GetTransacEmailContentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetTransacEmailContentRequest](../../models/operations/gettransacemailcontentrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetTransacEmailContentResponse](../../models/operations/gettransacemailcontentresponse.md)>**


## getTransacEmailsList

This endpoint will show the list of emails for past 30 days by default. To retrieve emails before that time, please pass startDate and endDate in query filters.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetTransacEmailsListResponse, GetTransacEmailsListSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.getTransacEmailsList({
  email: "Emmie56@gmail.com",
  endDate: "cum",
  limit: 399660,
  messageId: "beatae",
  offset: 530860,
  sort: GetTransacEmailsListSort.Desc,
  startDate: "veritatis",
  templateId: 703218,
}).then((res: GetTransacEmailsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetTransacEmailsListRequest](../../models/operations/gettransacemailslistrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetTransacEmailsListResponse](../../models/operations/gettransacemailslistresponse.md)>**


## sendTestTemplate

Send a template to your test list

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { SendTestTemplateResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.sendTestTemplate({
  sendTestEmail: {
    emailTo: [
      "helen.jurger@example.com",
    ],
  },
  templateId: 665678,
}).then((res: SendTestTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.SendTestTemplateRequest](../../models/operations/sendtesttemplaterequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.SendTestTemplateResponse](../../models/operations/sendtesttemplateresponse.md)>**


## sendTransacEmail

Send a transactional email

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { SendTransacEmailResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.sendTransacEmail({
  attachment: [
    {
      content: "b3JkZXIucGRm",
      name: "myAttachment.png",
      url: "https://attachment.domain.com/myAttachmentFromUrl.jpg",
    },
  ],
  batchId: "5c6cfa04-eed9-42c2-8b5c-6d470d978e9d",
  bcc: [
    {
      email: "helen9766@example.com",
      name: "Helen",
    },
  ],
  cc: [
    {
      email: "ann6533@example.com",
      name: "Ann",
    },
  ],
  headers: {
    "culpa": "voluptatem",
  },
  htmlContent: "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>",
  messageVersions: [
    {
      bcc: [
        {
          email: "helen9766@example.com",
          name: "Helen",
        },
      ],
      cc: [
        {
          email: "ann6533@example.com",
          name: "Ann",
        },
      ],
      params: {
        "sapiente": "officiis",
      },
      replyTo: {
        email: "ann6533@example.com",
        name: "Ann",
      },
      subject: "Login Email confirmation",
      to: [
        {
          email: "jimmy98@example.com",
          name: "Jimmy",
        },
      ],
    },
  ],
  params: {
    "architecto": "fuga",
  },
  replyTo: {
    email: "ann6533@example.com",
    name: "Ann",
  },
  scheduledAt: new Date("2022-04-05T12:30:00+02:00"),
  sender: {
    email: "no-reply@myshop.com",
    id: 2,
    name: "Mary from MyShop",
  },
  subject: "Login Email confirmation",
  tags: [
    "tag1",
  ],
  templateId: 2,
  textContent: "Please confirm your email address by clicking on the link https://text.domain.com",
  to: [
    {
      email: "jimmy98@example.com",
      name: "Jimmy",
    },
  ],
}).then((res: SendTransacEmailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.SendSmtpEmail](../../models/shared/sendsmtpemail.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SendTransacEmailResponse](../../models/operations/sendtransacemailresponse.md)>**


## updateSmtpTemplate

Update an email template

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateSmtpTemplateResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.transactionalEmails.updateSmtpTemplate({
  templateId: 867168,
  updateSmtpTemplate: {
    attachmentUrl: "https://attachment.domain.com",
    htmlContent: "The order n°xxxxx has been confirmed. Thanks for your purchase",
    htmlUrl: "https://html.domain.com",
    isActive: true,
    replyTo: "support@myshop.com",
    sender: {
      email: "contact@myshop.com",
      id: 3,
      name: "Mary from MyShop",
    },
    subject: "Thanks for your purchase !",
    tag: "OrderConfirmation",
    templateName: "Order Confirmation - EN",
    toField: "{FNAME} {LNAME}",
  },
}).then((res: UpdateSmtpTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateSmtpTemplateRequest](../../models/operations/updatesmtptemplaterequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateSmtpTemplateResponse](../../models/operations/updatesmtptemplateresponse.md)>**

