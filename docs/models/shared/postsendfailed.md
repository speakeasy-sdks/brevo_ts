# PostSendFailed


## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `blackListedEmails`                           | *string*[]                                    | :heavy_minus_sign:                            | N/A                                           |                                               |
| `code`                                        | *string*                                      | :heavy_check_mark:                            | Response code                                 | invalid_parameter                             |
| `message`                                     | *string*                                      | :heavy_check_mark:                            | Response message                              | The email could not be sent to all recipients |
| `unexistingEmails`                            | *string*[]                                    | :heavy_minus_sign:                            | N/A                                           |                                               |
| `withoutListEmails`                           | *string*[]                                    | :heavy_minus_sign:                            | N/A                                           |                                               |