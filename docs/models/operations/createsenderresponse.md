# CreateSenderResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `rawResponse`                                                        | [AxiosResponse>](https://axios-http.com/docs/res_schema)             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `createSenderModel`                                                  | [shared.CreateSenderModel](../../models/shared/createsendermodel.md) | :heavy_minus_sign:                                                   | sender created                                                       |
| `errorModel`                                                         | [shared.ErrorModel](../../models/shared/errormodel.md)               | :heavy_minus_sign:                                                   | bad request                                                          |