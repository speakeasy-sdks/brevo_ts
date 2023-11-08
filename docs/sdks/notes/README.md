# Notes
(*.notes*)

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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.notes.deleteCrmNotesId({
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
| `request`                                                                                | [operations.DeleteCrmNotesIdRequest](../../models/operations/deletecrmnotesidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteCrmNotesIdResponse](../../models/operations/deletecrmnotesidresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getCrmNotes

Get all notes

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmNotesQueryParamSort, QueryParamEntity } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.notes.getCrmNotes({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetCrmNotesRequest](../../models/operations/getcrmnotesrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetCrmNotesResponse](../../models/operations/getcrmnotesresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getCrmNotesId

Get a note

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.notes.getCrmNotesId({
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
| `request`                                                                          | [operations.GetCrmNotesIdRequest](../../models/operations/getcrmnotesidrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetCrmNotesIdResponse](../../models/operations/getcrmnotesidresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## patchCrmNotesId

Update a note

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.notes.patchCrmNotesId({
    noteData: {
      companyIds: [
        "61a5ce58c5d4795761045990",
        "61a5ce58c5d4795761045991",
      ],
      contactIds: [
        247,
        1,
        2,
      ],
      dealIds: [
        "61a5ce58c5d4795761045990",
        "61a5ce58c5d4795761045991",
      ],
      text: "In communication with client for resolution of queries.",
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
| `request`                                                                              | [operations.PatchCrmNotesIdRequest](../../models/operations/patchcrmnotesidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PatchCrmNotesIdResponse](../../models/operations/patchcrmnotesidresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404,415       | application/json  |
| errors.SDKError   | 400-600           | */*               |

## postCrmNotes

Create a note

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.notes.postCrmNotes({
    companyIds: [
      "61a5ce58c5d4795761045990",
      "61a5ce58c5d4795761045991",
    ],
    contactIds: [
      247,
      1,
      2,
    ],
    dealIds: [
      "61a5ce58c5d4795761045990",
      "61a5ce58c5d4795761045991",
    ],
    text: "In communication with client for resolution of queries.",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [components.NoteData](../../models/shared/notedata.md)       | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostCrmNotesResponse](../../models/operations/postcrmnotesresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,415           | application/json  |
| errors.SDKError   | 400-600           | */*               |
