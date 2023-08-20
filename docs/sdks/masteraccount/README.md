# masterAccount

### Available Operations

* [deleteCorporateSubAccountId](#deletecorporatesubaccountid) - Delete a sub-account
* [getAccountActivity](#getaccountactivity) - Get user activity logs
* [getCorporateMasterAccount](#getcorporatemasteraccount) - Get the details of requested master account
* [getCorporateSubAccount](#getcorporatesubaccount) - Get the list of all the sub-accounts of the master account.
* [getCorporateSubAccountId](#getcorporatesubaccountid) - Get sub-account details
* [postCorporateSubAccount](#postcorporatesubaccount) - Create a new sub-account under a master account.
* [postCorporateSubAccountKey](#postcorporatesubaccountkey) - Create an API key for a sub-account
* [postCorporateSubAccountSsoToken](#postcorporatesubaccountssotoken) - Generate SSO token to access Brevo
* [putCorporateSubAccountIdApplicationsToggle](#putcorporatesubaccountidapplicationstoggle) - Enable/disable sub-account application(s)
* [putCorporateSubAccountIdPlan](#putcorporatesubaccountidplan) - Update sub-account plan

## deleteCorporateSubAccountId

Delete a sub-account

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteCorporateSubAccountIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.masterAccount.deleteCorporateSubAccountId({
  id: 36033,
}).then((res: DeleteCorporateSubAccountIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteCorporateSubAccountIdRequest](../../models/operations/deletecorporatesubaccountidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteCorporateSubAccountIdResponse](../../models/operations/deletecorporatesubaccountidresponse.md)>**


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

sdk.masterAccount.getAccountActivity({
  endDate: "beatae",
  limit: 174772,
  offset: 316488,
  startDate: "laboriosam",
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


## getCorporateMasterAccount

This endpoint will provide the details of the master account.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCorporateMasterAccountResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.masterAccount.getCorporateMasterAccount().then((res: GetCorporateMasterAccountResponse) => {
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

**Promise<[operations.GetCorporateMasterAccountResponse](../../models/operations/getcorporatemasteraccountresponse.md)>**


## getCorporateSubAccount

This endpoint will provide the list all the sub-accounts of the master account.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCorporateSubAccountResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.masterAccount.getCorporateSubAccount({
  limit: 246535,
  offset: 952143,
}).then((res: GetCorporateSubAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCorporateSubAccountRequest](../../models/operations/getcorporatesubaccountrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCorporateSubAccountResponse](../../models/operations/getcorporatesubaccountresponse.md)>**


## getCorporateSubAccountId

This endpoint will provide the details for the specified sub-account company

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCorporateSubAccountIdResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.masterAccount.getCorporateSubAccountId({
  id: 562783,
}).then((res: GetCorporateSubAccountIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCorporateSubAccountIdRequest](../../models/operations/getcorporatesubaccountidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCorporateSubAccountIdResponse](../../models/operations/getcorporatesubaccountidresponse.md)>**


## postCorporateSubAccount

This endpoint will create a new sub-account under a master account

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PostCorporateSubAccountResponse } from "BREVO/dist/sdk/models/operations";
import { CreateSubAccountLanguage } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.masterAccount.postCorporateSubAccount({
  companyName: "magnam",
  email: "Carole_McClure44@hotmail.com",
  language: CreateSubAccountLanguage.Fr,
  timezone: "eveniet",
}).then((res: PostCorporateSubAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.CreateSubAccount](../../models/shared/createsubaccount.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.PostCorporateSubAccountResponse](../../models/operations/postcorporatesubaccountresponse.md)>**


## postCorporateSubAccountKey

This endpoint will generate an API v3 key for a sub account

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PostCorporateSubAccountKeyResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.masterAccount.postCorporateSubAccountKey({
  id: 3232323,
  name: "My Api Key",
}).then((res: PostCorporateSubAccountKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PostCorporateSubAccountKeyRequestBody](../../models/operations/postcorporatesubaccountkeyrequestbody.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PostCorporateSubAccountKeyResponse](../../models/operations/postcorporatesubaccountkeyresponse.md)>**


## postCorporateSubAccountSsoToken

This endpoint generates an sso token to authenticate and access a sub-account of the master using the account endpoint https://account-app.brevo.com/account/login/sub-account/sso/[token], where [token] will be replaced by the actual token.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import {
  PostCorporateSubAccountSsoTokenRequestBodyTarget,
  PostCorporateSubAccountSsoTokenResponse,
} from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.masterAccount.postCorporateSubAccountSsoToken({
  email: "vipin+subaccount@brevo.com",
  id: 3232323,
  target: PostCorporateSubAccountSsoTokenRequestBodyTarget.Contacts,
  url: "https://app.brevo.com/senders/domain/list",
}).then((res: PostCorporateSubAccountSsoTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PostCorporateSubAccountSsoTokenRequestBody](../../models/operations/postcorporatesubaccountssotokenrequestbody.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PostCorporateSubAccountSsoTokenResponse](../../models/operations/postcorporatesubaccountssotokenresponse.md)>**


## putCorporateSubAccountIdApplicationsToggle

API endpoints for the Corporate owner to enable/disable applications on the sub-account

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PutCorporateSubAccountIdApplicationsToggleResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.masterAccount.putCorporateSubAccountIdApplicationsToggle({
  id: 580887,
  subAccountAppsToggleRequest: {
    automation: false,
    conversations: false,
    crm: false,
    emailCampaigns: false,
    facebookAds: false,
    inbox: false,
    landingPages: false,
    meetings: false,
    smsCampaigns: false,
    transactionalEmails: false,
    transactionalSms: false,
    webPush: false,
    whatsapp: false,
  },
}).then((res: PutCorporateSubAccountIdApplicationsToggleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.PutCorporateSubAccountIdApplicationsToggleRequest](../../models/operations/putcorporatesubaccountidapplicationstogglerequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.PutCorporateSubAccountIdApplicationsToggleResponse](../../models/operations/putcorporatesubaccountidapplicationstoggleresponse.md)>**


## putCorporateSubAccountIdPlan

This endpoint will update the sub-account plan

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { PutCorporateSubAccountIdPlanResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.masterAccount.putCorporateSubAccountIdPlan({
  id: 160230,
  subAccountUpdatePlanRequest: {
    credits: {
      email: 145870,
    },
    features: {
      inbox: 661118,
      landingPage: 335631,
      users: 440264,
    },
  },
}).then((res: PutCorporateSubAccountIdPlanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PutCorporateSubAccountIdPlanRequest](../../models/operations/putcorporatesubaccountidplanrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PutCorporateSubAccountIdPlanResponse](../../models/operations/putcorporatesubaccountidplanresponse.md)>**

