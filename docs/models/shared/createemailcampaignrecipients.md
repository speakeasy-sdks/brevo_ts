# CreateEmailCampaignRecipients

Segment ids and List ids to include/exclude from campaign


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `exclusionListIds`                                                           | *number*[]                                                                   | :heavy_minus_sign:                                                           | List ids to exclude from the campaign                                        |
| `listIds`                                                                    | *number*[]                                                                   | :heavy_minus_sign:                                                           | **Mandatory if scheduledAt is not empty**. List Ids to send the campaign to<br/> |
| `segmentIds`                                                                 | *number*[]                                                                   | :heavy_minus_sign:                                                           | **Mandatory if listIds are not used**. Segment ids to send the campaign to.<br/> |