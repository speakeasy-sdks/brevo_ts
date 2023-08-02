# RemoveCredits

Values to post to remove email or SMS credits from a specific child account


## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `email`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | **Required if sms credits are empty.** Email credits to be removed from the child account<br/> | 500                                                                                        |
| `sms`                                                                                      | *number*                                                                                   | :heavy_minus_sign:                                                                         | **Required if email credits are empty.** SMS credits to be removed from the child account<br/> | 300                                                                                        |