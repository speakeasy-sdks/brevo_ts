# Senders
(*senders*)

### Available Operations

* [createSender](#createsender) - Create a new sender
* [deleteSender](#deletesender) - Delete a sender
* [getIps](#getips) - Get all the dedicated IPs for your account
* [getIpsFromSender](#getipsfromsender) - Get all the dedicated IPs for a sender
* [getSenders](#getsenders) - Get the list of all your senders
* [updateSender](#updatesender) - Update a sender
* [validateSenderByOTP](#validatesenderbyotp) - Validate Sender using OTP

## createSender

Create a new sender

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { CreateSenderResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.senders.createSender({
  email: "newsletter@mycompany.com",
  ips: [
    {
      domain: "mycompany.com",
      ip: "123.98.689.7",
      weight: 50,
    },
  ],
  name: "Newsletter",
}).then((res: CreateSenderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.CreateSender](../../models/shared/createsender.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateSenderResponse](../../models/operations/createsenderresponse.md)>**


## deleteSender

Delete a sender

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { DeleteSenderResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.senders.deleteSender({
  senderId: 234732,
}).then((res: DeleteSenderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteSenderRequest](../../models/operations/deletesenderrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteSenderResponse](../../models/operations/deletesenderresponse.md)>**


## getIps

Get all the dedicated IPs for your account

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetIpsResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.senders.getIps().then((res: GetIpsResponse) => {
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

**Promise<[operations.GetIpsResponse](../../models/operations/getipsresponse.md)>**


## getIpsFromSender

Get all the dedicated IPs for a sender

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetIpsFromSenderResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.senders.getIpsFromSender({
  senderId: 848663,
}).then((res: GetIpsFromSenderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetIpsFromSenderRequest](../../models/operations/getipsfromsenderrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetIpsFromSenderResponse](../../models/operations/getipsfromsenderresponse.md)>**


## getSenders

Get the list of all your senders

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetSendersResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.senders.getSenders({
  domain: "extroverted-congo.name",
  ip: "94.106.65.227",
}).then((res: GetSendersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetSendersRequest](../../models/operations/getsendersrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetSendersResponse](../../models/operations/getsendersresponse.md)>**


## updateSender

Update a sender

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateSenderResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.senders.updateSender({
  senderId: 616420,
  updateSender: {
    email: "newsletter@mycompany.com",
    ips: [
      {
        domain: "mycompany.com",
        ip: "123.98.689.7",
        weight: 50,
      },
    ],
    name: "Newsletter",
  },
}).then((res: UpdateSenderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.UpdateSenderRequest](../../models/operations/updatesenderrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UpdateSenderResponse](../../models/operations/updatesenderresponse.md)>**


## validateSenderByOTP

Validate Sender using OTP

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { ValidateSenderByOTPResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.senders.validateSenderByOTP({
  otp: {
    otp: 123456,
  },
  senderId: 499324,
}).then((res: ValidateSenderByOTPResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ValidateSenderByOTPRequest](../../models/operations/validatesenderbyotprequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ValidateSenderByOTPResponse](../../models/operations/validatesenderbyotpresponse.md)>**

