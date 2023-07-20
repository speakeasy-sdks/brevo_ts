<!-- Start SDK Example Usage -->


```typescript
import { Brevo } from "BREVO";
import { GetAccountResponse } from "BREVO/dist/sdk/models/operations";

const sdk = new Brevo({
  security: {
    apiKey: "",
  },
});

sdk.account.getAccount().then((res: GetAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->