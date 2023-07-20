# ecommerce

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
        "aspernatur",
        "sequi",
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
        {
          price: 99.99,
          productId: "P1",
          quantity: 10,
          variantId: "P100",
        },
        {
          price: 99.99,
          productId: "P1",
          quantity: 10,
          variantId: "P100",
        },
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
        "recusandae",
        "aperiam",
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
        {
          price: 99.99,
          productId: "P1",
          quantity: 10,
          variantId: "P100",
        },
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
        "dignissimos",
        "inventore",
        "nihil",
        "totam",
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
        {
          price: 99.99,
          productId: "P1",
          quantity: 10,
          variantId: "P100",
        },
        {
          price: 99.99,
          productId: "P1",
          quantity: 10,
          variantId: "P100",
        },
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
        "odio",
        "occaecati",
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
    "dolores",
    "deserunt",
    "molestiae",
    "accusantium",
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
    {
      price: 99.99,
      productId: "P1",
      quantity: 10,
      variantId: "P100",
    },
    {
      price: 99.99,
      productId: "P1",
      quantity: 10,
      variantId: "P100",
    },
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
        "consequuntur",
        "deleniti",
        "fugit",
      ],
      deletedAt: "fuga",
      id: "P11",
      imageUrl: "http://mydomain.com/product-absoulte-url/img.jpeg",
      metaInfo: {
        "incidunt": "atque",
        "explicabo": "minima",
        "nisi": "fugit",
      },
      name: "Iphone 11",
      parentId: "sapiente",
      price: 1598.7,
      sku: "ratione",
      url: "http://mydomain.com/product/electronics/product1",
    },
    {
      categories: [
        "saepe",
      ],
      deletedAt: "occaecati",
      id: "P11",
      imageUrl: "http://mydomain.com/product-absoulte-url/img.jpeg",
      metaInfo: {
        "et": "esse",
        "eveniet": "accusamus",
        "veritatis": "esse",
      },
      name: "Iphone 11",
      parentId: "quod",
      price: 7241.68,
      sku: "vero",
      url: "http://mydomain.com/product/electronics/product1",
    },
    {
      categories: [
        "quasi",
        "saepe",
      ],
      deletedAt: "vel",
      id: "P11",
      imageUrl: "http://mydomain.com/product-absoulte-url/img.jpeg",
      metaInfo: {
        "molestiae": "rerum",
        "occaecati": "minima",
        "distinctio": "eligendi",
      },
      name: "Iphone 11",
      parentId: "sit",
      price: 6360.61,
      sku: "tempore",
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
    "cumque",
  ],
  deletedAt: "consequuntur",
  id: "P11",
  imageUrl: "http://mydomain.com/product-absoulte-url/img.jpeg",
  metaInfo: {
    "minus": "quaerat",
  },
  name: "Iphone 11",
  parentId: "sapiente",
  price: 2328.65,
  sku: "esse",
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
    "provident",
    "a",
    "nulla",
  ],
  limit: 557811,
  name: "Joyce Wilderman",
  offset: 863023,
  sort: GetCategoriesSort.Desc,
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
  id: "2efd121a-a6f1-4e67-8bdb-04f15756082d",
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
  id: "68ea19f1-d170-4513-b9d0-8086a1840394",
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
    "explicabo",
    "voluptas",
    "aut",
    "dignissimos",
  ],
  ids: [
    "maiores",
  ],
  limit: 618480,
  name: "Camille Hirthe III",
  offset: 310067,
  priceEq: 1629.54,
  priceGt: 8315.2,
  priceGte: 6387.62,
  priceLt: 8070.23,
  priceLte: 4903.05,
  priceNe: 6400.24,
  sort: GetProductsSort.Desc,
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

