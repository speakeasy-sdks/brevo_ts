# WhatsAppCampaigns
(*whatsAppCampaigns*)

### Available Operations

* [createWhatsAppCampaign](#createwhatsappcampaign) - Create and Send a WhatsApp campaign
* [createWhatsAppTemplate](#createwhatsapptemplate) - Create a WhatsApp template
* [deleteWhatsAppCampaign](#deletewhatsappcampaign) - Delete a WhatsApp campaign
* [getWhatsAppCampaign](#getwhatsappcampaign) - Get a WhatsApp campaign
* [getWhatsAppCampaigns](#getwhatsappcampaigns) - Return all your created WhatsApp campaigns
* [getWhatsAppConfig](#getwhatsappconfig) - Get your WhatsApp API account information
* [getWhatsAppTemplates](#getwhatsapptemplates) - Return all your created WhatsApp templates
* [sendWhatsAppTemplateApproval](#sendwhatsapptemplateapproval) - Send your WhatsApp template for approval
* [updateWhatsAppCampaign](#updatewhatsappcampaign) - Update a WhatsApp campaign

## createWhatsAppCampaign

Create and Send a WhatsApp campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.whatsAppCampaigns.createWhatsAppCampaign({
    name: "Test Campaign",
    recipients: {
      excludedListIds: [
        8,
      ],
      listIds: [
        32,
      ],
      segments: [
        23,
      ],
    },
    scheduledAt: "2017-06-01T12:30:00+02:00",
    templateId: 19,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.CreateWhatsAppCampaign](../../models/shared/createwhatsappcampaign.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateWhatsAppCampaignResponse](../../models/operations/createwhatsappcampaignresponse.md)>**


## createWhatsAppTemplate

Create a WhatsApp template

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { CreateWhatsAppTemplateCategory } from "BREVO/dist/sdk/models/shared";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.whatsAppCampaigns.createWhatsAppTemplate({
    bodyText: "making it look like readable English",
    category: CreateWhatsAppTemplateCategory.Marketing,
    headerText: "Test WhatsApp campaign",
    language: "en",
    mediaUrl: "https://attachment.domain.com",
    name: "Test template",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.CreateWhatsAppTemplate](../../models/shared/createwhatsapptemplate.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateWhatsAppTemplateResponse](../../models/operations/createwhatsapptemplateresponse.md)>**


## deleteWhatsAppCampaign

Delete a WhatsApp campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.whatsAppCampaigns.deleteWhatsAppCampaign({
    campaignId: 789504,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.DeleteWhatsAppCampaignRequest](../../models/operations/deletewhatsappcampaignrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.DeleteWhatsAppCampaignResponse](../../models/operations/deletewhatsappcampaignresponse.md)>**


## getWhatsAppCampaign

Get a WhatsApp campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.whatsAppCampaigns.getWhatsAppCampaign({
    campaignId: 179428,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetWhatsAppCampaignRequest](../../models/operations/getwhatsappcampaignrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetWhatsAppCampaignResponse](../../models/operations/getwhatsappcampaignresponse.md)>**


## getWhatsAppCampaigns

Return all your created WhatsApp campaigns

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetWhatsAppCampaignsSort } from "BREVO/dist/sdk/models/operations";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.whatsAppCampaigns.getWhatsAppCampaigns({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetWhatsAppCampaignsRequest](../../models/operations/getwhatsappcampaignsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetWhatsAppCampaignsResponse](../../models/operations/getwhatsappcampaignsresponse.md)>**


## getWhatsAppConfig

Get your WhatsApp API account information

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.whatsAppCampaigns.getWhatsAppConfig();

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

**Promise<[operations.GetWhatsAppConfigResponse](../../models/operations/getwhatsappconfigresponse.md)>**


## getWhatsAppTemplates

Return all your created WhatsApp templates

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetWhatsAppTemplatesSort } from "BREVO/dist/sdk/models/operations";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.whatsAppCampaigns.getWhatsAppTemplates({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetWhatsAppTemplatesRequest](../../models/operations/getwhatsapptemplatesrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetWhatsAppTemplatesResponse](../../models/operations/getwhatsapptemplatesresponse.md)>**


## sendWhatsAppTemplateApproval

Send your WhatsApp template for approval

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.whatsAppCampaigns.sendWhatsAppTemplateApproval({
    templateId: 576759,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.SendWhatsAppTemplateApprovalRequest](../../models/operations/sendwhatsapptemplateapprovalrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.SendWhatsAppTemplateApprovalResponse](../../models/operations/sendwhatsapptemplateapprovalresponse.md)>**


## updateWhatsAppCampaign

Update a WhatsApp campaign

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateWhatsAppCampaignCampaignStatus } from "BREVO/dist/sdk/models/shared";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.whatsAppCampaigns.updateWhatsAppCampaign({
    campaignId: 898516,
    updateWhatsAppCampaign: {
      campaignName: "Test WhatsApp",
      campaignStatus: UpdateWhatsAppCampaignCampaignStatus.Scheduled,
      recipients: {
        excludedListIds: [
          8,
        ],
        listIds: [
          32,
        ],
        segments: [
          23,
        ],
      },
      rescheduleFor: "2017-06-01T12:30:00+02:00",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateWhatsAppCampaignRequest](../../models/operations/updatewhatsappcampaignrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateWhatsAppCampaignResponse](../../models/operations/updatewhatsappcampaignresponse.md)>**

