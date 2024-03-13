/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { WhatsappCampStats, WhatsappCampStats$ } from "./whatsappcampstats";
import * as z from "zod";

/**
 * Status of the WhatsApp Campaign
 */
export enum GetWhatsappCampaignsCampaignStatus {
    Draft = "draft",
    Scheduled = "scheduled",
    Pending = "pending",
    Approved = "approved",
    Running = "running",
    Suspended = "suspended",
    Rejected = "rejected",
    Sent = "sent",
}

export type GetWhatsappCampaignsCampaigns = {
    /**
     * Name of the WhatsApp Campaign
     */
    campaignName: string;
    /**
     * Status of the WhatsApp Campaign
     */
    campaignStatus: GetWhatsappCampaignsCampaignStatus;
    /**
     * Creation UTC date-time of the WhatsApp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    createdAt: string;
    /**
     * Error Reason associated with the WhatsApp campaign sending
     */
    errorReason?: string | undefined;
    /**
     * ID of the WhatsApp Campaign
     */
    id: number;
    /**
     * Count of invalidated contacts
     */
    invalidatedContacts?: number | undefined;
    /**
     * UTC date-time of last modification of the WhatsApp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    modifiedAt: string;
    /**
     * Read percentage of the the WhatsApp campaign created
     */
    readPercentage?: number | undefined;
    /**
     * UTC date-time on which WhatsApp campaign is scheduled. Should be in YYYY-MM-DDTHH:mm:ss.SSSZ format
     */
    scheduledAt: string;
    stats?: WhatsappCampStats | undefined;
    /**
     * Id of the WhatsApp template
     */
    templateId: string;
};

export type GetWhatsappCampaigns = {
    campaigns?: Array<GetWhatsappCampaignsCampaigns> | undefined;
    /**
     * Number of WhatsApp campaigns retrieved
     */
    count?: number | undefined;
};

/** @internal */
export const GetWhatsappCampaignsCampaignStatus$ = z.nativeEnum(GetWhatsappCampaignsCampaignStatus);

/** @internal */
export namespace GetWhatsappCampaignsCampaigns$ {
    export type Inbound = {
        campaignName: string;
        campaignStatus: GetWhatsappCampaignsCampaignStatus;
        createdAt: string;
        errorReason?: string | undefined;
        id: number;
        invalidatedContacts?: number | undefined;
        modifiedAt: string;
        readPercentage?: number | undefined;
        scheduledAt: string;
        stats?: WhatsappCampStats$.Inbound | undefined;
        templateId: string;
    };

    export const inboundSchema: z.ZodType<GetWhatsappCampaignsCampaigns, z.ZodTypeDef, Inbound> = z
        .object({
            campaignName: z.string(),
            campaignStatus: GetWhatsappCampaignsCampaignStatus$,
            createdAt: z.string(),
            errorReason: z.string().optional(),
            id: z.number().int(),
            invalidatedContacts: z.number().int().optional(),
            modifiedAt: z.string(),
            readPercentage: z.number().optional(),
            scheduledAt: z.string(),
            stats: WhatsappCampStats$.inboundSchema.optional(),
            templateId: z.string(),
        })
        .transform((v) => {
            return {
                campaignName: v.campaignName,
                campaignStatus: v.campaignStatus,
                createdAt: v.createdAt,
                ...(v.errorReason === undefined ? null : { errorReason: v.errorReason }),
                id: v.id,
                ...(v.invalidatedContacts === undefined
                    ? null
                    : { invalidatedContacts: v.invalidatedContacts }),
                modifiedAt: v.modifiedAt,
                ...(v.readPercentage === undefined ? null : { readPercentage: v.readPercentage }),
                scheduledAt: v.scheduledAt,
                ...(v.stats === undefined ? null : { stats: v.stats }),
                templateId: v.templateId,
            };
        });

    export type Outbound = {
        campaignName: string;
        campaignStatus: GetWhatsappCampaignsCampaignStatus;
        createdAt: string;
        errorReason?: string | undefined;
        id: number;
        invalidatedContacts?: number | undefined;
        modifiedAt: string;
        readPercentage?: number | undefined;
        scheduledAt: string;
        stats?: WhatsappCampStats$.Outbound | undefined;
        templateId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWhatsappCampaignsCampaigns> =
        z
            .object({
                campaignName: z.string(),
                campaignStatus: GetWhatsappCampaignsCampaignStatus$,
                createdAt: z.string(),
                errorReason: z.string().optional(),
                id: z.number().int(),
                invalidatedContacts: z.number().int().optional(),
                modifiedAt: z.string(),
                readPercentage: z.number().optional(),
                scheduledAt: z.string(),
                stats: WhatsappCampStats$.outboundSchema.optional(),
                templateId: z.string(),
            })
            .transform((v) => {
                return {
                    campaignName: v.campaignName,
                    campaignStatus: v.campaignStatus,
                    createdAt: v.createdAt,
                    ...(v.errorReason === undefined ? null : { errorReason: v.errorReason }),
                    id: v.id,
                    ...(v.invalidatedContacts === undefined
                        ? null
                        : { invalidatedContacts: v.invalidatedContacts }),
                    modifiedAt: v.modifiedAt,
                    ...(v.readPercentage === undefined
                        ? null
                        : { readPercentage: v.readPercentage }),
                    scheduledAt: v.scheduledAt,
                    ...(v.stats === undefined ? null : { stats: v.stats }),
                    templateId: v.templateId,
                };
            });
}

/** @internal */
export namespace GetWhatsappCampaigns$ {
    export type Inbound = {
        campaigns?: Array<GetWhatsappCampaignsCampaigns$.Inbound> | undefined;
        count?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetWhatsappCampaigns, z.ZodTypeDef, Inbound> = z
        .object({
            campaigns: z
                .array(z.lazy(() => GetWhatsappCampaignsCampaigns$.inboundSchema))
                .optional(),
            count: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.campaigns === undefined ? null : { campaigns: v.campaigns }),
                ...(v.count === undefined ? null : { count: v.count }),
            };
        });

    export type Outbound = {
        campaigns?: Array<GetWhatsappCampaignsCampaigns$.Outbound> | undefined;
        count?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWhatsappCampaigns> = z
        .object({
            campaigns: z
                .array(z.lazy(() => GetWhatsappCampaignsCampaigns$.outboundSchema))
                .optional(),
            count: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.campaigns === undefined ? null : { campaigns: v.campaigns }),
                ...(v.count === undefined ? null : { count: v.count }),
            };
        });
}
