/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { GetCampaignStats, GetCampaignStats$ } from "./getcampaignstats";
import { z } from "zod";

export type CampaignStats = {
    /**
     * ID of the campaign
     */
    campaignId: number;
    stats: GetCampaignStats;
};

export type GetExtendedList = {
    campaignStats?: Array<CampaignStats> | undefined;
    /**
     * Creation UTC date-time of the list (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    createdAt: string;
    /**
     * Status telling if the list is dynamic or not (true=dynamic, false=not dynamic)
     */
    dynamicList?: boolean | undefined;
    /**
     * ID of the folder
     */
    folderId: number;
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

/** @internal */
export namespace CampaignStats$ {
    export type Inbound = {
        campaignId: number;
        stats: GetCampaignStats$.Inbound;
    };

    export const inboundSchema: z.ZodType<CampaignStats, z.ZodTypeDef, Inbound> = z
        .object({
            campaignId: z.number().int(),
            stats: GetCampaignStats$.inboundSchema,
        })
        .transform((v) => {
            return {
                campaignId: v.campaignId,
                stats: v.stats,
            };
        });

    export type Outbound = {
        campaignId: number;
        stats: GetCampaignStats$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CampaignStats> = z
        .object({
            campaignId: z.number().int(),
            stats: GetCampaignStats$.outboundSchema,
        })
        .transform((v) => {
            return {
                campaignId: v.campaignId,
                stats: v.stats,
            };
        });
}

/** @internal */
export namespace GetExtendedList$ {
    export type Inbound = {
        campaignStats?: Array<CampaignStats$.Inbound> | undefined;
        createdAt: string;
        dynamicList?: boolean | undefined;
        folderId: number;
        id: number;
        name: string;
        totalBlacklisted: number;
        totalSubscribers: number;
        uniqueSubscribers: number;
    };

    export const inboundSchema: z.ZodType<GetExtendedList, z.ZodTypeDef, Inbound> = z
        .object({
            campaignStats: z.array(z.lazy(() => CampaignStats$.inboundSchema)).optional(),
            createdAt: z.string(),
            dynamicList: z.boolean().optional(),
            folderId: z.number().int(),
            id: z.number().int(),
            name: z.string(),
            totalBlacklisted: z.number().int(),
            totalSubscribers: z.number().int(),
            uniqueSubscribers: z.number().int(),
        })
        .transform((v) => {
            return {
                ...(v.campaignStats === undefined ? null : { campaignStats: v.campaignStats }),
                createdAt: v.createdAt,
                ...(v.dynamicList === undefined ? null : { dynamicList: v.dynamicList }),
                folderId: v.folderId,
                id: v.id,
                name: v.name,
                totalBlacklisted: v.totalBlacklisted,
                totalSubscribers: v.totalSubscribers,
                uniqueSubscribers: v.uniqueSubscribers,
            };
        });

    export type Outbound = {
        campaignStats?: Array<CampaignStats$.Outbound> | undefined;
        createdAt: string;
        dynamicList?: boolean | undefined;
        folderId: number;
        id: number;
        name: string;
        totalBlacklisted: number;
        totalSubscribers: number;
        uniqueSubscribers: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetExtendedList> = z
        .object({
            campaignStats: z.array(z.lazy(() => CampaignStats$.outboundSchema)).optional(),
            createdAt: z.string(),
            dynamicList: z.boolean().optional(),
            folderId: z.number().int(),
            id: z.number().int(),
            name: z.string(),
            totalBlacklisted: z.number().int(),
            totalSubscribers: z.number().int(),
            uniqueSubscribers: z.number().int(),
        })
        .transform((v) => {
            return {
                ...(v.campaignStats === undefined ? null : { campaignStats: v.campaignStats }),
                createdAt: v.createdAt,
                ...(v.dynamicList === undefined ? null : { dynamicList: v.dynamicList }),
                folderId: v.folderId,
                id: v.id,
                name: v.name,
                totalBlacklisted: v.totalBlacklisted,
                totalSubscribers: v.totalSubscribers,
                uniqueSubscribers: v.uniqueSubscribers,
            };
        });
}
