/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RemoveCredits = {
    /**
     * **Required if sms credits are empty.** Email credits to be removed from the child account
     *
     * @remarks
     *
     */
    email?: number | undefined;
    /**
     * **Required if email credits are empty.** SMS credits to be removed from the child account
     *
     * @remarks
     *
     */
    sms?: number | undefined;
};

/** @internal */
export namespace RemoveCredits$ {
    export type Inbound = {
        email?: number | undefined;
        sms?: number | undefined;
    };

    export const inboundSchema: z.ZodType<RemoveCredits, z.ZodTypeDef, Inbound> = z
        .object({
            email: z.number().int().optional(),
            sms: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.sms === undefined ? null : { sms: v.sms }),
            };
        });

    export type Outbound = {
        email?: number | undefined;
        sms?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveCredits> = z
        .object({
            email: z.number().int().optional(),
            sms: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.sms === undefined ? null : { sms: v.sms }),
            };
        });
}
