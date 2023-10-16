# UpdateChildAccountStatusRequest


## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `childIdentifier`                                                                  | *string*                                                                           | :heavy_check_mark:                                                                 | Either auth key or id of reseller's child                                          |
| `updateChildAccountStatus`                                                         | [shared.UpdateChildAccountStatus](../../models/shared/updatechildaccountstatus.md) | :heavy_check_mark:                                                                 | values to update in child account status                                           |