/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ManageIp = {
    /**
     * Dedicated ID
     */
    ip?: string | undefined;
};

/** @internal */
export namespace ManageIp$ {
    export type Inbound = {
        ip?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ManageIp, z.ZodTypeDef, Inbound> = z
        .object({
            ip: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.ip === undefined ? null : { ip: v.ip }),
            };
        });

    export type Outbound = {
        ip?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ManageIp> = z
        .object({
            ip: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.ip === undefined ? null : { ip: v.ip }),
            };
        });
}
