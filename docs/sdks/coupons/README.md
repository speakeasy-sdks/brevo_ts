# coupons

### Available Operations

* [createCouponCollection](#createcouponcollection) - Create а coupon collection
* [createCoupons](#createcoupons) - Create coupons for a coupon collection
* [getCouponCollection](#getcouponcollection) - Get a coupon collection by id
* [getCouponCollections](#getcouponcollections) - Get all your coupon collections
* [updateCouponCollection](#updatecouponcollection) - Update a coupon collection by id

## createCouponCollection

Create а coupon collection

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { CreateCouponCollectionResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.coupons.createCouponCollection({
  defaultCoupon: "10 OFF",
  name: "SummerPromotions",
}).then((res: CreateCouponCollectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.CreateCouponCollectionRequestBody](../../models/operations/createcouponcollectionrequestbody.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateCouponCollectionResponse](../../models/operations/createcouponcollectionresponse.md)>**


## createCoupons

Create coupons for a coupon collection

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { CreateCouponsResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.coupons.createCoupons({
  collectionId: "23befbae-1505-47a8-bd27-e30ef739f32c",
  coupons: [
    "Uf12AF",
  ],
}).then((res: CreateCouponsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateCouponsRequestBody](../../models/operations/createcouponsrequestbody.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateCouponsResponse](../../models/operations/createcouponsresponse.md)>**


## getCouponCollection

Get a coupon collection by id

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCouponCollectionResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.coupons.getCouponCollection({
  id: "eius",
}).then((res: GetCouponCollectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetCouponCollectionRequest](../../models/operations/getcouponcollectionrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetCouponCollectionResponse](../../models/operations/getcouponcollectionresponse.md)>**


## getCouponCollections

Get all your coupon collections

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCouponCollectionsResponse, GetCouponCollectionsSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.coupons.getCouponCollections({
  limit: 137220,
  offset: 20651,
  sort: GetCouponCollectionsSort.Asc,
}).then((res: GetCouponCollectionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetCouponCollectionsRequest](../../models/operations/getcouponcollectionsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetCouponCollectionsResponse](../../models/operations/getcouponcollectionsresponse.md)>**


## updateCouponCollection

Update a coupon collection by id

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { UpdateCouponCollectionResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.coupons.updateCouponCollection({
  requestBody: {
    defaultCoupon: "10 OFF",
  },
  id: "optio",
}).then((res: UpdateCouponCollectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateCouponCollectionRequest](../../models/operations/updatecouponcollectionrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateCouponCollectionResponse](../../models/operations/updatecouponcollectionresponse.md)>**

