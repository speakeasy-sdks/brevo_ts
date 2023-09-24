# GetCrmTasksResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | N/A                                                     |
| `taskList`                                              | [shared.TaskList](../../models/shared/tasklist.md)      | :heavy_minus_sign:                                      | Returns task list with filters                          |
| `errorModel`                                            | [shared.ErrorModel](../../models/shared/errormodel.md)  | :heavy_minus_sign:                                      | Returned when query params are invalid                  |