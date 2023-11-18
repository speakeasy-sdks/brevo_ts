# Note

Note Details


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `authorId`                                                                                    | [components.AuthorId](../../models/components/authorid.md)                                    | :heavy_minus_sign:                                                                            | Account details of user which created the note                                                |                                                                                               |
| `contactIds`                                                                                  | *number*[]                                                                                    | :heavy_minus_sign:                                                                            | Contact ids linked to a note                                                                  | 247,1,2                                                                                       |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Note created date/time                                                                        | 2017-05-01T17:05:03.000Z                                                                      |
| `dealIds`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Deal ids linked to a note                                                                     | 61a5ce58c5d4795761045990,61a5ce58c5d4795761045991                                             |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique note Id                                                                                | 61a5cd07ca1347c82306ad09                                                                      |
| `text`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Text content of a note                                                                        | In communication with client for resolution of queries.                                       |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Note updated date/time                                                                        | 2017-05-01T17:05:03.000Z                                                                      |