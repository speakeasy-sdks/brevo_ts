# Domains

### Available Operations

* [authenticateDomain](#authenticatedomain) - Authenticate a domain
* [createDomain](#createdomain) - Create a new domain
* [deleteDomain](#deletedomain) - Delete a domain
* [getDomainConfiguration](#getdomainconfiguration) - Validate domain configuration
* [getDomains](#getdomains) - Get the list of all your domains

## authenticateDomain

Authenticate a domain

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { AuthenticateDomainResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.domains.authenticateDomain({
  domainName: "aut",
}).then((res: AuthenticateDomainResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.AuthenticateDomainRequest](../../models/operations/authenticatedomainrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.AuthenticateDomainResponse](../../models/operations/authenticatedomainresponse.md)>**


## createDomain

Create a new domain

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { CreateDomainResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.domains.createDomain({
  name: "mycompany.com",
}).then((res: CreateDomainResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.CreateDomain](../../models/shared/createdomain.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateDomainResponse](../../models/operations/createdomainresponse.md)>**


## deleteDomain

Delete a domain

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteDomainResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.domains.deleteDomain({
  domainName: "voluptatibus",
}).then((res: DeleteDomainResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteDomainRequest](../../models/operations/deletedomainrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteDomainResponse](../../models/operations/deletedomainresponse.md)>**


## getDomainConfiguration

Validate domain configuration

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetDomainConfigurationResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.domains.getDomainConfiguration({
  domainName: "exercitationem",
}).then((res: GetDomainConfigurationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetDomainConfigurationRequest](../../models/operations/getdomainconfigurationrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetDomainConfigurationResponse](../../models/operations/getdomainconfigurationresponse.md)>**


## getDomains

Get the list of all your domains

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetDomainsResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.domains.getDomains().then((res: GetDomainsResponse) => {
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

**Promise<[operations.GetDomainsResponse](../../models/operations/getdomainsresponse.md)>**

