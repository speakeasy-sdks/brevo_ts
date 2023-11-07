# Deals
(*.deals*)

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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.deals.deleteCrmDealsId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.deals.getCrmAttributesDeals();


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

**Promise<[operations.GetCrmAttributesDealsResponse](../../models/operations/getcrmattributesdealsresponse.md)>**


## getCrmDeals

Get all deals

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmDealsQueryParamSort } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.deals.getCrmDeals({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.deals.getCrmDealsId({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.deals.getCrmPipelineDetails();


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

**Promise<[operations.GetCrmPipelineDetailsResponse](../../models/operations/getcrmpipelinedetailsresponse.md)>**


## getCrmPipelineDetailsAll

Get all pipelines

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.deals.getCrmPipelineDetailsAll();


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

**Promise<[operations.GetCrmPipelineDetailsAllResponse](../../models/operations/getcrmpipelinedetailsallresponse.md)>**


## getCrmPipelineDetailsPipelineID

Get a pipeline

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.deals.getCrmPipelineDetailsPipelineID({
    pipelineID: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.deals.patchCrmDealsLinkUnlinkId({
    requestBody: {
      linkCompanyIds: [
        "61a5ce58c5d4795761045990",
        "61a5ce58c5d4795761045991",
        "61a5ce58c5d4795761045992",
      ],
      linkContactIds: [
        1,
        2,
        3,
      ],
      unlinkCompanyIds: [
        "61a5ce58c5d4795761045994",
        "61a5ce58c5d479576104595",
        "61a5ce58c5d4795761045996",
      ],
      unlinkContactIds: [
        4,
        5,
        6,
      ],
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.deals.patchCrmDealsId({
    requestBody: {
      attributes: {},
      name: "Deal: Connect with client",
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.deals.postCrmDeals({
    attributes: {},
    name: "Deal: Connect with company",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PostCrmDealsRequestBody](../../models/operations/postcrmdealsrequestbody.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PostCrmDealsResponse](../../models/operations/postcrmdealsresponse.md)>**

