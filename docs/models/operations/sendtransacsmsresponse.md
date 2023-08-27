# SendTransacSmsResponse


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `contentType`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `rawResponse`                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                       | N/A                                                      |
| `errorModel`                                             | [shared.ErrorModel](../../models/shared/errormodel.md)   | :heavy_minus_sign:                                       | bad request                                              |
| `sendSms`                                                | [shared.SendSms](../../models/shared/sendsms.md)         | :heavy_minus_sign:                                       | SMS has been sent successfully to the recipient          |