# Deals

### Available Operations

* [deleteCrmDealsId](#deletecrmdealsid) - Delete a deal
* [getCrmAttributesDeals](#getcrmattributesdeals) - Get deal attributes
* [getCrmDeals](#getcrmdeals) - Get all deals
* [getCrmDealsId](#getcrmdealsid) - Get a deal
* [~~getCrmPipelineDetails~~](#getcrmpipelinedetails) - Get pipeline stages :warning: **Deprecated**
* [getCrmPipelineDetailsAll](#getcrmpipelinedetailsall) - Get all pipelines
* [getCrmPipelineDetailsPipelineID](#getcrmpipelinedetailspipelineid) - Get a pipeline
* [patchCrmDealsLinkUnlinkId](#patchcrmdealslinkunlinkid) - Link and Unlink a deal with contacts and companies
* [patchCrmDealsId](#patchcrmdealsid) - Update a deal
* [postCrmDeals](#postcrmdeals) - Create a deal

## deleteCrmDealsId

Delete a deal

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteCrmDealsIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.deals.deleteCrmDealsId({
  id: "e5e6a95d-8a0d-4446-8e2a-f7a73cf3be45",
}).then((res: DeleteCrmDealsIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteCrmDealsIdRequest](../../models/operations/deletecrmdealsidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteCrmDealsIdResponse](../../models/operations/deletecrmdealsidresponse.md)>**


## getCrmAttributesDeals

Get deal attributes

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmAttributesDealsResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.deals.getCrmAttributesDeals().then((res: GetCrmAttributesDealsResponse) => {
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

**Promise<[operations.GetCrmAttributesDealsResponse](../../models/operations/getcrmattributesdealsresponse.md)>**


## getCrmDeals

Get all deals

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmDealsResponse, GetCrmDealsSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.deals.getCrmDeals({
  filtersAttributesDealName: "dolorem",
  filtersLinkedCompaniesIds: "sapiente",
  filtersLinkedContactsIds: "totam",
  limit: 471752,
  offset: 25662,
  sort: GetCrmDealsSort.Desc,
}).then((res: GetCrmDealsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetCrmDealsRequest](../../models/operations/getcrmdealsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetCrmDealsResponse](../../models/operations/getcrmdealsresponse.md)>**


## getCrmDealsId

Get a deal

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmDealsIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.deals.getCrmDealsId({
  id: "326b5a73-429c-4db1-a842-2bb679d23227",
}).then((res: GetCrmDealsIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetCrmDealsIdRequest](../../models/operations/getcrmdealsidrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetCrmDealsIdResponse](../../models/operations/getcrmdealsidresponse.md)>**


## ~~getCrmPipelineDetails~~

This endpoint is deprecated. Prefer /crm/pipeline/details/{pipelineID} instead.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmPipelineDetailsResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.deals.getCrmPipelineDetails().then((res: GetCrmPipelineDetailsResponse) => {
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

**Promise<[operations.GetCrmPipelineDetailsResponse](../../models/operations/getcrmpipelinedetailsresponse.md)>**


## getCrmPipelineDetailsAll

Get all pipelines

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmPipelineDetailsAllResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.deals.getCrmPipelineDetailsAll().then((res: GetCrmPipelineDetailsAllResponse) => {
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

**Promise<[operations.GetCrmPipelineDetailsAllResponse](../../models/operations/getcrmpipelinedetailsallresponse.md)>**


## getCrmPipelineDetailsPipelineID

Get a pipeline

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmPipelineDetailsPipelineIDResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.deals.getCrmPipelineDetailsPipelineID({
  pipelineID: "sunt",
}).then((res: GetCrmPipelineDetailsPipelineIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetCrmPipelineDetailsPipelineIDRequest](../../models/operations/getcrmpipelinedetailspipelineidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetCrmPipelineDetailsPipelineIDResponse](../../models/operations/getcrmpipelinedetailspipelineidresponse.md)>**


## patchCrmDealsLinkUnlinkId

Link and Unlink a deal with contacts and companies

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PatchCrmDealsLinkUnlinkIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.deals.patchCrmDealsLinkUnlinkId({
  requestBody: {
    linkCompanyIds: [
      "ullam",
    ],
    linkContactIds: [
      722081,
    ],
    unlinkCompanyIds: [
      "hic",
    ],
    unlinkContactIds: [
      30452,
    ],
  },
  id: "cbb1e31b-8b90-4f34-83a1-108e0adcf4b9",
}).then((res: PatchCrmDealsLinkUnlinkIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PatchCrmDealsLinkUnlinkIdRequest](../../models/operations/patchcrmdealslinkunlinkidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PatchCrmDealsLinkUnlinkIdResponse](../../models/operations/patchcrmdealslinkunlinkidresponse.md)>**


## patchCrmDealsId

Update a deal

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PatchCrmDealsIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.deals.patchCrmDealsId({
  requestBody: {
    attributes: {},
    name: "Deal: Connect with client",
  },
  id: "21879fce-953f-473e-b7fb-c7abd74dd39c",
}).then((res: PatchCrmDealsIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.PatchCrmDealsIdRequest](../../models/operations/patchcrmdealsidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PatchCrmDealsIdResponse](../../models/operations/patchcrmdealsidresponse.md)>**


## postCrmDeals

Create a deal

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PostCrmDealsResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.deals.postCrmDeals({
  attributes: {},
  name: "Deal: Connect with company",
}).then((res: PostCrmDealsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PostCrmDealsRequestBody](../../models/operations/postcrmdealsrequestbody.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PostCrmDealsResponse](../../models/operations/postcrmdealsresponse.md)>**

