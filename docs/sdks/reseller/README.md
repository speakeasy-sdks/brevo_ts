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

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.addCredits({
    addCredits: {
      email: 1200,
      sms: 450,
    },
    childIdentifier: "string",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddCreditsRequest](../../models/operations/addcreditsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AddCreditsResponse](../../models/operations/addcreditsresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403,404       | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## associateIpToChild

Associate a dedicated IP to the child

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.associateIpToChild({
    childIdentifier: "string",
    manageIp: {
      ip: "123.65.8.22",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AssociateIpToChildRequest](../../models/operations/associateiptochildrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AssociateIpToChildResponse](../../models/operations/associateiptochildresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## createChildDomain

Create a domain for a child account

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.createChildDomain({
    addChildDomain: {
      domain: "mychilddomain.com",
    },
    childIdentifier: "string",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateChildDomainRequest](../../models/operations/createchilddomainrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateChildDomainResponse](../../models/operations/createchilddomainresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403,404       | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## createResellerChild

Creates a reseller child

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { Language } from "BREVO/models/components";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.createResellerChild({
    companyName: "Your Company",
    email: "josh.cruise@example.com",
    firstName: "Josh",
    language: Language.En,
    lastName: "Cruise",
    password: "Pa55w0rd65",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateChild](../../models/components/createchild.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateResellerChildResponse](../../models/operations/createresellerchildresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403           | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## deleteChildDomain

Delete the sender domain of the reseller child based on the childIdentifier and domainName passed

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.deleteChildDomain({
    childIdentifier: "string",
    domainName: "silver-redesign.org",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteChildDomainRequest](../../models/operations/deletechilddomainrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteChildDomainResponse](../../models/operations/deletechilddomainresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403,404       | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## deleteResellerChild

Delete a single reseller child based on the child identifier supplied

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.deleteResellerChild({
    childIdentifier: "string",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteResellerChildRequest](../../models/operations/deleteresellerchildrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteResellerChildResponse](../../models/operations/deleteresellerchildresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403,404       | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## dissociateIpFromChild

Dissociate a dedicated IP to the child

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.dissociateIpFromChild({
    childIdentifier: "string",
    manageIp: {
      ip: "123.65.8.22",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DissociateIpFromChildRequest](../../models/operations/dissociateipfromchildrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DissociateIpFromChildResponse](../../models/operations/dissociateipfromchildresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,404           | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## getChildAccountCreationStatus

Get the status of a reseller's child account creation, whether it is successfully created (exists) or not based on the childIdentifier supplied

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.getChildAccountCreationStatus({
    childIdentifier: "string",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetChildAccountCreationStatusRequest](../../models/operations/getchildaccountcreationstatusrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetChildAccountCreationStatusResponse](../../models/operations/getchildaccountcreationstatusresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403,404       | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## getChildDomains

Get all sender domains for a specific child account

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.getChildDomains({
    childIdentifier: "string",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetChildDomainsRequest](../../models/operations/getchilddomainsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetChildDomainsResponse](../../models/operations/getchilddomainsresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403,404       | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## getChildInfo

Get a child account's details

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.getChildInfo({
    childIdentifier: "string",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetChildInfoRequest](../../models/operations/getchildinforequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetChildInfoResponse](../../models/operations/getchildinforesponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403,404       | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## getResellerChilds

Get the list of all children accounts

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.getResellerChilds({});

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetResellerChildsRequest](../../models/operations/getresellerchildsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetResellerChildsResponse](../../models/operations/getresellerchildsresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 403               | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## getSsoToken

It returns a session [token] which will remain valid for a short period of time. A child account will be able to access a white-labeled section by using the following url pattern => https:/email.mydomain.com/login/sso?token=[token]

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.getSsoToken({
    childIdentifier: "string",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSsoTokenRequest](../../models/operations/getssotokenrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetSsoTokenResponse](../../models/operations/getssotokenresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403,404       | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## removeCredits

Remove Email and/or SMS credits from a specific child account

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.removeCredits({
    childIdentifier: "string",
    removeCredits: {
      email: 500,
      sms: 300,
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCreditsRequest](../../models/operations/removecreditsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.RemoveCreditsResponse](../../models/operations/removecreditsresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403,404       | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## updateChildAccountStatus

Update info of reseller's child account status based on the identifier supplied

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.updateChildAccountStatus({
    childIdentifier: "string",
    updateChildAccountStatus: {
      marketingAutomation: true,
      smsCampaign: true,
      transactionalEmail: false,
      transactionalSms: false,
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateChildAccountStatusRequest](../../models/operations/updatechildaccountstatusrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateChildAccountStatusResponse](../../models/operations/updatechildaccountstatusresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403,404       | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## updateChildDomain

Update the sender domain of reseller's child based on the childIdentifier and domainName passed

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.updateChildDomain({
    childIdentifier: "string",
    domainName: "turbulent-quotation.biz",
    updateChildDomain: {
      domain: "myupdateddomain.com",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateChildDomainRequest](../../models/operations/updatechilddomainrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateChildDomainResponse](../../models/operations/updatechilddomainresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403,404       | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

## updateResellerChild

Update info of reseller's child based on the child identifier supplied

### Example Usage

```typescript
import { Brevo } from "BREVO";

async function run() {
  const sdk = new Brevo({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.reseller.updateResellerChild({
    childIdentifier: "string",
    updateChild: {
      companyName: "Your Company",
      email: "josh.cruise@example.com",
      firstName: "Josh",
      lastName: "Cruise",
      password: "Pa55w0rd65",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateResellerChildRequest](../../models/operations/updateresellerchildrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateResellerChildResponse](../../models/operations/updateresellerchildresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,403,404       | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |
