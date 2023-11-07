# UpdateResellerChildRequest


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `childIdentifier`                                            | *string*                                                     | :heavy_check_mark:                                           | Either auth key or id of reseller's child                    |
| `updateChild`                                                | [components.UpdateChild](../../models/shared/updatechild.md) | :heavy_check_mark:                                           | values to update in child profile                            |