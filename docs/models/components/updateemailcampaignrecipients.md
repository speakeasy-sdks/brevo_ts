# UpdateEmailCampaignRecipients

Segment ids and List ids to include/exclude from campaign


## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `exclusionListIds`                                                                                                                                                                               | *number*[]                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                               | List ids which have to be excluded from a campaign                                                                                                                                               |
| `listIds`                                                                                                                                                                                        | *number*[]                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                               | Lists Ids to send the campaign to. **Campaign should only be updated with listIds if listIds were used to create it. REQUIRED if already not present in campaign and scheduledAt is not empty**<br/> |
| `segmentIds`                                                                                                                                                                                     | *number*[]                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                               | **Mandatory if listIds are not used. Campaign should only be updated with segmentIds if segmentIds were used to create it.** Segment ids to send the campaign to.<br/>                           |