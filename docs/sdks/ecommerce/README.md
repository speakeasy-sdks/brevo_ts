# Ecommerce
(*ecommerce*)

### Available Operations

* [createBatchOrder](#createbatchorder) - Create orders in batch
* [createOrder](#createorder) - Managing the status of the order
* [createUpdateBatchCategory](#createupdatebatchcategory) - Create categories in batch
* [createUpdateBatchProducts](#createupdatebatchproducts) - Create products in batch
* [createUpdateCategory](#createupdatecategory) - Create/Update a category
* [createUpdateProduct](#createupdateproduct) - Create/Update a product
* [getCategories](#getcategories) - Return all your categories
* [getCategoryInfo](#getcategoryinfo) - Get a category details
* [getProductInfo](#getproductinfo) - Get a product's details
* [getProducts](#getproducts) - Return all your products
* [postEcommerceActivate](#postecommerceactivate) - Activate the eCommerce app

## createBatchOrder

Create multiple orders at one time instead of one order at a time

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.ecommerce.createBatchOrder({
    notifyUrl: "https://en.wikipedia.org/wiki/Webhook",
    orders: [
      {
        amount: 308.42,
        billing: {
          address: "15 Somewhere Road, Brynmenyn",
          city: "Basel",
          countryCode: "CA",
          paymentMethod: "PayPal",
          phone: "01559 032133",
          postCode: "4052",
          region: "Northwestern Switzerland",
        },
        coupons: [
          "EASTER15OFF",
        ],
        createdAt: "2021-07-29T20:59:23.383Z",
        email: "example@brevo.com",
        id: "14",
        products: [
          {
            price: 99.99,
            productId: "P1",
            quantity: 10,
            variantId: "P100",
          },
        ],
        status: "completed",
        updatedAt: "2021-07-30T10:59:23.383Z",
      },
    ],
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.OrderBatch](../../models/shared/orderbatch.md)       | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateBatchOrderResponse](../../models/operations/createbatchorderresponse.md)>**


## createOrder

Manages the transactional status of the order

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.ecommerce.createOrder({
    amount: 308.42,
    billing: {
      address: "15 Somewhere Road, Brynmenyn",
      city: "Basel",
      countryCode: "CA",
      paymentMethod: "PayPal",
      phone: "01559 032133",
      postCode: "4052",
      region: "Northwestern Switzerland",
    },
    coupons: [
      "EASTER15OFF",
    ],
    createdAt: "2021-07-29T20:59:23.383Z",
    email: "example@brevo.com",
    id: "14",
    products: [
      {
        price: 99.99,
        productId: "P1",
        quantity: 10,
        variantId: "P100",
      },
    ],
    status: "completed",
    updatedAt: "2021-07-30T10:59:23.383Z",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Order](../../models/shared/order.md)                 | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateOrderResponse](../../models/operations/createorderresponse.md)>**


## createUpdateBatchCategory

Create categories in batch

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.ecommerce.createUpdateBatchCategory({
    categories: [
      {
        deletedAt: "2017-05-12T12:30:00Z",
        id: "CAT123",
        name: "Electronics",
        url: "http://mydomain.com/category/electronics",
      },
    ],
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.CreateUpdateBatchCategory](../../models/shared/createupdatebatchcategory.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateUpdateBatchCategoryResponse](../../models/operations/createupdatebatchcategoryresponse.md)>**


## createUpdateBatchProducts

Create products in batch

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.ecommerce.createUpdateBatchProducts({
    products: [
      {
        categories: [
          "string",
        ],
        id: "P11",
        imageUrl: "http://mydomain.com/product-absoulte-url/img.jpeg",
        metaInfo: {
          "brand": "string",
          "description": "string",
        },
        name: "Iphone 11",
        url: "http://mydomain.com/product/electronics/product1",
      },
    ],
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.CreateUpdateBatchProducts](../../models/shared/createupdatebatchproducts.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateUpdateBatchProductsResponse](../../models/operations/createupdatebatchproductsresponse.md)>**


## createUpdateCategory

Create/Update a category

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.ecommerce.createUpdateCategory({
    deletedAt: "2017-05-12T12:30:00Z",
    id: "CAT123",
    name: "Electronics",
    updateEnabled: false,
    url: "http://mydomain.com/category/electronics",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.CreateUpdateCategory](../../models/shared/createupdatecategory.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateUpdateCategoryResponse](../../models/operations/createupdatecategoryresponse.md)>**


## createUpdateProduct

Create/Update a product

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.ecommerce.createUpdateProduct({
    categories: [
      "string",
    ],
    id: "P11",
    imageUrl: "http://mydomain.com/product-absoulte-url/img.jpeg",
    metaInfo: {
      "description": "string",
      "brand": "string",
    },
    name: "Iphone 11",
    updateEnabled: false,
    url: "http://mydomain.com/product/electronics/product1",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.CreateUpdateProduct](../../models/shared/createupdateproduct.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreateUpdateProductResponse](../../models/operations/createupdateproductresponse.md)>**


## getCategories

Return all your categories

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetCategoriesSort } from "BREVO/dist/sdk/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.ecommerce.getCategories({
    ids: [
      "string",
    ],
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetCategoriesRequest](../../models/operations/getcategoriesrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetCategoriesResponse](../../models/operations/getcategoriesresponse.md)>**


## getCategoryInfo

Get a category details

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.ecommerce.getCategoryInfo({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetCategoryInfoRequest](../../models/operations/getcategoryinforequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetCategoryInfoResponse](../../models/operations/getcategoryinforesponse.md)>**


## getProductInfo

Get a product's details

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.ecommerce.getProductInfo({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetProductInfoRequest](../../models/operations/getproductinforequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetProductInfoResponse](../../models/operations/getproductinforesponse.md)>**


## getProducts

Return all your products

### Example Usage

```typescript
import { Brevo } from "BREVO";
import { GetProductsSort } from "BREVO/dist/sdk/models/operations";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.ecommerce.getProducts({
    categories: [
      "string",
    ],
    ids: [
      "string",
    ],
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetProductsRequest](../../models/operations/getproductsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetProductsResponse](../../models/operations/getproductsresponse.md)>**


## postEcommerceActivate

Getting access to Brevo eCommerce.

### Example Usage

```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    apiKey: "",
  });

  const res = await sdk.ecommerce.postEcommerceActivate();


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

**Promise<[operations.PostEcommerceActivateResponse](../../models/operations/postecommerceactivateresponse.md)>**

