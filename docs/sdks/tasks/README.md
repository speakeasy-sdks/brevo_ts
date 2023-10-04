# Tasks
(*tasks*)

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
  id: "<ID>",
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
  dateFrom: 347707,
  dateTo: 258884,
  filterAssignTo: "API transparent",
  filterCompanies: "JSON",
  filterContacts: "Gasoline coulomb Industrial",
  filterDate: GetCrmTasksFilterDate.Week,
  filterDeals: "Jaguar Handcrafted Analyst",
  filterStatus: GetCrmTasksFilterStatus.Done,
  filterType: "monitor Latin Doral",
  limit: 594385,
  offset: 854904,
  sort: GetCrmTasksSort.Asc,
  sortBy: "eyeballs facere",
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
  id: "<ID>",
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
      "Tugrik",
    ],
    contactsIds: [
      570569,
    ],
    date: new Date("2021-11-01T17:44:54.668Z"),
    dealsIds: [
      "Creative",
    ],
    done: false,
    duration: 600000,
    name: "Task: Connect with client",
    notes: "In communication with client for resolution of queries.",
    reminder: {
      types: [
        TaskReminderTypes.Push,
      ],
      unit: TaskReminderUnit.Days,
      value: 10,
    },
    taskTypeId: "61a5cd07ca1347c82306ad09",
  },
  id: "<ID>",
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
    "Beauty",
  ],
  contactsIds: [
    741484,
  ],
  date: new Date("2021-11-01T17:44:54.668Z"),
  dealsIds: [
    "disintermediate",
  ],
  done: false,
  duration: 600000,
  name: "Task: Connect with client",
  notes: "In communication with client for resolution of queries.",
  reminder: {
    types: [
      TaskReminderTypes.Email,
    ],
    unit: TaskReminderUnit.Hours,
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

