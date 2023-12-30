/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Lists = {
    /**
     * ID of the list
     */
    id: number;
    /**
     * Name of the list
     */
    name: string;
    /**
     * Number of blacklisted contacts in the list
     */
    totalBlacklisted: number;
    /**
     * Number of contacts in the list
     */
    totalSubscribers: number;
    /**
     * Number of unique contacts in the list
     */
    uniqueSubscribers: number;
};

export type GetFolderLists = {
    /**
     * Number of lists in the folder
     */
    count?: number | undefined;
    lists?: Array<Lists> | undefined;
};

/** @internal */
export namespace Lists$ {
    export type Inbound = {
        id: number;
        name: string;
        totalBlacklisted: number;
        totalSubscribers: number;
        uniqueSubscribers: number;
    };

    export const inboundSchema: z.ZodType<Lists, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Lists> = z
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

/** @internal */
export namespace GetFolderLists$ {
    export type Inbound = {
        count?: number | undefined;
        lists?: Array<Lists$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetFolderLists, z.ZodTypeDef, Inbound> = z
        .object({
            count: z.number().int().optional(),
            lists: z.array(z.lazy(() => Lists$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.lists === undefined ? null : { lists: v.lists }),
            };
        });

    export type Outbound = {
        count?: number | undefined;
        lists?: Array<Lists$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetFolderLists> = z
        .object({
            count: z.number().int().optional(),
            lists: z.array(z.lazy(() => Lists$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.lists === undefined ? null : { lists: v.lists }),
            };
        });
}
