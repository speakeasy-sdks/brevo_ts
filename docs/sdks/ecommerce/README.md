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
import { CreateBatchOrderResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.ecommerce.createBatchOrder({
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
        "nulla",
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
}).then((res: CreateBatchOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CreateOrderResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.ecommerce.createOrder({
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
    "fugit",
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
}).then((res: CreateOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CreateUpdateBatchCategoryResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.ecommerce.createUpdateBatchCategory({
  categories: [
    {
      deletedAt: "2017-05-12T12:30:00Z",
      id: "CAT123",
      name: "Electronics",
      url: "http://mydomain.com/category/electronics",
    },
  ],
  updateEnabled: false,
}).then((res: CreateUpdateBatchCategoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CreateUpdateBatchProductsResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.ecommerce.createUpdateBatchProducts({
  products: [
    {
      categories: [
        "porro",
      ],
      deletedAt: "maiores",
      id: "P11",
      imageUrl: "http://mydomain.com/product-absoulte-url/img.jpeg",
      metaInfo: {
        "doloribus": "iusto",
      },
      name: "Iphone 11",
      parentId: "eligendi",
      price: 4973.91,
      sku: "alias",
      url: "http://mydomain.com/product/electronics/product1",
    },
  ],
  updateEnabled: false,
}).then((res: CreateUpdateBatchProductsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CreateUpdateCategoryResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.ecommerce.createUpdateCategory({
  deletedAt: "2017-05-12T12:30:00Z",
  id: "CAT123",
  name: "Electronics",
  updateEnabled: false,
  url: "http://mydomain.com/category/electronics",
}).then((res: CreateUpdateCategoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CreateUpdateProductResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.ecommerce.createUpdateProduct({
  categories: [
    "officia",
  ],
  deletedAt: "tempora",
  id: "P11",
  imageUrl: "http://mydomain.com/product-absoulte-url/img.jpeg",
  metaInfo: {
    "ipsam": "ea",
  },
  name: "Iphone 11",
  parentId: "aspernatur",
  price: 4282.24,
  sku: "possimus",
  updateEnabled: false,
  url: "http://mydomain.com/product/electronics/product1",
}).then((res: CreateUpdateProductResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { GetCategoriesResponse, GetCategoriesSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.ecommerce.getCategories({
  ids: [
    "magnam",
  ],
  limit: 189848,
  name: "Mabel Cartwright",
  offset: 97844,
  sort: GetCategoriesSort.Asc,
}).then((res: GetCategoriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { GetCategoryInfoResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.ecommerce.getCategoryInfo({
  id: "d9f5fce6-c556-4146-83e2-50fb008c42e1",
}).then((res: GetCategoryInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { GetProductInfoResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.ecommerce.getProductInfo({
  id: "41aac366-c8dd-46b1-8429-07474778a7bd",
}).then((res: GetProductInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { GetProductsResponse, GetProductsSort } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.ecommerce.getProducts({
  categories: [
    "ut",
  ],
  ids: [
    "eum",
  ],
  limit: 379927,
  name: "Alan Lang Jr.",
  offset: 660040,
  priceEq: 6969.97,
  priceGt: 2065.94,
  priceGte: 7786.96,
  priceLt: 8472.76,
  priceLte: 7774.08,
  priceNe: 6813.59,
  sort: GetProductsSort.Asc,
}).then((res: GetProductsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { PostEcommerceActivateResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.ecommerce.postEcommerceActivate().then((res: PostEcommerceActivateResponse) => {
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

**Promise<[operations.PostEcommerceActivateResponse](../../models/operations/postecommerceactivateresponse.md)>**

