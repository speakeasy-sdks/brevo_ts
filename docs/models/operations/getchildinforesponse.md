# GetChildInfoResponse


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `contentType`                                              | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `statusCode`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `rawResponse`                                              | [AxiosResponse>](https://axios-http.com/docs/res_schema)   | :heavy_minus_sign:                                         | N/A                                                        |
| `errorModel`                                               | [shared.ErrorModel](../../models/shared/errormodel.md)     | :heavy_minus_sign:                                         | bad request                                                |
| `getChildInfo`                                             | [shared.GetChildInfo](../../models/shared/getchildinfo.md) | :heavy_minus_sign:                                         | Information for the child                                  |