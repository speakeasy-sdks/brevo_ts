# CreateUpdateBatchCategory

Values to create a batch of categories


## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `categories`                                                                            | [CreateUpdateCategories](../../models/shared/createupdatecategories.md)[]               | :heavy_check_mark:                                                                      | array of categories objects                                                             |
| `updateEnabled`                                                                         | *boolean*                                                                               | :heavy_minus_sign:                                                                      | Facilitate to update the existing categories in the same request (updateEnabled = true) |