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
  id: "<ID>",
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
  dateFrom: 734797,
  dateTo: 292043,
  entity: GetCrmNotesEntity.Contacts,
  entityIds: "Gender quantify dicta",
  limit: 473993,
  offset: 141964,
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
  id: "<ID>",
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
      "circuit",
    ],
    contactIds: [
      232473,
    ],
    dealIds: [
      "et",
    ],
    text: "In communication with client for resolution of queries.",
  },
  id: "<ID>",
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
    "Supervisor",
  ],
  contactIds: [
    468322,
  ],
  dealIds: [
    "Organized",
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

