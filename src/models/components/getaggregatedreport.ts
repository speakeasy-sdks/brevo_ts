/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetAggregatedReport = {
    /**
     * Number of blocked contact emails for the timeframe
     */
    blocked?: number | undefined;
    /**
     * Number of clicks for the timeframe
     */
    clicks?: number | undefined;
    /**
     * Number of delivered emails for the timeframe
     */
    delivered?: number | undefined;
    /**
     * Number of hardbounces for the timeframe
     */
    hardBounces?: number | undefined;
    /**
     * Number of invalid emails for the timeframe
     */
    invalid?: number | undefined;
    /**
     * Number of openings for the timeframe
     */
    opens?: number | undefined;
    /**
     * Time frame of the report
     */
    range?: string | undefined;
    /**
     * Number of requests for the timeframe
     */
    requests?: number | undefined;
    /**
     * Number of softbounces for the timeframe
     */
    softBounces?: number | undefined;
    /**
     * Number of complaint (spam report) for the timeframe
     */
    spamReports?: number | undefined;
    /**
     * Number of unique clicks for the timeframe
     */
    uniqueClicks?: number | undefined;
    /**
     * Number of unique openings for the timeframe
     */
    uniqueOpens?: number | undefined;
    /**
     * Number of unsubscribed emails for the timeframe
     */
    unsubscribed?: number | undefined;
};

/** @internal */
export namespace GetAggregatedReport$ {
    export type Inbound = {
        blocked?: number | undefined;
        clicks?: number | undefined;
        delivered?: number | undefined;
        hardBounces?: number | undefined;
        invalid?: number | undefined;
        opens?: number | undefined;
        range?: string | undefined;
        requests?: number | undefined;
        softBounces?: number | undefined;
        spamReports?: number | undefined;
        uniqueClicks?: number | undefined;
        uniqueOpens?: number | undefined;
        unsubscribed?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetAggregatedReport, z.ZodTypeDef, Inbound> = z
        .object({
            blocked: z.number().int().optional(),
            clicks: z.number().int().optional(),
            delivered: z.number().int().optional(),
            hardBounces: z.number().int().optional(),
            invalid: z.number().int().optional(),
            opens: z.number().int().optional(),
            range: z.string().optional(),
            requests: z.number().int().optional(),
            softBounces: z.number().int().optional(),
            spamReports: z.number().int().optional(),
            uniqueClicks: z.number().int().optional(),
            uniqueOpens: z.number().int().optional(),
            unsubscribed: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.blocked === undefined ? null : { blocked: v.blocked }),
                ...(v.clicks === undefined ? null : { clicks: v.clicks }),
                ...(v.delivered === undefined ? null : { delivered: v.delivered }),
                ...(v.hardBounces === undefined ? null : { hardBounces: v.hardBounces }),
                ...(v.invalid === undefined ? null : { invalid: v.invalid }),
                ...(v.opens === undefined ? null : { opens: v.opens }),
                ...(v.range === undefined ? null : { range: v.range }),
                ...(v.requests === undefined ? null : { requests: v.requests }),
                ...(v.softBounces === undefined ? null : { softBounces: v.softBounces }),
                ...(v.spamReports === undefined ? null : { spamReports: v.spamReports }),
                ...(v.uniqueClicks === undefined ? null : { uniqueClicks: v.uniqueClicks }),
                ...(v.uniqueOpens === undefined ? null : { uniqueOpens: v.uniqueOpens }),
                ...(v.unsubscribed === undefined ? null : { unsubscribed: v.unsubscribed }),
            };
        });

    export type Outbound = {
        blocked?: number | undefined;
        clicks?: number | undefined;
        delivered?: number | undefined;
        hardBounces?: number | undefined;
        invalid?: number | undefined;
        opens?: number | undefined;
        range?: string | undefined;
        requests?: number | undefined;
        softBounces?: number | undefined;
        spamReports?: number | undefined;
        uniqueClicks?: number | undefined;
        uniqueOpens?: number | undefined;
        unsubscribed?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAggregatedReport> = z
        .object({
            blocked: z.number().int().optional(),
            clicks: z.number().int().optional(),
            delivered: z.number().int().optional(),
            hardBounces: z.number().int().optional(),
            invalid: z.number().int().optional(),
            opens: z.number().int().optional(),
            range: z.string().optional(),
            requests: z.number().int().optional(),
            softBounces: z.number().int().optional(),
            spamReports: z.number().int().optional(),
            uniqueClicks: z.number().int().optional(),
            uniqueOpens: z.number().int().optional(),
            unsubscribed: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.blocked === undefined ? null : { blocked: v.blocked }),
                ...(v.clicks === undefined ? null : { clicks: v.clicks }),
                ...(v.delivered === undefined ? null : { delivered: v.delivered }),
                ...(v.hardBounces === undefined ? null : { hardBounces: v.hardBounces }),
                ...(v.invalid === undefined ? null : { invalid: v.invalid }),
                ...(v.opens === undefined ? null : { opens: v.opens }),
                ...(v.range === undefined ? null : { range: v.range }),
                ...(v.requests === undefined ? null : { requests: v.requests }),
                ...(v.softBounces === undefined ? null : { softBounces: v.softBounces }),
                ...(v.spamReports === undefined ? null : { spamReports: v.spamReports }),
                ...(v.uniqueClicks === undefined ? null : { uniqueClicks: v.uniqueClicks }),
                ...(v.uniqueOpens === undefined ? null : { uniqueOpens: v.uniqueOpens }),
                ...(v.unsubscribed === undefined ? null : { unsubscribed: v.unsubscribed }),
            };
        });
}
