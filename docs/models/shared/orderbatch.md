# OrderBatch


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `notifyUrl`                                                      | *string*                                                         | :heavy_minus_sign:                                               | Notify Url provided by client to get the status of batch request | https://en.wikipedia.org/wiki/Webhook                            |
| `orders`                                                         | [components.Order](../../models/shared/order.md)[]               | :heavy_check_mark:                                               | array of order objects                                           |                                                                  |