# GetTransacSmsReportReports


## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `accepted`                              | *number*                                | :heavy_minus_sign:                      | Number of accepted for the date         | 85                                      |
| `blocked`                               | *number*                                | :heavy_minus_sign:                      | Number of blocked contact for the date  | 0                                       |
| `date`                                  | [RFCDate](../../types/rfcdate.md)       | :heavy_minus_sign:                      | Date for which statistics are retrieved | 2017-03-17 00:00:00 +0000 UTC           |
| `delivered`                             | *number*                                | :heavy_minus_sign:                      | Number of delivered SMS for the date    | 85                                      |
| `hardBounces`                           | *number*                                | :heavy_minus_sign:                      | Number of hardbounces for the date      | 1                                       |
| `rejected`                              | *number*                                | :heavy_minus_sign:                      | Number of rejected for the date         | 1                                       |
| `replied`                               | *number*                                | :heavy_minus_sign:                      | Number of answered SMS for the date     | 2                                       |
| `requests`                              | *number*                                | :heavy_minus_sign:                      | Number of requests for the date         | 87                                      |
| `softBounces`                           | *number*                                | :heavy_minus_sign:                      | Number of softbounces for the date      | 1                                       |
| `unsubscribed`                          | *number*                                | :heavy_minus_sign:                      | Number of unsubscription for the date   | 1                                       |