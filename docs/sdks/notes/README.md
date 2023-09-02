# notes

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
  id: "a15be3e0-6080-47e2-b6e3-ab8845f0597a",
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
  dateFrom: 378245,
  dateTo: 5189,
  entity: GetCrmNotesEntity.Contacts,
  entityIds: "reiciendis",
  limit: 174658,
  offset: 663866,
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
  id: "4a31e947-64a3-4e86-9e79-56f9251a5a9d",
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
      "ex",
      "aliquid",
      "accusantium",
    ],
    contactIds: [
      984632,
      351893,
      448143,
      721407,
    ],
    dealIds: [
      "officia",
      "laborum",
      "placeat",
      "modi",
    ],
    text: "In communication with client for resolution of queries.",
  },
  id: "f9efc1b4-512c-4103-a648-dc2f615199eb",
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
    "illum",
    "eaque",
    "earum",
    "perspiciatis",
  ],
  contactIds: [
    891801,
    399802,
    780931,
    380335,
  ],
  dealIds: [
    "fugit",
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

