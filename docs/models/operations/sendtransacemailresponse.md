# SendTransacEmailResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `rawResponse`                                                        | [AxiosResponse](https://axios-http.com/docs/res_schema)              | :heavy_minus_sign:                                                   | N/A                                                                  |
| `createSmtpEmail`                                                    | [shared.CreateSmtpEmail](../../models/shared/createsmtpemail.md)     | :heavy_minus_sign:                                                   | transactional email sent                                             |
| `errorModel`                                                         | [shared.ErrorModel](../../models/shared/errormodel.md)               | :heavy_minus_sign:                                                   | bad request                                                          |
| `scheduleSmtpEmail`                                                  | [shared.ScheduleSmtpEmail](../../models/shared/schedulesmtpemail.md) | :heavy_minus_sign:                                                   | transactional email scheduled                                        |