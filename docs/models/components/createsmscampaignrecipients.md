# CreateSmsCampaignRecipients


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `exclusionListIds`                                                           | *number*[]                                                                   | :heavy_minus_sign:                                                           | List ids which have to be excluded from a campaign                           | 15                                                                           |
| `listIds`                                                                    | *number*[]                                                                   | :heavy_check_mark:                                                           | Lists Ids to send the campaign to. **REQUIRED if scheduledAt is not empty**<br/> | 54                                                                           |