# GetSmtpTemplatesResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `contentType`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `statusCode`                                                       | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `rawResponse`                                                      | [AxiosResponse>](https://axios-http.com/docs/res_schema)           | :heavy_minus_sign:                                                 | N/A                                                                |
| `errorModel`                                                       | [shared.ErrorModel](../../models/shared/errormodel.md)             | :heavy_minus_sign:                                                 | bad request                                                        |
| `getSmtpTemplates`                                                 | [shared.GetSmtpTemplates](../../models/shared/getsmtptemplates.md) | :heavy_minus_sign:                                                 | transactional email templates informations                         |