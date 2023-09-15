# tasks

### Available Operations

* [deleteCrmTasksId](#deletecrmtasksid) - Delete a task
* [getCrmTasks](#getcrmtasks) - Get all tasks
* [getCrmTasksId](#getcrmtasksid) - Get a task
* [getCrmTasktypes](#getcrmtasktypes) - Get all task types
* [patchCrmTasksId](#patchcrmtasksid) - Update a task
* [postCrmTasks](#postcrmtasks) - Create a task

## deleteCrmTasksId

Delete a task

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteCrmTasksIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.tasks.deleteCrmTasksId({
  id: "eee9526f-8d98-46e8-81ea-d4f0e1012563",
}).then((res: DeleteCrmTasksIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteCrmTasksIdRequest](../../models/operations/deletecrmtasksidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteCrmTasksIdResponse](../../models/operations/deletecrmtasksidresponse.md)>**


## getCrmTasks

Get all tasks

### Example Usage

```typescript
import { Brevo } from "BREVO";
import {
  GetCrmTasksFilterDate,
  GetCrmTasksFilterStatus,
  GetCrmTasksResponse,
  GetCrmTasksSort,
} from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.tasks.getCrmTasks({
  dateFrom: 952143,
  dateTo: 562783,
  filterAssignTo: "magnam",
  filterCompanies: "saepe",
  filterContacts: "consequuntur",
  filterDate: GetCrmTasksFilterDate.Tomorrow,
  filterDeals: "officiis",
  filterStatus: GetCrmTasksFilterStatus.Undone,
  filterType: "in",
  limit: 238043,
  offset: 907876,
  sort: GetCrmTasksSort.Desc,
  sortBy: "consequuntur",
}).then((res: GetCrmTasksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetCrmTasksRequest](../../models/operations/getcrmtasksrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetCrmTasksResponse](../../models/operations/getcrmtasksresponse.md)>**


## getCrmTasksId

Get a task

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmTasksIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.tasks.getCrmTasksId({
  id: "2a57a15b-e3e0-4608-87e2-b6e3ab8845f0",
}).then((res: GetCrmTasksIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetCrmTasksIdRequest](../../models/operations/getcrmtasksidrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetCrmTasksIdResponse](../../models/operations/getcrmtasksidresponse.md)>**


## getCrmTasktypes

Get all task types

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmTasktypesResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.tasks.getCrmTasktypes().then((res: GetCrmTasktypesResponse) => {
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

**Promise<[operations.GetCrmTasktypesResponse](../../models/operations/getcrmtasktypesresponse.md)>**


## patchCrmTasksId

Update a task

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PatchCrmTasksIdResponse } from "BREVO/dist/sdk/models/operations";
import { TaskReminderTypes, TaskReminderUnit } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.tasks.patchCrmTasksId({
  requestBody: {
    assignToId: "5faab4b7f195bb3c4c31e62a",
    companiesIds: [
      "corporis",
    ],
    contactsIds: [
      597303,
    ],
    date: new Date("2021-11-01T17:44:54.668Z"),
    dealsIds: [
      "nihil",
    ],
    done: false,
    duration: 600000,
    name: "Task: Connect with client",
    notes: "In communication with client for resolution of queries.",
    reminder: {
      types: [
        TaskReminderTypes.Push,
      ],
      unit: TaskReminderUnit.Hours,
      value: 10,
    },
    taskTypeId: "61a5cd07ca1347c82306ad09",
  },
  id: "0ff2a54a-31e9-4476-8a3e-865e7956f925",
}).then((res: PatchCrmTasksIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.PatchCrmTasksIdRequest](../../models/operations/patchcrmtasksidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PatchCrmTasksIdResponse](../../models/operations/patchcrmtasksidresponse.md)>**


## postCrmTasks

Create a task

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PostCrmTasksResponse } from "BREVO/dist/sdk/models/operations";
import { TaskReminderTypes, TaskReminderUnit } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.tasks.postCrmTasks({
  assignToId: "5faab4b7f195bb3c4c31e62a",
  companiesIds: [
    "quasi",
  ],
  contactsIds: [
    657020,
  ],
  date: new Date("2021-11-01T17:44:54.668Z"),
  dealsIds: [
    "nostrum",
  ],
  done: false,
  duration: 600000,
  name: "Task: Connect with client",
  notes: "In communication with client for resolution of queries.",
  reminder: {
    types: [
      TaskReminderTypes.Push,
    ],
    unit: TaskReminderUnit.Weeks,
    value: 10,
  },
  taskTypeId: "61a5cd07ca1347c82306ad09",
}).then((res: PostCrmTasksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PostCrmTasksRequestBody](../../models/operations/postcrmtasksrequestbody.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PostCrmTasksResponse](../../models/operations/postcrmtasksresponse.md)>**

