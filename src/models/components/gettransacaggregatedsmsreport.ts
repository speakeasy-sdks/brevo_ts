/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetTransacAggregatedSmsReport = {
    /**
     * Number of accepted for the timeframe
     */
    accepted?: number | undefined;
    /**
     * Number of blocked contact for the timeframe
     */
    blocked?: number | undefined;
    /**
     * Number of delivered SMS for the timeframe
     */
    delivered?: number | undefined;
    /**
     * Number of hardbounces for the timeframe
     */
    hardBounces?: number | undefined;
    /**
     * Time frame of the report
     */
    range?: string | undefined;
    /**
     * Number of rejected for the timeframe
     */
    rejected?: number | undefined;
    /**
     * Number of answered SMS for the timeframe
     */
    replied?: number | undefined;
    /**
     * Number of requests for the timeframe
     */
    requests?: number | undefined;
    /**
     * Number of softbounces for the timeframe
     */
    softBounces?: number | undefined;
    /**
     * Number of unsubscription for the timeframe
     */
    unsubscribed?: number | undefined;
};

/** @internal */
export namespace GetTransacAggregatedSmsReport$ {
    export type Inbound = {
        accepted?: number | undefined;
        blocked?: number | undefined;
        delivered?: number | undefined;
        hardBounces?: number | undefined;
        range?: string | undefined;
        rejected?: number | undefined;
        replied?: number | undefined;
        requests?: number | undefined;
        softBounces?: number | undefined;
        unsubscribed?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetTransacAggregatedSmsReport, z.ZodTypeDef, Inbound> = z
        .object({
            accepted: z.number().int().optional(),
            blocked: z.number().int().optional(),
            delivered: z.number().int().optional(),
            hardBounces: z.number().int().optional(),
            range: z.string().optional(),
            rejected: z.number().int().optional(),
            replied: z.number().int().optional(),
            requests: z.number().int().optional(),
            softBounces: z.number().int().optional(),
            unsubscribed: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.accepted === undefined ? null : { accepted: v.accepted }),
                ...(v.blocked === undefined ? null : { blocked: v.blocked }),
                ...(v.delivered === undefined ? null : { delivered: v.delivered }),
                ...(v.hardBounces === undefined ? null : { hardBounces: v.hardBounces }),
                ...(v.range === undefined ? null : { range: v.range }),
                ...(v.rejected === undefined ? null : { rejected: v.rejected }),
                ...(v.replied === undefined ? null : { replied: v.replied }),
                ...(v.requests === undefined ? null : { requests: v.requests }),
                ...(v.softBounces === undefined ? null : { softBounces: v.softBounces }),
                ...(v.unsubscribed === undefined ? null : { unsubscribed: v.unsubscribed }),
            };
        });

    export type Outbound = {
        accepted?: number | undefined;
        blocked?: number | undefined;
        delivered?: number | undefined;
        hardBounces?: number | undefined;
        range?: string | undefined;
        rejected?: number | undefined;
        replied?: number | undefined;
        requests?: number | undefined;
        softBounces?: number | undefined;
        unsubscribed?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransacAggregatedSmsReport> =
        z
            .object({
                accepted: z.number().int().optional(),
                blocked: z.number().int().optional(),
                delivered: z.number().int().optional(),
                hardBounces: z.number().int().optional(),
                range: z.string().optional(),
                rejected: z.number().int().optional(),
                replied: z.number().int().optional(),
                requests: z.number().int().optional(),
                softBounces: z.number().int().optional(),
                unsubscribed: z.number().int().optional(),
            })
            .transform((v) => {
                return {
                    ...(v.accepted === undefined ? null : { accepted: v.accepted }),
                    ...(v.blocked === undefined ? null : { blocked: v.blocked }),
                    ...(v.delivered === undefined ? null : { delivered: v.delivered }),
                    ...(v.hardBounces === undefined ? null : { hardBounces: v.hardBounces }),
                    ...(v.range === undefined ? null : { range: v.range }),
                    ...(v.rejected === undefined ? null : { rejected: v.rejected }),
                    ...(v.replied === undefined ? null : { replied: v.replied }),
                    ...(v.requests === undefined ? null : { requests: v.requests }),
                    ...(v.softBounces === undefined ? null : { softBounces: v.softBounces }),
                    ...(v.unsubscribed === undefined ? null : { unsubscribed: v.unsubscribed }),
                };
            });
}
