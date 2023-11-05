# TaskReminder

Task reminder date/time for a task


## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `types`                                                         | [TaskReminderTypes](../../models/shared/taskremindertypes.md)[] | :heavy_check_mark:                                              | Type of task reminder e.g email, push                           | email                                                           |
| `unit`                                                          | [TaskReminderUnit](../../models/shared/taskreminderunit.md)     | :heavy_check_mark:                                              | Unit of time before reminder is to be sent                      |                                                                 |
| `value`                                                         | *number*                                                        | :heavy_check_mark:                                              | Value of time unit before reminder is to be sent                | 10                                                              |