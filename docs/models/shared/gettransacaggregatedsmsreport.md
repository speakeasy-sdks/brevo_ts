# GetTransacAggregatedSmsReport

Aggregated SMS report informations


## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `accepted`                                  | *number*                                    | :heavy_minus_sign:                          | Number of accepted for the timeframe        | 252                                         |
| `blocked`                                   | *number*                                    | :heavy_minus_sign:                          | Number of blocked contact for the timeframe | 2                                           |
| `delivered`                                 | *number*                                    | :heavy_minus_sign:                          | Number of delivered SMS for the timeframe   | 249                                         |
| `hardBounces`                               | *number*                                    | :heavy_minus_sign:                          | Number of hardbounces for the timeframe     | 1                                           |
| `range`                                     | *string*                                    | :heavy_minus_sign:                          | Time frame of the report                    | 2016-09-08\|2017-04-06                      |
| `rejected`                                  | *number*                                    | :heavy_minus_sign:                          | Number of rejected for the timeframe        | 8                                           |
| `replied`                                   | *number*                                    | :heavy_minus_sign:                          | Number of answered SMS for the timeframe    | 12                                          |
| `requests`                                  | *number*                                    | :heavy_minus_sign:                          | Number of requests for the timeframe        | 263                                         |
| `softBounces`                               | *number*                                    | :heavy_minus_sign:                          | Number of softbounces for the timeframe     | 4                                           |
| `unsubscribed`                              | *number*                                    | :heavy_minus_sign:                          | Number of unsubscription for the timeframe  | 6                                           |