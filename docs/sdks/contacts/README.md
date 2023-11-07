# Contacts
(*.contacts*)

### Available Operations

* [addContactToList](#addcontacttolist) - Add existing contacts to a list
* [createAttribute](#createattribute) - Create contact attribute
* [createContact](#createcontact) - Create a contact
* [createDoiContact](#createdoicontact) - Create Contact via DOI (Double-Opt-In) Flow
* [createFolder](#createfolder) - Create a folder
* [createList](#createlist) - Create a list
* [deleteAttribute](#deleteattribute) - Delete an attribute
* [deleteContact](#deletecontact) - Delete a contact
* [deleteFolder](#deletefolder) - Delete a folder (and all its lists)
* [deleteList](#deletelist) - Delete a list
* [getAttributes](#getattributes) - List all attributes
* [getContactInfo](#getcontactinfo) - Get a contact's details
* [getContactStats](#getcontactstats) - Get email campaigns' statistics for a contact
* [getContacts](#getcontacts) - Get all the contacts
* [getContactsFromList](#getcontactsfromlist) - Get contacts in a list
* [getFolder](#getfolder) - Returns a folder's details
* [getFolderLists](#getfolderlists) - Get lists in a folder
* [getFolders](#getfolders) - Get all folders
* [getList](#getlist) - Get a list's details
* [getLists](#getlists) - Get all the lists
* [getSegments](#getsegments) - Get all the segments
* [importContacts](#importcontacts) - Import contacts
* [removeContactFromList](#removecontactfromlist) - Delete a contact from a list
* [requestContactExport](#requestcontactexport) - Export contacts
* [updateAttribute](#updateattribute) - Update contact attribute
* [updateBatchContacts](#updatebatchcontacts) - Update multiple contacts
* [updateContact](#updatecontact) - Update a contact
* [updateFolder](#updatefolder) - Update a folder
* [updateList](#updatelist) - Update a list

## addContactToList

Add existing contacts to a list

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.addContactToList({
    requestBody: "string",
    listId: 77706,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AddContactToListRequest](../../models/operations/addcontacttolistrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AddContactToListResponse](../../models/operations/addcontacttolistresponse.md)>**


## createAttribute

Create contact attribute

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { CreateAttributeType } from "BREVO/dist/models/components";
import { AttributeCategory } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.createAttribute({
    attributeCategory: AttributeCategory.Calculated,
    attributeName: "string",
    createAttribute: {
      enumeration: [
        {
          label: "Women",
          value: 1,
        },
      ],
      isRecurring: true,
      type: CreateAttributeType.Text,
      value: "COUNT[BLACKLISTED,BLACKLISTED,<,NOW()]",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateAttributeRequest](../../models/operations/createattributerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateAttributeResponse](../../models/operations/createattributeresponse.md)>**


## createContact

Create a contact

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.createContact({
    attributes: {
      "FNAME": "string",
      "LNAME": "string",
    },
    email: "elly@example.com",
    emailBlacklisted: false,
    extId: "externalId",
    listIds: [
      36,
    ],
    smsBlacklisted: false,
    smtpBlacklistSender: [
      "Marlin_Klocko@hotmail.com",
    ],
    updateEnabled: false,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [components.CreateContact](../../models/shared/createcontact.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.CreateContactResponse](../../models/operations/createcontactresponse.md)>**


## createDoiContact

Create Contact via DOI (Double-Opt-In) Flow

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.createDoiContact({
    attributes: {
      "LNAME": "string",
      "FNAME": "string",
    },
    email: "elly@example.com",
    excludeListIds: [
      36,
    ],
    includeListIds: [
      36,
    ],
    redirectionUrl: "http://requestb.in/173lyyx1",
    templateId: 2,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [components.CreateDoiContact](../../models/shared/createdoicontact.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.CreateDoiContactResponse](../../models/operations/createdoicontactresponse.md)>**


## createFolder

Create a folder

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.createFolder({
    name: "Wordpress Contacts",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [components.CreateUpdateFolder](../../models/shared/createupdatefolder.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateFolderResponse](../../models/operations/createfolderresponse.md)>**


## createList

Create a list

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.createList({
    folderId: 2,
    name: "Magento Customer - ES",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [components.CreateList](../../models/shared/createlist.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateListResponse](../../models/operations/createlistresponse.md)>**


## deleteAttribute

Delete an attribute

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PathParamAttributeCategory } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.deleteAttribute({
    attributeCategory: PathParamAttributeCategory.Normal,
    attributeName: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteAttributeRequest](../../models/operations/deleteattributerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteAttributeResponse](../../models/operations/deleteattributeresponse.md)>**


## deleteContact

Delete a contact

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.deleteContact({
    identifier: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteContactRequest](../../models/operations/deletecontactrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteContactResponse](../../models/operations/deletecontactresponse.md)>**


## deleteFolder

Delete a folder (and all its lists)

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.deleteFolder({
    folderId: 225818,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteFolderRequest](../../models/operations/deletefolderrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteFolderResponse](../../models/operations/deletefolderresponse.md)>**


## deleteList

Delete a list

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.deleteList({
    listId: 231491,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeleteListRequest](../../models/operations/deletelistrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteListResponse](../../models/operations/deletelistresponse.md)>**


## getAttributes

List all attributes

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.getAttributes();


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

**Promise<[operations.GetAttributesResponse](../../models/operations/getattributesresponse.md)>**


## getContactInfo

Along with the contact details, this endpoint will show the statistics of contact for the recent 90 days by default. To fetch the earlier statistics, please use Get contact campaign stats ``https://developers.brevo.com/reference/contacts-7#getcontactstats`` endpoint with the appropriate date ranges.

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.getContactInfo({
    identifier: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetContactInfoRequest](../../models/operations/getcontactinforequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetContactInfoResponse](../../models/operations/getcontactinforesponse.md)>**


## getContactStats

Get email campaigns' statistics for a contact

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.getContactStats({
    identifier: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetContactStatsRequest](../../models/operations/getcontactstatsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetContactStatsResponse](../../models/operations/getcontactstatsresponse.md)>**


## getContacts

Get all the contacts

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { QueryParamSort } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.getContacts({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetContactsRequest](../../models/operations/getcontactsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetContactsResponse](../../models/operations/getcontactsresponse.md)>**


## getContactsFromList

Get contacts in a list

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetContactsFromListQueryParamSort } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.getContactsFromList({
    listId: 164358,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetContactsFromListRequest](../../models/operations/getcontactsfromlistrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetContactsFromListResponse](../../models/operations/getcontactsfromlistresponse.md)>**


## getFolder

Returns a folder's details

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.getFolder({
    folderId: 867135,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetFolderRequest](../../models/operations/getfolderrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetFolderResponse](../../models/operations/getfolderresponse.md)>**


## getFolderLists

Get lists in a folder

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetFolderListsQueryParamSort } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.getFolderLists({
    folderId: 790110,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetFolderListsRequest](../../models/operations/getfolderlistsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetFolderListsResponse](../../models/operations/getfolderlistsresponse.md)>**


## getFolders

Get all folders

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetFoldersQueryParamSort } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.getFolders({
    limit: 846820,
    offset: 320424,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetFoldersRequest](../../models/operations/getfoldersrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetFoldersResponse](../../models/operations/getfoldersresponse.md)>**


## getList

Get a list's details

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.getList({
    listId: 451512,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetListRequest](../../models/operations/getlistrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetListResponse](../../models/operations/getlistresponse.md)>**


## getLists

Get all the lists

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetListsQueryParamSort } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.getLists({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetListsRequest](../../models/operations/getlistsrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetListsResponse](../../models/operations/getlistsresponse.md)>**


## getSegments

Get all the segments

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetSegmentsQueryParamSort } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.getSegments({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetSegmentsRequest](../../models/operations/getsegmentsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetSegmentsResponse](../../models/operations/getsegmentsresponse.md)>**


## importContacts

It returns the background process ID which on completion calls the notify URL that you have set in the input.

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.importContacts({
    emailBlacklist: false,
    emptyContactsAttributes: true,
    fileBody: "NAME;SURNAME;EMAIL
  Smith;John;john.smith@example.com
  Roger;Ellie;ellie36@example.com",
    fileUrl: "https://importfile.domain.com",
    jsonBody: [
      {
        attributes: {
          "key": "string",
        },
      },
    ],
    listIds: [
      76,
    ],
    newList: {
      folderId: 2,
      listName: "ContactImport - 2017-05",
    },
    notifyUrl: "http://requestb.in/173lyyx1",
    smsBlacklist: false,
    updateExistingContacts: true,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [components.RequestContactImport](../../models/shared/requestcontactimport.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ImportContactsResponse](../../models/operations/importcontactsresponse.md)>**


## removeContactFromList

Delete a contact from a list

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.removeContactFromList({
    requestBody: "string",
    listId: 85992,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.RemoveContactFromListRequest](../../models/operations/removecontactfromlistrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.RemoveContactFromListResponse](../../models/operations/removecontactfromlistresponse.md)>**


## requestContactExport

It returns the background process ID which on completion calls the notify URL that you have set in the input. File will be available in csv.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { ActionForContacts, ActionForEmailCampaigns, ActionForSmsCampaigns } from "BREVO/dist/models/components";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.requestContactExport({
    customContactFilter: {
      emailCampaignId: 12,
      listId: 2,
      smsCampaignId: 12,
    },
    exportAttributes: [
      "N",
      "A",
      "M",
      "E",
    ],
    notifyUrl: "http://requestb.in/173lyyx1",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [components.RequestContactExport](../../models/shared/requestcontactexport.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.RequestContactExportResponse](../../models/operations/requestcontactexportresponse.md)>**


## updateAttribute

Update contact attribute

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateAttributePathParamAttributeCategory } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.updateAttribute({
    attributeCategory: UpdateAttributePathParamAttributeCategory.Calculated,
    attributeName: "string",
    updateAttribute: {
      enumeration: [
        {
          label: "Men",
          value: 1,
        },
      ],
      value: "COUNT[BLACKLISTED,BLACKLISTED,<,NOW()]",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateAttributeRequest](../../models/operations/updateattributerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateAttributeResponse](../../models/operations/updateattributeresponse.md)>**


## updateBatchContacts

Update multiple contacts

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.updateBatchContacts({
    contacts: [
      {
        attributes: {
          "EMAIL": "string",
          "FNAME": "string",
          "LNAME": "string",
        },
        email: "elly@example.com",
        emailBlacklisted: false,
        extId: "UpdateExternalId",
        id: 31,
        listIds: [
          65,
        ],
        sms: "+91xxxxxxxxxx",
        smsBlacklisted: true,
        smtpBlacklistSender: [
          "Keshawn_Moore@yahoo.com",
        ],
        unlinkListIds: [
          36,
        ],
      },
    ],
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [components.UpdateBatchContacts](../../models/shared/updatebatchcontacts.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateBatchContactsResponse](../../models/operations/updatebatchcontactsresponse.md)>**


## updateContact

Update a contact

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.updateContact({
    identifier: "string",
    updateContact: {
      attributes: {
        "EMAIL": "string",
        "FNAME": "string",
        "LNAME": "string",
      },
      emailBlacklisted: false,
      extId: "updateExternalId",
      listIds: [
        65,
      ],
      smsBlacklisted: true,
      smtpBlacklistSender: [
        "Hester39@gmail.com",
      ],
      unlinkListIds: [
        36,
      ],
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateContactRequest](../../models/operations/updatecontactrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateContactResponse](../../models/operations/updatecontactresponse.md)>**


## updateFolder

Update a folder

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.updateFolder({
    createUpdateFolder: {
      name: "Wordpress Contacts",
    },
    folderId: 317879,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.UpdateFolderRequest](../../models/operations/updatefolderrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UpdateFolderResponse](../../models/operations/updatefolderresponse.md)>**


## updateList

Update a list

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.contacts.updateList({
    listId: 549225,
    updateList: {
      folderId: 2,
      name: "Magento Customer - ES",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.UpdateListRequest](../../models/operations/updatelistrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateListResponse](../../models/operations/updatelistresponse.md)>**

