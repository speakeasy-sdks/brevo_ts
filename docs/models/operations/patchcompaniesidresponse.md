# PatchCompaniesIdResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `company`                                               | [shared.Company](../../models/shared/company.md)        | :heavy_minus_sign:                                      | Company updated successfully                            |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | N/A                                                     |
| `errorModel`                                            | [shared.ErrorModel](../../models/shared/errormodel.md)  | :heavy_minus_sign:                                      | Returned when invalid data posted                       |