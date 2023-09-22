# GetCrmPipelineDetailsPipelineIDResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `pipelines`                                             | [shared.Pipeline](../../models/shared/pipeline.md)[]    | :heavy_minus_sign:                                      | Returns pipeline and its details                        |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | N/A                                                     |
| `errorModel`                                            | [shared.ErrorModel](../../models/shared/errormodel.md)  | :heavy_minus_sign:                                      | Returned when pipeline id is invalid or does not exist  |