# process

### Available Operations

* [getProcess](#getprocess) - Return the informations for a process
* [getProcesses](#getprocesses) - Return all the processes for your account

## getProcess

Return the informations for a process

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetProcessResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.process.getProcess({
  processId: 695270,
}).then((res: GetProcessResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetProcessRequest](../../models/operations/getprocessrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetProcessResponse](../../models/operations/getprocessresponse.md)>**


## getProcesses

Return all the processes for your account

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetProcessesResponse, GetProcessesSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.process.getProcesses({
  limit: 539074,
  offset: 671957,
  sort: GetProcessesSort.Desc,
}).then((res: GetProcessesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetProcessesRequest](../../models/operations/getprocessesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetProcessesResponse](../../models/operations/getprocessesresponse.md)>**

