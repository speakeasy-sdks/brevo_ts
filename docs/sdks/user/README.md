# User
(*user*)

### Available Operations

* [getInvitedUsersList](#getinviteduserslist) - Get the list of all your users
* [getUserPermission](#getuserpermission) - Check user permission

## getInvitedUsersList

Get the list of all your users

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.user.getInvitedUsersList();

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

**Promise<[operations.GetInvitedUsersListResponse](../../models/operations/getinviteduserslistresponse.md)>**


## getUserPermission

Check user permission

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.user.getUserPermission({
    email: "Brycen.Kirlin81@hotmail.com",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetUserPermissionRequest](../../models/operations/getuserpermissionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetUserPermissionResponse](../../models/operations/getuserpermissionresponse.md)>**

