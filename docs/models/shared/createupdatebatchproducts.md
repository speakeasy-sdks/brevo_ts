# CreateUpdateBatchProducts

Values to create a batch of products


## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `products`                                                                              | [CreateUpdateProducts](../../models/shared/createupdateproducts.md)[]                   | :heavy_check_mark:                                                                      | array of products objects                                                               |
| `updateEnabled`                                                                         | *boolean*                                                                               | :heavy_minus_sign:                                                                      | Facilitate to update the existing categories in the same request (updateEnabled = true) |