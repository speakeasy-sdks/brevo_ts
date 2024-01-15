<!-- Start SDK Example Usage [usage] -->
```typescript
import { Brevo } from "BREVO";

async function run() {
    const sdk = new Brevo({
        apiKey: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.account.getAccount();

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->