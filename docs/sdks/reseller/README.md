# Reseller
(*reseller*)

### Available Operations

* [addCredits](#addcredits) - Add Email and/or SMS credits to a specific child account
* [associateIpToChild](#associateiptochild) - Associate a dedicated IP to the child
* [createChildDomain](#createchilddomain) - Create a domain for a child account
* [createResellerChild](#createresellerchild) - Creates a reseller child
* [deleteChildDomain](#deletechilddomain) - Delete the sender domain of the reseller child based on the childIdentifier and domainName passed
* [deleteResellerChild](#deleteresellerchild) - Delete a single reseller child based on the child identifier supplied
* [dissociateIpFromChild](#dissociateipfromchild) - Dissociate a dedicated IP to the child
* [getChildAccountCreationStatus](#getchildaccountcreationstatus) - Get the status of a reseller's child account creation, whether it is successfully created (exists) or not based on the childIdentifier supplied
* [getChildDomains](#getchilddomains) - Get all sender domains for a specific child account
* [getChildInfo](#getchildinfo) - Get a child account's details
* [getResellerChilds](#getresellerchilds) - Get the list of all children accounts
* [getSsoToken](#getssotoken) - Get session token to access Brevo (SSO)
* [removeCredits](#removecredits) - Remove Email and/or SMS credits from a specific child account
* [updateChildAccountStatus](#updatechildaccountstatus) - Update info of reseller's child account status based on the identifier supplied
* [updateChildDomain](#updatechilddomain) - Update the sender domain of reseller's child based on the childIdentifier and domainName passed
* [updateResellerChild](#updateresellerchild) - Update info of reseller's child based on the child identifier supplied

## addCredits

Add Email and/or SMS credits to a specific child account

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { AddCreditsResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.addCredits({
  addCredits: {
    email: 1200,
    sms: 450,
  },
  childIdentifier: "tenetur",
}).then((res: AddCreditsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.AddCreditsRequest](../../models/operations/addcreditsrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.AddCreditsResponse](../../models/operations/addcreditsresponse.md)>**


## associateIpToChild

Associate a dedicated IP to the child

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { AssociateIpToChildResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.associateIpToChild({
  childIdentifier: "laboriosam",
  manageIp: {
    ip: "123.65.8.22",
  },
}).then((res: AssociateIpToChildResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.AssociateIpToChildRequest](../../models/operations/associateiptochildrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.AssociateIpToChildResponse](../../models/operations/associateiptochildresponse.md)>**


## createChildDomain

Create a domain for a child account

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { CreateChildDomainResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.createChildDomain({
  addChildDomain: {
    domain: "mychilddomain.com",
  },
  childIdentifier: "alias",
}).then((res: CreateChildDomainResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateChildDomainRequest](../../models/operations/createchilddomainrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateChildDomainResponse](../../models/operations/createchilddomainresponse.md)>**


## createResellerChild

Creates a reseller child

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { CreateResellerChildResponse } from "BREVO/dist/sdk/models/operations";
import { CreateChildLanguage } from "BREVO/dist/sdk/models/shared";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.createResellerChild({
  companyName: "Your Company",
  email: "josh.cruise@example.com",
  firstName: "Josh",
  language: CreateChildLanguage.En,
  lastName: "Cruise",
  password: "Pa55w0rd65",
}).then((res: CreateResellerChildResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.CreateChild](../../models/shared/createchild.md)     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateResellerChildResponse](../../models/operations/createresellerchildresponse.md)>**


## deleteChildDomain

Delete the sender domain of the reseller child based on the childIdentifier and domainName passed

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteChildDomainResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.deleteChildDomain({
  childIdentifier: "amet",
  domainName: "deserunt",
}).then((res: DeleteChildDomainResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteChildDomainRequest](../../models/operations/deletechilddomainrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteChildDomainResponse](../../models/operations/deletechilddomainresponse.md)>**


## deleteResellerChild

Delete a single reseller child based on the child identifier supplied

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteResellerChildResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.deleteResellerChild({
  childIdentifier: "voluptate",
}).then((res: DeleteResellerChildResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteResellerChildRequest](../../models/operations/deleteresellerchildrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteResellerChildResponse](../../models/operations/deleteresellerchildresponse.md)>**


## dissociateIpFromChild

Dissociate a dedicated IP to the child

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DissociateIpFromChildResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.dissociateIpFromChild({
  childIdentifier: "unde",
  manageIp: {
    ip: "123.65.8.22",
  },
}).then((res: DissociateIpFromChildResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DissociateIpFromChildRequest](../../models/operations/dissociateipfromchildrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DissociateIpFromChildResponse](../../models/operations/dissociateipfromchildresponse.md)>**


## getChildAccountCreationStatus

Get the status of a reseller's child account creation, whether it is successfully created (exists) or not based on the childIdentifier supplied

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetChildAccountCreationStatusResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.getChildAccountCreationStatus({
  childIdentifier: "reiciendis",
}).then((res: GetChildAccountCreationStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetChildAccountCreationStatusRequest](../../models/operations/getchildaccountcreationstatusrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetChildAccountCreationStatusResponse](../../models/operations/getchildaccountcreationstatusresponse.md)>**


## getChildDomains

Get all sender domains for a specific child account

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetChildDomainsResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.getChildDomains({
  childIdentifier: "provident",
}).then((res: GetChildDomainsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetChildDomainsRequest](../../models/operations/getchilddomainsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetChildDomainsResponse](../../models/operations/getchilddomainsresponse.md)>**


## getChildInfo

Get a child account's details

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetChildInfoResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.getChildInfo({
  childIdentifier: "repellendus",
}).then((res: GetChildInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetChildInfoRequest](../../models/operations/getchildinforequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetChildInfoResponse](../../models/operations/getchildinforesponse.md)>**


## getResellerChilds

Get the list of all children accounts

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetResellerChildsResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.getResellerChilds({
  limit: 962771,
  offset: 914791,
}).then((res: GetResellerChildsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetResellerChildsRequest](../../models/operations/getresellerchildsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetResellerChildsResponse](../../models/operations/getresellerchildsresponse.md)>**


## getSsoToken

It returns a session [token] which will remain valid for a short period of time. A child account will be able to access a white-labeled section by using the following url pattern => https:/email.mydomain.com/login/sso?token=[token]

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetSsoTokenResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.getSsoToken({
  childIdentifier: "perferendis",
}).then((res: GetSsoTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetSsoTokenRequest](../../models/operations/getssotokenrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetSsoTokenResponse](../../models/operations/getssotokenresponse.md)>**


## removeCredits

Remove Email and/or SMS credits from a specific child account

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { RemoveCreditsResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.removeCredits({
  childIdentifier: "est",
  removeCredits: {
    email: 500,
    sms: 300,
  },
}).then((res: RemoveCreditsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.RemoveCreditsRequest](../../models/operations/removecreditsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.RemoveCreditsResponse](../../models/operations/removecreditsresponse.md)>**


## updateChildAccountStatus

Update info of reseller's child account status based on the identifier supplied

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateChildAccountStatusResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.updateChildAccountStatus({
  childIdentifier: "quidem",
  updateChildAccountStatus: {
    marketingAutomation: true,
    smsCampaign: true,
    transactionalEmail: false,
    transactionalSms: false,
  },
}).then((res: UpdateChildAccountStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.UpdateChildAccountStatusRequest](../../models/operations/updatechildaccountstatusrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.UpdateChildAccountStatusResponse](../../models/operations/updatechildaccountstatusresponse.md)>**


## updateChildDomain

Update the sender domain of reseller's child based on the childIdentifier and domainName passed

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateChildDomainResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.updateChildDomain({
  childIdentifier: "reprehenderit",
  domainName: "facere",
  updateChildDomain: {
    domain: "myupdateddomain.com",
  },
}).then((res: UpdateChildDomainResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateChildDomainRequest](../../models/operations/updatechilddomainrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateChildDomainResponse](../../models/operations/updatechilddomainresponse.md)>**


## updateResellerChild

Update info of reseller's child based on the child identifier supplied

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateResellerChildResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.reseller.updateResellerChild({
  childIdentifier: "fuga",
  updateChild: {
    companyName: "Your Company",
    email: "josh.cruise@example.com",
    firstName: "Josh",
    lastName: "Cruise",
    password: "Pa55w0rd65",
  },
}).then((res: UpdateResellerChildResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateResellerChildRequest](../../models/operations/updateresellerchildrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateResellerChildResponse](../../models/operations/updateresellerchildresponse.md)>**

