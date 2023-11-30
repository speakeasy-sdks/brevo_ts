<!-- Start SDK Example Usage [usage] -->
```typescript
import { Brevo } from "BREVO";

(async () => {
    const sdk = new Brevo({
        apiKey: "",
    });

    const res = await sdk.account.getAccount();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage [usage] -->