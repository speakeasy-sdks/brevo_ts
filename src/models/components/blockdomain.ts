/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type BlockDomain = {
    /**
     * name of the domain to be blocked
     */
    domain: string;
};

/** @internal */
export namespace BlockDomain$ {
    export type Inbound = {
        domain: string;
    };

    export const inboundSchema: z.ZodType<BlockDomain, z.ZodTypeDef, Inbound> = z
        .object({
            domain: z.string(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
            };
        });

    export type Outbound = {
        domain: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BlockDomain> = z
        .object({
            domain: z.string(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
            };
        });
}
