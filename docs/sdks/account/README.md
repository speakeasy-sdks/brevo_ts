# Account
(*account*)

### Available Operations

* [getAccount](#getaccount) - Get your account information, plan and credits details
* [getAccountActivity](#getaccountactivity) - Get user activity logs

## getAccount

Get your account information, plan and credits details

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetAccountResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.account.getAccount().then((res: GetAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetAccountResponse](../../models/operations/getaccountresponse.md)>**


## getAccountActivity

Get user activity logs

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetAccountActivityResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.account.getAccountActivity({
  endDate: "sexy",
  limit: 934904,
  offset: 840801,
  startDate: "VGA",
}).then((res: GetAccountActivityResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetAccountActivityRequest](../../models/operations/getaccountactivityrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetAccountActivityResponse](../../models/operations/getaccountactivityresponse.md)>**

