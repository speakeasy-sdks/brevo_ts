# Companies

### Available Operations

* [deleteCompaniesId](#deletecompaniesid) - Delete a company
* [getCompanies](#getcompanies) - Get all Companies
* [getCompaniesAttributes](#getcompaniesattributes) - Get company attributes
* [getCompaniesId](#getcompaniesid) - Get a company
* [patchCompaniesLinkUnlinkId](#patchcompanieslinkunlinkid) - Link and Unlink company with contact and deal
* [patchCompaniesId](#patchcompaniesid) - Update a company
* [postCompanies](#postcompanies) - Create a company

## deleteCompaniesId

Delete a company

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteCompaniesIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.companies.deleteCompaniesId({
  id: "9d8d69a6-74e0-4f46-bcc8-796ed151a05d",
}).then((res: DeleteCompaniesIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteCompaniesIdRequest](../../models/operations/deletecompaniesidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteCompaniesIdResponse](../../models/operations/deletecompaniesidresponse.md)>**


## getCompanies

Get all Companies

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCompaniesResponse, GetCompaniesSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.companies.getCompanies({
  filters: "sapiente",
  limit: 778157,
  linkedContactsIds: 140350,
  linkedDealsIds: "at",
  page: 870088,
  sort: GetCompaniesSort.Desc,
  sortBy: "molestiae",
}).then((res: GetCompaniesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetCompaniesRequest](../../models/operations/getcompaniesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetCompaniesResponse](../../models/operations/getcompaniesresponse.md)>**


## getCompaniesAttributes

Get company attributes

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCompaniesAttributesResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.companies.getCompaniesAttributes().then((res: GetCompaniesAttributesResponse) => {
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

**Promise<[operations.GetCompaniesAttributesResponse](../../models/operations/getcompaniesattributesresponse.md)>**


## getCompaniesId

Get a company

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCompaniesIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.companies.getCompaniesId({
  id: "cc78ca1b-a928-4fc8-9674-2cb739205929",
}).then((res: GetCompaniesIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetCompaniesIdRequest](../../models/operations/getcompaniesidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetCompaniesIdResponse](../../models/operations/getcompaniesidresponse.md)>**


## patchCompaniesLinkUnlinkId

Link and Unlink company with contact and deal

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PatchCompaniesLinkUnlinkIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.companies.patchCompaniesLinkUnlinkId({
  requestBody: {
    linkContactIds: [
      222321,
    ],
    linkDealsIds: [
      "natus",
    ],
    unlinkContactIds: [
      386489,
    ],
    unlinkDealsIds: [
      "hic",
    ],
  },
  id: "ea7596eb-10fa-4aa2-b52c-5955907aff1a",
}).then((res: PatchCompaniesLinkUnlinkIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchCompaniesLinkUnlinkIdRequest](../../models/operations/patchcompanieslinkunlinkidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchCompaniesLinkUnlinkIdResponse](../../models/operations/patchcompanieslinkunlinkidresponse.md)>**


## patchCompaniesId

Update a company

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PatchCompaniesIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.companies.patchCompaniesId({
  requestBody: {
    attributes: {},
    countryCode: 91,
    name: "company",
  },
  id: "3a2fa946-7739-4251-aa52-c3f5ad019da1",
}).then((res: PatchCompaniesIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PatchCompaniesIdRequest](../../models/operations/patchcompaniesidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PatchCompaniesIdResponse](../../models/operations/patchcompaniesidresponse.md)>**


## postCompanies

Create a company

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PostCompaniesResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.companies.postCompanies({
  attributes: {},
  countryCode: 91,
  name: "company",
}).then((res: PostCompaniesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.PostCompaniesRequestBody](../../models/operations/postcompaniesrequestbody.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PostCompaniesResponse](../../models/operations/postcompaniesresponse.md)>**

