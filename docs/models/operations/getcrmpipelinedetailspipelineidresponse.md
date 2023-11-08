# GetCrmPipelineDetailsPipelineIDResponse


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `contentType`                                            | *string*                                                 | :heavy_check_mark:                                       | HTTP response content type for this operation            |
| `pipelines`                                              | [components.Pipeline](../../models/shared/pipeline.md)[] | :heavy_minus_sign:                                       | Returns pipeline and its details                         |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | HTTP response status code for this operation             |
| `rawResponse`                                            | [AxiosResponse](https://axios-http.com/docs/res_schema)  | :heavy_minus_sign:                                       | Raw HTTP response; suitable for custom response parsing  |