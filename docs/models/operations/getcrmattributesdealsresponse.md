# GetCrmAttributesDealsResponse


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `contentType`                                                    | *string*                                                         | :heavy_check_mark:                                               | HTTP response content type for this operation                    |
| `dealAttributes`                                                 | [shared.DealAttributes](../../models/shared/dealattributes.md)[] | :heavy_minus_sign:                                               | Returns list of deal attributes                                  |
| `statusCode`                                                     | *number*                                                         | :heavy_check_mark:                                               | HTTP response status code for this operation                     |
| `rawResponse`                                                    | [AxiosResponse](https://axios-http.com/docs/res_schema)          | :heavy_minus_sign:                                               | Raw HTTP response; suitable for custom response parsing          |