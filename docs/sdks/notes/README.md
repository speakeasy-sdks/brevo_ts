# Notes
(*notes*)

### Available Operations

* [deleteCrmNotesId](#deletecrmnotesid) - Delete a note
* [getCrmNotes](#getcrmnotes) - Get all notes
* [getCrmNotesId](#getcrmnotesid) - Get a note
* [patchCrmNotesId](#patchcrmnotesid) - Update a note
* [postCrmNotes](#postcrmnotes) - Create a note

## deleteCrmNotesId

Delete a note

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteCrmNotesIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.notes.deleteCrmNotesId({
  id: "26916fe1-f08f-4429-8e36-98f447f603e8",
}).then((res: DeleteCrmNotesIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteCrmNotesIdRequest](../../models/operations/deletecrmnotesidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteCrmNotesIdResponse](../../models/operations/deletecrmnotesidresponse.md)>**


## getCrmNotes

Get all notes

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmNotesEntity, GetCrmNotesResponse, GetCrmNotesSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.notes.getCrmNotes({
  dateFrom: 708609,
  dateTo: 310381,
  entity: GetCrmNotesEntity.Companies,
  entityIds: "ipsam",
  limit: 894864,
  offset: 524970,
  sort: GetCrmNotesSort.Asc,
}).then((res: GetCrmNotesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetCrmNotesRequest](../../models/operations/getcrmnotesrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetCrmNotesResponse](../../models/operations/getcrmnotesresponse.md)>**


## getCrmNotesId

Get a note

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmNotesIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.notes.getCrmNotesId({
  id: "ca55efd2-0e45-47e1-858b-6a89fbe3a5aa",
}).then((res: GetCrmNotesIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetCrmNotesIdRequest](../../models/operations/getcrmnotesidrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetCrmNotesIdResponse](../../models/operations/getcrmnotesidresponse.md)>**


## patchCrmNotesId

Update a note

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PatchCrmNotesIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.notes.patchCrmNotesId({
  noteData: {
    companyIds: [
      "corrupti",
    ],
    contactIds: [
      879235,
    ],
    dealIds: [
      "tempora",
    ],
    text: "In communication with client for resolution of queries.",
  },
  id: "824d0ab4-0750-488e-9186-2065e904f3b1",
}).then((res: PatchCrmNotesIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.PatchCrmNotesIdRequest](../../models/operations/patchcrmnotesidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PatchCrmNotesIdResponse](../../models/operations/patchcrmnotesidresponse.md)>**


## postCrmNotes

Create a note

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PostCrmNotesResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.notes.postCrmNotes({
  companyIds: [
    "architecto",
  ],
  contactIds: [
    577140,
  ],
  dealIds: [
    "labore",
  ],
  text: "In communication with client for resolution of queries.",
}).then((res: PostCrmNotesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.NoteData](../../models/shared/notedata.md)           | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostCrmNotesResponse](../../models/operations/postcrmnotesresponse.md)>**

