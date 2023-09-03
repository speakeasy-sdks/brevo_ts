# GetCrmDealsIdResponse


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `contentType`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `deal`                                                   | [shared.Deal](../../models/shared/deal.md)               | :heavy_minus_sign:                                       | Returns the deal by id                                   |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `rawResponse`                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                       | N/A                                                      |
| `errorModel`                                             | [shared.ErrorModel](../../models/shared/errormodel.md)   | :heavy_minus_sign:                                       | Returned when task id is invalid                         |