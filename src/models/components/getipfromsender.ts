/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetIpFromSender = {
    /**
     * Domain associated to the IP
     */
    domain: string;
    /**
     * ID of the dedicated IP
     */
    id: number;
    /**
     * Dedicated IP
     */
    ip: string;
    /**
     * Weight of the IP
     */
    weight: number;
};

/** @internal */
export namespace GetIpFromSender$ {
    export type Inbound = {
        domain: string;
        id: number;
        ip: string;
        weight: number;
    };

    export const inboundSchema: z.ZodType<GetIpFromSender, z.ZodTypeDef, Inbound> = z
        .object({
            domain: z.string(),
            id: z.number().int(),
            ip: z.string(),
            weight: z.number().int(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
                id: v.id,
                ip: v.ip,
                weight: v.weight,
            };
        });

    export type Outbound = {
        domain: string;
        id: number;
        ip: string;
        weight: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetIpFromSender> = z
        .object({
            domain: z.string(),
            id: z.number().int(),
            ip: z.string(),
            weight: z.number().int(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
                id: v.id,
                ip: v.ip,
                weight: v.weight,
            };
        });
}
