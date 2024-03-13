/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AbTestVersionClicks = {
    /**
     * Percentage of clicks of link with respect to total clicks
     */
    clickRate: string;
    /**
     * Number of times a link is clicked
     */
    clicksCount: number;
    /**
     * URL of the link
     */
    link: string;
};

/** @internal */
export namespace AbTestVersionClicks$ {
    export type Inbound = {
        clickRate: string;
        clicksCount: number;
        link: string;
    };

    export const inboundSchema: z.ZodType<AbTestVersionClicks, z.ZodTypeDef, Inbound> = z
        .object({
            clickRate: z.string(),
            clicksCount: z.number().int(),
            link: z.string(),
        })
        .transform((v) => {
            return {
                clickRate: v.clickRate,
                clicksCount: v.clicksCount,
                link: v.link,
            };
        });

    export type Outbound = {
        clickRate: string;
        clicksCount: number;
        link: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AbTestVersionClicks> = z
        .object({
            clickRate: z.string(),
            clicksCount: z.number().int(),
            link: z.string(),
        })
        .transform((v) => {
            return {
                clickRate: v.clickRate,
                clicksCount: v.clicksCount,
                link: v.link,
            };
        });
}
