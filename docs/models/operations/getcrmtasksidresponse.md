# GetCrmTasksIdResponse


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `contentType`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `rawResponse`                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                       | N/A                                                      |
| `task`                                                   | [shared.Task](../../models/shared/task.md)               | :heavy_minus_sign:                                       | Returns the Task by id                                   |
| `errorModel`                                             | [shared.ErrorModel](../../models/shared/errormodel.md)   | :heavy_minus_sign:                                       | Returned when task id is invalid                         |