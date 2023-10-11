# PostCrmNotesResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | HTTP response content type for this operation           |
| `noteId`                                                | [shared.NoteId](../../models/shared/noteid.md)          | :heavy_minus_sign:                                      | Created new note                                        |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | HTTP response status code for this operation            |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | Raw HTTP response; suitable for custom response parsing |
| `errorModel`                                            | [shared.ErrorModel](../../models/shared/errormodel.md)  | :heavy_minus_sign:                                      | Returned when invalid data posted                       |