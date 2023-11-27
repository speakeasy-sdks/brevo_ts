# TransactionalEmails
(*transactionalEmails*)

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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.blockNewDomain({
    domain: "example.com",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [components.BlockDomain](../../models/components/blockdomain.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.BlockNewDomainResponse](../../models/operations/blocknewdomainresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## createSmtpTemplate

Create an email template

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.createSmtpTemplate({
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
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [components.CreateSmtpTemplate](../../models/components/createsmtptemplate.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateSmtpTemplateResponse](../../models/operations/createsmtptemplateresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## deleteBlockedDomain

Unblocks an existing domain from the list of blocked domains

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.deleteBlockedDomain({
    domain: "unknown-cappuccino.name",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteBlockedDomainRequest](../../models/operations/deleteblockeddomainrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteBlockedDomainResponse](../../models/operations/deleteblockeddomainresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## deleteHardbounces

Delete hardbounces. To use carefully (e.g. in case of temporary ISP failures)

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.deleteHardbounces({
    contactEmail: "alex76@example.com",
    endDate: "2017-01-31",
    startDate: "2016-12-31",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [components.DeleteHardbounces](../../models/components/deletehardbounces.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteHardbouncesResponse](../../models/operations/deletehardbouncesresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## deleteScheduledEmailById

Delete scheduled batch of emails by batchId or single scheduled email by messageId

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.deleteScheduledEmailById({
    identifier: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.DeleteScheduledEmailByIdRequest](../../models/operations/deletescheduledemailbyidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.DeleteScheduledEmailByIdResponse](../../models/operations/deletescheduledemailbyidresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## deleteSmtpTemplate

Delete an inactive email template

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.deleteSmtpTemplate({
    templateId: 567614,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteSmtpTemplateRequest](../../models/operations/deletesmtptemplaterequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteSmtpTemplateResponse](../../models/operations/deletesmtptemplateresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## deleteSmtpBlockedContactsEmail

Unblock or resubscribe a transactional contact

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.deleteSmtpBlockedContactsEmail({
    email: "Francesco.Marks@yahoo.com",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeleteSmtpBlockedContactsEmailRequest](../../models/operations/deletesmtpblockedcontactsemailrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeleteSmtpBlockedContactsEmailResponse](../../models/operations/deletesmtpblockedcontactsemailresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## deleteSmtpLogMessageId

Delete an SMTP transactional log

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.deleteSmtpLogMessageId({
    messageId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.DeleteSmtpLogMessageIdRequest](../../models/operations/deletesmtplogmessageidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.DeleteSmtpLogMessageIdResponse](../../models/operations/deletesmtplogmessageidresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getAggregatedSmtpReport

This endpoint will show the aggregated stats for past 90 days by default if `startDate` and `endDate` OR `days` is not passed. The date range can not exceed 90 days

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.getAggregatedSmtpReport({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetAggregatedSmtpReportRequest](../../models/operations/getaggregatedsmtpreportrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetAggregatedSmtpReportResponse](../../models/operations/getaggregatedsmtpreportresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getBlockedDomains

Get the list of blocked domains

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.getBlockedDomains();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetBlockedDomainsResponse](../../models/operations/getblockeddomainsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getEmailEventReport

This endpoint will show the aggregated stats for past 30 days by default if `startDate` and `endDate` OR `days` is not passed. The date range can not exceed 90 days

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetEmailEventReportQueryParamEvent, GetEmailEventReportQueryParamSort } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.getEmailEventReport({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetEmailEventReportRequest](../../models/operations/getemaileventreportrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetEmailEventReportResponse](../../models/operations/getemaileventreportresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getScheduledEmailById

Fetch scheduled batch of emails by batchId or single scheduled email by messageId (Can retrieve data upto 30 days old)

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetScheduledEmailByIdQueryParamSort, GetScheduledEmailByIdQueryParamStatus } from "BREVO/dist/models/operations";
import { RFCDate } from "BREVO/dist/types";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.getScheduledEmailById({
    identifier: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetScheduledEmailByIdRequest](../../models/operations/getscheduledemailbyidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetScheduledEmailByIdResponse](../../models/operations/getscheduledemailbyidresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getSmtpReport

Get your transactional email activity aggregated per day

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetSmtpReportQueryParamSort } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.getSmtpReport({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetSmtpReportRequest](../../models/operations/getsmtpreportrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetSmtpReportResponse](../../models/operations/getsmtpreportresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getSmtpTemplate

Returns the template information

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.getSmtpTemplate({
    templateId: 397488,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetSmtpTemplateRequest](../../models/operations/getsmtptemplaterequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetSmtpTemplateResponse](../../models/operations/getsmtptemplateresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getSmtpTemplates

Get the list of email templates

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetSmtpTemplatesQueryParamSort } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.getSmtpTemplates({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetSmtpTemplatesRequest](../../models/operations/getsmtptemplatesrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetSmtpTemplatesResponse](../../models/operations/getsmtptemplatesresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getTransacBlockedContacts

Get the list of blocked or unsubscribed transactional contacts

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetTransacBlockedContactsQueryParamSort } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.getTransacBlockedContacts({
    senders: [
      "string",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetTransacBlockedContactsRequest](../../models/operations/gettransacblockedcontactsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetTransacBlockedContactsResponse](../../models/operations/gettransacblockedcontactsresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getTransacEmailContent

Get the personalized content of a sent transactional email

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.getTransacEmailContent({
    uuid: "566179bf-4e3e-496d-95b0-fe604c61ac51",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetTransacEmailContentRequest](../../models/operations/gettransacemailcontentrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetTransacEmailContentResponse](../../models/operations/gettransacemailcontentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTransacEmailsList

This endpoint will show the list of emails for past 30 days by default. To retrieve emails before that time, please pass startDate and endDate in query filters.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetTransacEmailsListQueryParamSort } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.getTransacEmailsList({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetTransacEmailsListRequest](../../models/operations/gettransacemailslistrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetTransacEmailsListResponse](../../models/operations/gettransacemailslistresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## sendTestTemplate

Send a template to your test list

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.sendTestTemplate({
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
    templateId: 320531,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.SendTestTemplateRequest](../../models/operations/sendtesttemplaterequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.SendTestTemplateResponse](../../models/operations/sendtesttemplateresponse.md)>**
### Errors

| Error Object          | Status Code           | Content Type          |
| --------------------- | --------------------- | --------------------- |
| errors.PostSendFailed | 400                   | application/json      |
| errors.ErrorModel     | 404                   | application/json      |
| errors.SDKError       | 400-600               | */*                   |

## sendTransacEmail

Send a transactional email

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.sendTransacEmail({
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
      "sender.ip": "string",
      "X-Mailin-custom": "string",
      "idempotencyKey": "string",
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
          "LNAME": "string",
          "FNAME": "string",
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
      "LNAME": "string",
      "FNAME": "string",
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
      "t",
      "a",
      "g",
      "1",
    ],
    templateId: 2,
    textContent: "Please confirm your email address by clicking on the link https://text.domain.com",
    to: [
      {
        email: "jimmy98@example.com",
        name: "Jimmy",
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [components.SendSmtpEmail](../../models/components/sendsmtpemail.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.SendTransacEmailResponse](../../models/operations/sendtransacemailresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## updateSmtpTemplate

Update an email template

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.transactionalEmails.updateSmtpTemplate({
    templateId: 604767,
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
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateSmtpTemplateRequest](../../models/operations/updatesmtptemplaterequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateSmtpTemplateResponse](../../models/operations/updatesmtptemplateresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |
