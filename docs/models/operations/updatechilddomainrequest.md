# UpdateChildDomainRequest


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `childIdentifier`                                                        | *string*                                                                 | :heavy_check_mark:                                                       | Either auth key or id of reseller's child                                |
| `domainName`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | Pass the existing domain that needs to be updated                        |
| `updateChildDomain`                                                      | [components.UpdateChildDomain](../../models/shared/updatechilddomain.md) | :heavy_check_mark:                                                       | value to update for sender domain                                        |