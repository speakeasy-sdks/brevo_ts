/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Percentage of a particular event for both versions
 */
export type AbTestVersionStats = {
    /**
     * percentage of an event for version A
     */
    versionA: string;
    /**
     * percentage of an event for version B
     */
    versionB: string;
};

/** @internal */
export namespace AbTestVersionStats$ {
    export type Inbound = {
        "Version A": string;
        "Version B": string;
    };

    export const inboundSchema: z.ZodType<AbTestVersionStats, z.ZodTypeDef, Inbound> = z
        .object({
            "Version A": z.string(),
            "Version B": z.string(),
        })
        .transform((v) => {
            return {
                versionA: v["Version A"],
                versionB: v["Version B"],
            };
        });

    export type Outbound = {
        "Version A": string;
        "Version B": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AbTestVersionStats> = z
        .object({
            versionA: z.string(),
            versionB: z.string(),
        })
        .transform((v) => {
            return {
                "Version A": v.versionA,
                "Version B": v.versionB,
            };
        });
}
