# SendSms


## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `messageId`                                   | *number*                                      | :heavy_check_mark:                            | N/A                                           | 1511882900176220                              |
| `reference`                                   | *string*                                      | :heavy_check_mark:                            | N/A                                           | ab1cde2fgh3i4jklmno                           |
| `remainingCredits`                            | *number*                                      | :heavy_minus_sign:                            | Remaining SMS credits of the user             | 82.85                                         |
| `smsCount`                                    | *number*                                      | :heavy_minus_sign:                            | Count of SMS's to send multiple text messages | 2                                             |
| `usedCredits`                                 | *number*                                      | :heavy_minus_sign:                            | SMS credits used per text message             | 0.7                                           |