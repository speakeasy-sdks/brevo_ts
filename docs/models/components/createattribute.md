# CreateAttribute


## Fields

| Field                                                                                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enumeration`                                                                                                                                                                                                                                                                                                                                     | [components.Enumeration](../../models/components/enumeration.md)[]                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                | List of values and labels that the attribute can take. **Use only if the attribute's category is "category"**. For example:<br/>**[{"value":1, "label":"male"}, {"value":2, "label":"female"}]**<br/>                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                   |
| `isRecurring`                                                                                                                                                                                                                                                                                                                                     | *boolean*                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                | Type of the attribute. **Use only if the attribute's category is 'calculated' or 'global'**<br/>                                                                                                                                                                                                                                                  | true                                                                                                                                                                                                                                                                                                                                              |
| `type`                                                                                                                                                                                                                                                                                                                                            | [components.CreateAttributeType](../../models/components/createattributetype.md)                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                | Type of the attribute. **Use only if the attribute's category is 'normal', 'category' or 'transactional'**<br/>Type **boolean** is only available if the category is **normal** attribute<br/>Type **id** is only available if the category is **transactional** attribute<br/>Type **category** is only available if the category is **category** attribute<br/> | text                                                                                                                                                                                                                                                                                                                                              |
| `value`                                                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                | Value of the attribute. **Use only if the attribute's category is 'calculated' or 'global'**<br/>                                                                                                                                                                                                                                                 | COUNT[BLACKLISTED,BLACKLISTED,<,NOW()]                                                                                                                                                                                                                                                                                                            |