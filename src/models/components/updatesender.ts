/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateSenderIps = {
    /**
     * Domain of the IP
     */
    domain: string;
    /**
     * Dedicated IP available in your account
     */
    ip: string;
    /**
     * Weight to apply to the IP. Sum of all IP weights must be 100. Should be passed for either ALL or NONE of the IPs. If it's not passed, the sending will be equally balanced on all IPs.
     */
    weight?: number | undefined;
};

export type UpdateSender = {
    /**
     * From Email to update the sender
     */
    email?: string | undefined;
    /**
     * **Only in case of dedicated IP**. IPs to associate to the sender. If passed, will replace all the existing IPs.
     *
     * @remarks
     *
     */
    ips?: Array<UpdateSenderIps> | undefined;
    /**
     * From Name to update the sender
     */
    name?: string | undefined;
};

/** @internal */
export namespace UpdateSenderIps$ {
    export type Inbound = {
        domain: string;
        ip: string;
        weight?: number | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateSenderIps, z.ZodTypeDef, Inbound> = z
        .object({
            domain: z.string(),
            ip: z.string(),
            weight: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
                ip: v.ip,
                ...(v.weight === undefined ? null : { weight: v.weight }),
            };
        });

    export type Outbound = {
        domain: string;
        ip: string;
        weight?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSenderIps> = z
        .object({
            domain: z.string(),
            ip: z.string(),
            weight: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
                ip: v.ip,
                ...(v.weight === undefined ? null : { weight: v.weight }),
            };
        });
}

/** @internal */
export namespace UpdateSender$ {
    export type Inbound = {
        email?: string | undefined;
        ips?: Array<UpdateSenderIps$.Inbound> | undefined;
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateSender, z.ZodTypeDef, Inbound> = z
        .object({
            email: z.string().optional(),
            ips: z.array(z.lazy(() => UpdateSenderIps$.inboundSchema)).optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.ips === undefined ? null : { ips: v.ips }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        email?: string | undefined;
        ips?: Array<UpdateSenderIps$.Outbound> | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSender> = z
        .object({
            email: z.string().optional(),
            ips: z.array(z.lazy(() => UpdateSenderIps$.outboundSchema)).optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.ips === undefined ? null : { ips: v.ips }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}
