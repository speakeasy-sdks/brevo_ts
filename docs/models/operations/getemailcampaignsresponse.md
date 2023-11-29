# GetEmailCampaignsResponse


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `contentType`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | HTTP response content type for this operation                                |
| `statusCode`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | HTTP response status code for this operation                                 |
| `rawResponse`                                                                | [AxiosResponse](https://axios-http.com/docs/res_schema)                      | :heavy_check_mark:                                                           | Raw HTTP response; suitable for custom response parsing                      |
| `getEmailCampaigns`                                                          | [components.GetEmailCampaigns](../../models/components/getemailcampaigns.md) | :heavy_minus_sign:                                                           | Email campaigns informations                                                 |