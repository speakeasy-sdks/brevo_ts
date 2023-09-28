# Files
(*files*)

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
  id: "a19f1d17-0513-439d-8808-6a1840394c26",
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
  dateFrom: 12036,
  dateTo: 491025,
  entity: GetCrmFilesEntity.Companies,
  entityIds: "maiores",
  limit: 618480,
  offset: 244651,
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
  id: "5f0642da-c7af-4515-8c41-3aa63aae8d67",
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
  id: "864dbb67-5fd5-4e60-b375-ed4f6fbee41f",
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
  companyId: "adipisci",
  contactId: 249420,
  dealId: "amet",
  file: {
    content: "beatae".encode(),
    file: "dignissimos",
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

