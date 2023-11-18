# Domains


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `authenticated`                                                               | *boolean*                                                                     | :heavy_check_mark:                                                            | Status of domain authentication (true=authenticated, false=non authenticated) | true                                                                          |
| `domainName`                                                                  | *string*                                                                      | :heavy_check_mark:                                                            | Domain name                                                                   | mycompany.com                                                                 |
| `id`                                                                          | *number*                                                                      | :heavy_check_mark:                                                            | Id of the domain                                                              | 1                                                                             |
| `ip`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | Dedicated IP associated with domain                                           | 123.98.689.7                                                                  |
| `verified`                                                                    | *boolean*                                                                     | :heavy_check_mark:                                                            | Status of domain verification (true=verified, false=non verified)             | false                                                                         |