# files

### Available Operations

* [deleteCrmFilesId](#deletecrmfilesid) - Delete a file
* [getCrmFiles](#getcrmfiles) - Get all files
* [getCrmFilesId](#getcrmfilesid) - Download a file
* [getCrmFilesIdData](#getcrmfilesiddata) - Get file details
* [postCrmFiles](#postcrmfiles) - Upload a file

## deleteCrmFilesId

Delete a file

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteCrmFilesIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.files.deleteCrmFilesId({
  id: "b445e80c-a55e-4fd2-8e45-7e1858b6a89f",
}).then((res: DeleteCrmFilesIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteCrmFilesIdRequest](../../models/operations/deletecrmfilesidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteCrmFilesIdResponse](../../models/operations/deletecrmfilesidresponse.md)>**


## getCrmFiles

Get all files

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmFilesEntity, GetCrmFilesResponse, GetCrmFilesSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.files.getCrmFiles({
  dateFrom: 710529,
  dateTo: 892863,
  entity: GetCrmFilesEntity.Companies,
  entityIds: "dolorum",
  limit: 341698,
  offset: 639028,
  sort: GetCrmFilesSort.Desc,
}).then((res: GetCrmFilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetCrmFilesRequest](../../models/operations/getcrmfilesrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetCrmFilesResponse](../../models/operations/getcrmfilesresponse.md)>**


## getCrmFilesId

Download a file

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmFilesIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.files.getCrmFilesId({
  id: "8e4824d0-ab40-4750-88e5-1862065e904f",
}).then((res: GetCrmFilesIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetCrmFilesIdRequest](../../models/operations/getcrmfilesidrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetCrmFilesIdResponse](../../models/operations/getcrmfilesidresponse.md)>**


## getCrmFilesIdData

Get file details

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmFilesIdDataResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.files.getCrmFilesIdData({
  id: "3b1194b8-abf6-403a-b9f9-dfe0ab7da8a5",
}).then((res: GetCrmFilesIdDataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetCrmFilesIdDataRequest](../../models/operations/getcrmfilesiddatarequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetCrmFilesIdDataResponse](../../models/operations/getcrmfilesiddataresponse.md)>**


## postCrmFiles

Upload a file

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PostCrmFilesResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.files.postCrmFiles({
  companyId: "voluptatem",
  contactId: 790840,
  dealId: "repudiandae",
  file: {
    content: "quasi".encode(),
    file: "atque",
  },
}).then((res: PostCrmFilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PostCrmFilesRequestBody](../../models/operations/postcrmfilesrequestbody.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PostCrmFilesResponse](../../models/operations/postcrmfilesresponse.md)>**

