# SendTestTemplateResponse


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `contentType`                                                  | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `statusCode`                                                   | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `rawResponse`                                                  | [AxiosResponse](https://axios-http.com/docs/res_schema)        | :heavy_minus_sign:                                             | N/A                                                            |
| `errorModel`                                                   | [shared.ErrorModel](../../models/shared/errormodel.md)         | :heavy_minus_sign:                                             | Template ID not found                                          |
| `postSendFailed`                                               | [shared.PostSendFailed](../../models/shared/postsendfailed.md) | :heavy_minus_sign:                                             | Test email could not be sent to the following email addresses  |