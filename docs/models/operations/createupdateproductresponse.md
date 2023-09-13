# CreateUpdateProductResponse


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `contentType`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `rawResponse`                                                          | [AxiosResponse>](https://axios-http.com/docs/res_schema)               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `createProductModel`                                                   | [shared.CreateProductModel](../../models/shared/createproductmodel.md) | :heavy_minus_sign:                                                     | Product created                                                        |
| `errorModel`                                                           | [shared.ErrorModel](../../models/shared/errormodel.md)                 | :heavy_minus_sign:                                                     | bad request                                                            |