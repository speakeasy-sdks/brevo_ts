/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RemoveContactFromListByEmails = {
    /**
     * **Required if 'all' is false and 'ids' is empty.** Emails to remove from a list. You can pass a **maximum of 150 emails** for removal in one request.
     *
     * @remarks
     *
     */
    emails?: Array<string> | undefined;
};

/** @internal */
export namespace RemoveContactFromListByEmails$ {
    export type Inbound = {
        emails?: Array<string> | undefined;
    };

    export const inboundSchema: z.ZodType<RemoveContactFromListByEmails, z.ZodTypeDef, Inbound> = z
        .object({
            emails: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.emails === undefined ? null : { emails: v.emails }),
            };
        });

    export type Outbound = {
        emails?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveContactFromListByEmails> =
        z
            .object({
                emails: z.array(z.string()).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.emails === undefined ? null : { emails: v.emails }),
                };
            });
}
