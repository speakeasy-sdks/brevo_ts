# User

### Available Operations

* [getInvitedUsersList](#getinviteduserslist) - Get the list of all your users
* [getUserPermission](#getuserpermission) - Check user permission

## getInvitedUsersList

Get the list of all your users

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetInvitedUsersListResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.user.getInvitedUsersList().then((res: GetInvitedUsersListResponse) => {
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

**Promise<[operations.GetInvitedUsersListResponse](../../models/operations/getinviteduserslistresponse.md)>**


## getUserPermission

Check user permission

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetUserPermissionResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.user.getUserPermission({
  email: "Alessia_Abbott@hotmail.com",
}).then((res: GetUserPermissionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetUserPermissionRequest](../../models/operations/getuserpermissionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetUserPermissionResponse](../../models/operations/getuserpermissionresponse.md)>**

