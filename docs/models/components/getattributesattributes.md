# GetAttributesAttributes


## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `calculatedValue`                                                                            | *string*                                                                                     | :heavy_minus_sign:                                                                           | Calculated value formula                                                                     | COUNT[ORDER_ID,ORDER_DATE,==,NOW(-1)]                                                        |
| `category`                                                                                   | [components.GetAttributesCategory](../../models/components/getattributescategory.md)         | :heavy_check_mark:                                                                           | Category of the attribute                                                                    | category                                                                                     |
| `enumeration`                                                                                | [components.GetAttributesEnumeration](../../models/components/getattributesenumeration.md)[] | :heavy_minus_sign:                                                                           | Parameter only available for "category" type attributes.                                     |                                                                                              |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | Name of the attribute                                                                        | LASTNAME                                                                                     |
| `type`                                                                                       | [components.GetAttributesType](../../models/components/getattributestype.md)                 | :heavy_minus_sign:                                                                           | Type of the attribute                                                                        | text                                                                                         |