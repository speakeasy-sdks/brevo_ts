# GetCrmNotesIdResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | HTTP response content type for this operation           |
| `note`                                                  | [shared.Note](../../models/shared/note.md)              | :heavy_minus_sign:                                      | Returns the Note by id                                  |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | HTTP response status code for this operation            |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | Raw HTTP response; suitable for custom response parsing |
| `errorModel`                                            | [shared.ErrorModel](../../models/shared/errormodel.md)  | :heavy_minus_sign:                                      | Returned when invalid data posted                       |