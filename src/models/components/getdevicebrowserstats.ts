/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type GetDeviceBrowserStats = {
    /**
     * Number of total clicks for the campaign using the particular browser
     */
    clickers: number;
    /**
     * Number of unique clicks for the campaign using the particular browser
     */
    uniqueClicks: number;
    /**
     * Number of unique openings for the campaign using the particular browser
     */
    uniqueViews: number;
    /**
     * Number of openings for the campaign using the particular browser
     */
    viewed: number;
};

/** @internal */
export namespace GetDeviceBrowserStats$ {
    export type Inbound = {
        clickers: number;
        uniqueClicks: number;
        uniqueViews: number;
        viewed: number;
    };

    export const inboundSchema: z.ZodType<GetDeviceBrowserStats, z.ZodTypeDef, Inbound> = z
        .object({
            clickers: z.number().int(),
            uniqueClicks: z.number().int(),
            uniqueViews: z.number().int(),
            viewed: z.number().int(),
        })
        .transform((v) => {
            return {
                clickers: v.clickers,
                uniqueClicks: v.uniqueClicks,
                uniqueViews: v.uniqueViews,
                viewed: v.viewed,
            };
        });

    export type Outbound = {
        clickers: number;
        uniqueClicks: number;
        uniqueViews: number;
        viewed: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDeviceBrowserStats> = z
        .object({
            clickers: z.number().int(),
            uniqueClicks: z.number().int(),
            uniqueViews: z.number().int(),
            viewed: z.number().int(),
        })
        .transform((v) => {
            return {
                clickers: v.clickers,
                uniqueClicks: v.uniqueClicks,
                uniqueViews: v.uniqueViews,
                viewed: v.viewed,
            };
        });
}
