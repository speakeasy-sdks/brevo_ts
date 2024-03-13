/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetFolder = {
    /**
     * ID of the folder
     */
    id: number;
    /**
     * Name of the folder
     */
    name: string;
    /**
     * Number of blacklisted contacts in the folder
     */
    totalBlacklisted: number;
    /**
     * Number of contacts in the folder
     */
    totalSubscribers: number;
    /**
     * Number of unique contacts in the folder
     */
    uniqueSubscribers: number;
};

/** @internal */
export namespace GetFolder$ {
    export type Inbound = {
        id: number;
        name: string;
        totalBlacklisted: number;
        totalSubscribers: number;
        uniqueSubscribers: number;
    };

    export const inboundSchema: z.ZodType<GetFolder, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.number().int(),
            name: z.string(),
            totalBlacklisted: z.number().int(),
            totalSubscribers: z.number().int(),
            uniqueSubscribers: z.number().int(),
        })
        .transform((v) => {
            return {
                id: v.id,
                name: v.name,
                totalBlacklisted: v.totalBlacklisted,
                totalSubscribers: v.totalSubscribers,
                uniqueSubscribers: v.uniqueSubscribers,
            };
        });

    export type Outbound = {
        id: number;
        name: string;
        totalBlacklisted: number;
        totalSubscribers: number;
        uniqueSubscribers: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetFolder> = z
        .object({
            id: z.number().int(),
            name: z.string(),
            totalBlacklisted: z.number().int(),
            totalSubscribers: z.number().int(),
            uniqueSubscribers: z.number().int(),
        })
        .transform((v) => {
            return {
                id: v.id,
                name: v.name,
                totalBlacklisted: v.totalBlacklisted,
                totalSubscribers: v.totalSubscribers,
                uniqueSubscribers: v.uniqueSubscribers,
            };
        });
}
