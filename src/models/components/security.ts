/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Security = {
    apiKey: string;
};

/** @internal */
export namespace Security$ {
    export type Inbound = {
        "api-key": string;
    };

    export const inboundSchema: z.ZodType<Security, z.ZodTypeDef, Inbound> = z
        .object({
            "api-key": z.string(),
        })
        .transform((v) => {
            return {
                apiKey: v["api-key"],
            };
        });

    export type Outbound = {
        "api-key": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Security> = z
        .object({
            apiKey: z.string(),
        })
        .transform((v) => {
            return {
                "api-key": v.apiKey,
            };
        });
}
