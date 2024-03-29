/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetChildDomains = {
    /**
     * indicates whether a domain is verified or not
     */
    active?: boolean | undefined;
    /**
     * Sender domain
     */
    domain?: string | undefined;
};

/** @internal */
export namespace GetChildDomains$ {
    export type Inbound = {
        active?: boolean | undefined;
        domain?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetChildDomains, z.ZodTypeDef, Inbound> = z
        .object({
            active: z.boolean().optional(),
            domain: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.domain === undefined ? null : { domain: v.domain }),
            };
        });

    export type Outbound = {
        active?: boolean | undefined;
        domain?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChildDomains> = z
        .object({
            active: z.boolean().optional(),
            domain: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.domain === undefined ? null : { domain: v.domain }),
            };
        });
}
