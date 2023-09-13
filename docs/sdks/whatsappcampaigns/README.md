# whatsAppCampaigns

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
import { CreateWhatsAppCampaignResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.whatsAppCampaigns.createWhatsAppCampaign({
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
}).then((res: CreateWhatsAppCampaignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CreateWhatsAppTemplateResponse } from "BREVO/dist/sdk/models/operations";
import { CreateWhatsAppTemplateCategory } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.whatsAppCampaigns.createWhatsAppTemplate({
  bodyText: "making it look like readable English",
  category: CreateWhatsAppTemplateCategory.Marketing,
  headerText: "Test WhatsApp campaign",
  language: "en",
  mediaUrl: "https://attachment.domain.com",
  name: "Test template",
}).then((res: CreateWhatsAppTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteWhatsAppCampaignResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.whatsAppCampaigns.deleteWhatsAppCampaign({
  campaignId: 992074,
}).then((res: DeleteWhatsAppCampaignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { GetWhatsAppCampaignResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.whatsAppCampaigns.getWhatsAppCampaign({
  campaignId: 190567,
}).then((res: GetWhatsAppCampaignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { GetWhatsAppCampaignsResponse, GetWhatsAppCampaignsSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.whatsAppCampaigns.getWhatsAppCampaigns({
  endDate: "ullam",
  limit: 19122,
  offset: 848341,
  sort: GetWhatsAppCampaignsSort.Desc,
  startDate: "impedit",
}).then((res: GetWhatsAppCampaignsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { GetWhatsAppConfigResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.whatsAppCampaigns.getWhatsAppConfig().then((res: GetWhatsAppConfigResponse) => {
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

**Promise<[operations.GetWhatsAppConfigResponse](../../models/operations/getwhatsappconfigresponse.md)>**


## getWhatsAppTemplates

Return all your created WhatsApp templates

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetWhatsAppTemplatesResponse, GetWhatsAppTemplatesSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.whatsAppCampaigns.getWhatsAppTemplates({
  endDate: "quibusdam",
  limit: 720528,
  offset: 373216,
  sort: GetWhatsAppTemplatesSort.Desc,
  startDate: "dolor",
}).then((res: GetWhatsAppTemplatesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { SendWhatsAppTemplateApprovalResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.whatsAppCampaigns.sendWhatsAppTemplateApproval({
  templateId: 307376,
}).then((res: SendWhatsAppTemplateApprovalResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateWhatsAppCampaignResponse } from "BREVO/dist/sdk/models/operations";
import { UpdateWhatsAppCampaignCampaignStatus } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.whatsAppCampaigns.updateWhatsAppCampaign({
  campaignId: 80532,
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
}).then((res: UpdateWhatsAppCampaignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateWhatsAppCampaignRequest](../../models/operations/updatewhatsappcampaignrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateWhatsAppCampaignResponse](../../models/operations/updatewhatsappcampaignresponse.md)>**

