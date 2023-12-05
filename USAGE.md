<!-- Start SDK Example Usage [usage] -->
```typescript
import { Brevo } from "BREVO";

async function run() {
    const sdk = new Brevo({
        apiKey: "",
    });

    const res = await sdk.account.getAccount();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->