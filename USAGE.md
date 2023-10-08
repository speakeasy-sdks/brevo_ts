<!-- Start SDK Example Usage -->


```typescript
import { Brevo } from "BREVO";

(async() => {
  const sdk = new Brevo({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.account.getAccount();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->