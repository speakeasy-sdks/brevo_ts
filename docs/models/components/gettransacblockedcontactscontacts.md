# GetTransacBlockedContactsContacts


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `blockedAt`                                                 | *string*                                                    | :heavy_check_mark:                                          | Date when the contact was blocked or unsubscribed on        | 2017-05-01 12:30:00 +0000 UTC                               |
| `email`                                                     | *string*                                                    | :heavy_check_mark:                                          | Email address of the blocked or unsubscribed contact        | john.smith@example.com                                      |
| `reason`                                                    | [components.Reason](../../models/components/reason.md)      | :heavy_check_mark:                                          | Reason for blocking / unsubscribing                         | Admin blocked                                               |
| `senderEmail`                                               | *string*                                                    | :heavy_check_mark:                                          | Sender email address of the blocked or unsubscribed contact | john.smith@example.com                                      |