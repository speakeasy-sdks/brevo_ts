# PostSendFailed

Test email could not be sent to the following email addresses


## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `blackListedEmails`                                | *string*[]                                         | :heavy_minus_sign:                                 | N/A                                                | jeff.dean@example.com, jim.sue@example.com         |
| `code`                                             | *string*                                           | :heavy_check_mark:                                 | Response code                                      | invalid_parameter                                  |
| `message`                                          | *string*                                           | :heavy_check_mark:                                 | Response message                                   | The email could not be sent to all recipients      |
| `unexistingEmails`                                 | *string*[]                                         | :heavy_minus_sign:                                 | N/A                                                | matthew.dow@example.com, elisa.carrely@example.com |
| `withoutListEmails`                                | *string*[]                                         | :heavy_minus_sign:                                 | N/A                                                | jeff.dean@example.com, jim.sue@example.com         |