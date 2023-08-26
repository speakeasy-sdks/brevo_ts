# GetCrmNotesResponse


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `contentType`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `noteList`                                               | [shared.Note](../../models/shared/note.md)[]             | :heavy_minus_sign:                                       | Returns notes list with filters                          |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `rawResponse`                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                       | N/A                                                      |
| `errorModel`                                             | [shared.ErrorModel](../../models/shared/errormodel.md)   | :heavy_minus_sign:                                       | Returned when query params are invalid                   |