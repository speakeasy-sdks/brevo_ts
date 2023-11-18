# CreateUpdateCategory


## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `deletedAt`                                                                               | *string*                                                                                  | :heavy_minus_sign:                                                                        | UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) of the category deleted from the shop's database | 2017-05-12T12:30:00Z                                                                      |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | Unique Category ID as saved in the shop<br/>                                              | CAT123                                                                                    |
| `name`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | **Mandatory in case of creation**. Name of the Category, as displayed in the shop<br/>    | Electronics                                                                               |
| `updateEnabled`                                                                           | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Facilitate to update the existing category in the same request (updateEnabled = true)     | false                                                                                     |
| `url`                                                                                     | *string*                                                                                  | :heavy_minus_sign:                                                                        | URL to the category                                                                       | http://mydomain.com/category/electronics                                                  |