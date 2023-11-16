# MasterAccount
(*masterAccount*)

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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.masterAccount.deleteCorporateSubAccountId({
    id: 240183,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteCorporateSubAccountIdRequest](../../models/operations/deletecorporatesubaccountidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteCorporateSubAccountIdResponse](../../models/operations/deletecorporatesubaccountidresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getAccountActivity

Get user activity logs

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.masterAccount.getAccountActivity({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetAccountActivityRequest](../../models/operations/getaccountactivityrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetAccountActivityResponse](../../models/operations/getaccountactivityresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getCorporateMasterAccount

This endpoint will provide the details of the master account.

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.masterAccount.getCorporateMasterAccount();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetCorporateMasterAccountResponse](../../models/operations/getcorporatemasteraccountresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getCorporateSubAccount

This endpoint will provide the list all the sub-accounts of the master account.

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.masterAccount.getCorporateSubAccount({
    limit: 809548,
    offset: 775566,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCorporateSubAccountRequest](../../models/operations/getcorporatesubaccountrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCorporateSubAccountResponse](../../models/operations/getcorporatesubaccountresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getCorporateSubAccountId

This endpoint will provide the details for the specified sub-account company

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.masterAccount.getCorporateSubAccountId({
    id: 504418,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCorporateSubAccountIdRequest](../../models/operations/getcorporatesubaccountidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCorporateSubAccountIdResponse](../../models/operations/getcorporatesubaccountidresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## postCorporateSubAccount

This endpoint will create a new sub-account under a master account

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { CreateSubAccountLanguage } from "BREVO/dist/models/components";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.masterAccount.postCorporateSubAccount({
    companyName: "Bayer, Graham and Lemke",
    email: "Maxime61@hotmail.com",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [components.CreateSubAccount](../../models/components/createsubaccount.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.PostCorporateSubAccountResponse](../../models/operations/postcorporatesubaccountresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## postCorporateSubAccountKey

This endpoint will generate an API v3 key for a sub account

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.masterAccount.postCorporateSubAccountKey({
    id: 3232323,
    name: "My Api Key",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PostCorporateSubAccountKeyRequestBody](../../models/operations/postcorporatesubaccountkeyrequestbody.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PostCorporateSubAccountKeyResponse](../../models/operations/postcorporatesubaccountkeyresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400               | application/json  |
| errors.SDKError   | 400-600           | */*               |

## postCorporateSubAccountSsoToken

This endpoint generates an sso token to authenticate and access a sub-account of the master using the account endpoint https://account-app.brevo.com/account/login/sub-account/sso/[token], where [token] will be replaced by the actual token.

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { Target } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.masterAccount.postCorporateSubAccountSsoToken({
    email: "vipin+subaccount@brevo.com",
    id: 3232323,
    target: Target.Contacts,
    url: "https://app.brevo.com/senders/domain/list",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PostCorporateSubAccountSsoTokenRequestBody](../../models/operations/postcorporatesubaccountssotokenrequestbody.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PostCorporateSubAccountSsoTokenResponse](../../models/operations/postcorporatesubaccountssotokenresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## putCorporateSubAccountIdApplicationsToggle

API endpoints for the Corporate owner to enable/disable applications on the sub-account

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.masterAccount.putCorporateSubAccountIdApplicationsToggle({
    id: 310762,
    subAccountAppsToggleRequest: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.PutCorporateSubAccountIdApplicationsToggleRequest](../../models/operations/putcorporatesubaccountidapplicationstogglerequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.PutCorporateSubAccountIdApplicationsToggleResponse](../../models/operations/putcorporatesubaccountidapplicationstoggleresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## putCorporateSubAccountIdPlan

This endpoint will update the sub-account plan

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.masterAccount.putCorporateSubAccountIdPlan({
    id: 152623,
    subAccountUpdatePlanRequest: {
      credits: {},
      features: {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PutCorporateSubAccountIdPlanRequest](../../models/operations/putcorporatesubaccountidplanrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PutCorporateSubAccountIdPlanResponse](../../models/operations/putcorporatesubaccountidplanresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403           | application/json  |
| errors.SDKError   | 400-600           | */*               |
