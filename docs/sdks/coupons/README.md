# Coupons
(*.coupons*)

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

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.coupons.createCouponCollection({
    defaultCoupon: "10 OFF",
    name: "SummerPromotions",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.CreateCouponCollectionRequestBody](../../models/operations/createcouponcollectionrequestbody.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateCouponCollectionResponse](../../models/operations/createcouponcollectionresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,401           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## createCoupons

Create coupons for a coupon collection

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.coupons.createCoupons({
    collectionId: "23befbae-1505-47a8-bd27-e30ef739f32c",
    coupons: [
      "U",
      "f",
      "1",
      "2",
      "A",
      "F",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateCouponsRequestBody](../../models/operations/createcouponsrequestbody.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateCouponsResponse](../../models/operations/createcouponsresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,401,404       | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getCouponCollection

Get a coupon collection by id

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.coupons.getCouponCollection({
    id: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetCouponCollectionRequest](../../models/operations/getcouponcollectionrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetCouponCollectionResponse](../../models/operations/getcouponcollectionresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,401,404       | application/json  |
| errors.SDKError   | 400-600           | */*               |

## getCouponCollections

Get all your coupon collections

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCouponCollectionsQueryParamSort } from "BREVO/dist/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.coupons.getCouponCollections({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetCouponCollectionsRequest](../../models/operations/getcouponcollectionsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetCouponCollectionsResponse](../../models/operations/getcouponcollectionsresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,401           | application/json  |
| errors.SDKError   | 400-600           | */*               |

## updateCouponCollection

Update a coupon collection by id

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.coupons.updateCouponCollection({
    requestBody: {
      defaultCoupon: "10 OFF",
    },
    id: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateCouponCollectionRequest](../../models/operations/updatecouponcollectionrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateCouponCollectionResponse](../../models/operations/updatecouponcollectionresponse.md)>**
### Errors

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorModel | 400,401           | application/json  |
| errors.SDKError   | 400-600           | */*               |
