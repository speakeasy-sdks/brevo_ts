# TaskReminder

Task reminder date/time for a task


## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `types`                                            | [components.Types](../../models/shared/types.md)[] | :heavy_check_mark:                                 | Type of task reminder e.g email, push              | email                                              |
| `unit`                                             | [components.Unit](../../models/shared/unit.md)     | :heavy_check_mark:                                 | Unit of time before reminder is to be sent         |                                                    |
| `value`                                            | *number*                                           | :heavy_check_mark:                                 | Value of time unit before reminder is to be sent   | 10                                                 |