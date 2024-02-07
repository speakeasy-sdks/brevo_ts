/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type SendTestEmail = {
    /**
     * List of the email addresses of the recipients whom you wish to send the test mail.
     *
     * @remarks
     * _If left empty, the test mail will be sent to your entire test list. You can not send more than 50 test emails per day_.
     *
     */
    emailTo?: Array<string> | undefined;
};

/** @internal */
export namespace SendTestEmail$ {
    export type Inbound = {
        emailTo?: Array<string> | undefined;
    };

    export const inboundSchema: z.ZodType<SendTestEmail, z.ZodTypeDef, Inbound> = z
        .object({
            emailTo: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.emailTo === undefined ? null : { emailTo: v.emailTo }),
            };
        });

    export type Outbound = {
        emailTo?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SendTestEmail> = z
        .object({
            emailTo: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.emailTo === undefined ? null : { emailTo: v.emailTo }),
            };
        });
}
