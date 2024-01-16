<!-- Start SDK Example Usage [usage] -->
```typescript
import { Brevo } from "BREVO";

async function run() {
    const sdk = new Brevo({
        apiKey: "<YOUR_API_KEY_HERE>",
    });

    const result = await sdk.account.getAccount();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->