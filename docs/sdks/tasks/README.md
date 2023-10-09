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

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.tasks.deleteCrmTasksId({
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
| `request`                                                                                | [operations.DeleteCrmTasksIdRequest](../../models/operations/deletecrmtasksidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteCrmTasksIdResponse](../../models/operations/deletecrmtasksidresponse.md)>**


## getCrmTasks

Get all tasks

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCrmTasksFilterDate, GetCrmTasksFilterStatus, GetCrmTasksSort } from "BREVO/dist/sdk/models/operations";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.tasks.getCrmTasks({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.tasks.getCrmTasksId({
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
| `request`                                                                          | [operations.GetCrmTasksIdRequest](../../models/operations/getcrmtasksidrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetCrmTasksIdResponse](../../models/operations/getcrmtasksidresponse.md)>**


## getCrmTasktypes

Get all task types

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.tasks.getCrmTasktypes();

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

**Promise<[operations.GetCrmTasktypesResponse](../../models/operations/getcrmtasktypesresponse.md)>**


## patchCrmTasksId

Update a task

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { TaskReminderTypes, TaskReminderUnit } from "BREVO/dist/sdk/models/shared";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.tasks.patchCrmTasksId({
    requestBody: {
      assignToId: "5faab4b7f195bb3c4c31e62a",
      companiesIds: [
        "61a5ce58c5d4795761045990",
        "61a5ce58c5d4795761045991",
        "61a5ce58c5d4795761045992",
      ],
      contactsIds: [
        1,
        2,
        3,
      ],
      date: new Date("2021-11-01T17:44:54.668Z"),
      dealsIds: [
        "61a5ce58c5d4795761045990",
        "61a5ce58c5d4795761045991",
        "61a5ce58c5d4795761045992",
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
| `request`                                                                              | [operations.PatchCrmTasksIdRequest](../../models/operations/patchcrmtasksidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PatchCrmTasksIdResponse](../../models/operations/patchcrmtasksidresponse.md)>**


## postCrmTasks

Create a task

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { TaskReminderTypes, TaskReminderUnit } from "BREVO/dist/sdk/models/shared";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.tasks.postCrmTasks({
    assignToId: "5faab4b7f195bb3c4c31e62a",
    companiesIds: [
      "61a5ce58c5d4795761045990",
      "61a5ce58c5d4795761045991",
      "61a5ce58c5d4795761045992",
    ],
    contactsIds: [
      1,
      2,
      3,
    ],
    date: new Date("2021-11-01T17:44:54.668Z"),
    dealsIds: [
      "61a5ce58c5d4795761045990",
      "61a5ce58c5d4795761045991",
      "61a5ce58c5d4795761045992",
    ],
    done: false,
    duration: 600000,
    name: "Task: Connect with client",
    notes: "In communication with client for resolution of queries.",
    reminder: {
      types: [
        TaskReminderTypes.Email,
      ],
      unit: TaskReminderUnit.Minutes,
      value: 10,
    },
    taskTypeId: "61a5cd07ca1347c82306ad09",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PostCrmTasksRequestBody](../../models/operations/postcrmtasksrequestbody.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PostCrmTasksResponse](../../models/operations/postcrmtasksresponse.md)>**

