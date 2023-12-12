/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Status of the campaign
 */
export enum UpdateWhatsAppCampaignCampaignStatus {
    Scheduled = "scheduled",
    Suspended = "suspended",
}

/**
 * Segment ids and List ids to include/exclude from campaign
 */
export type UpdateWhatsAppCampaignRecipients = {
    /**
     * List ids to exclude from the campaign
     */
    excludedListIds?: Array<number> | undefined;
    /**
     * **Mandatory if scheduledAt is not empty**. List Ids to send the campaign to
     *
     * @remarks
     *
     */
    listIds?: Array<number> | undefined;
    /**
     * **Mandatory if listIds are not used**. Segment ids to send the campaign to.
     *
     * @remarks
     *
     */
    segments?: Array<number> | undefined;
};

export type UpdateWhatsAppCampaign = {
    /**
     * Name of the campaign
     */
    campaignName?: string | undefined;
    /**
     * Status of the campaign
     */
    campaignStatus?: UpdateWhatsAppCampaignCampaignStatus | undefined;
    /**
     * Segment ids and List ids to include/exclude from campaign
     */
    recipients?: UpdateWhatsAppCampaignRecipients | undefined;
    /**
     * Reschedule the sending UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) of campaign. **Prefer to pass your timezone in date-time format for accurate result.For example: **2017-06-01T12:30:00+02:00**
     *
     * @remarks
     * Use this field to update the scheduledAt of any existing draft or scheduled WhatsApp campaign.
     *
     */
    rescheduleFor?: string | undefined;
};

/** @internal */
export const UpdateWhatsAppCampaignCampaignStatus$ = z.nativeEnum(
    UpdateWhatsAppCampaignCampaignStatus
);

/** @internal */
export namespace UpdateWhatsAppCampaignRecipients$ {
    export type Inbound = {
        excludedListIds?: Array<number> | undefined;
        listIds?: Array<number> | undefined;
        segments?: Array<number> | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateWhatsAppCampaignRecipients, z.ZodTypeDef, Inbound> =
        z
            .object({
                excludedListIds: z.array(z.number().int()).optional(),
                listIds: z.array(z.number().int()).optional(),
                segments: z.array(z.number().int()).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.excludedListIds === undefined
                        ? null
                        : { excludedListIds: v.excludedListIds }),
                    ...(v.listIds === undefined ? null : { listIds: v.listIds }),
                    ...(v.segments === undefined ? null : { segments: v.segments }),
                };
            });

    export type Outbound = {
        excludedListIds?: Array<number> | undefined;
        listIds?: Array<number> | undefined;
        segments?: Array<number> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateWhatsAppCampaignRecipients
    > = z
        .object({
            excludedListIds: z.array(z.number().int()).optional(),
            listIds: z.array(z.number().int()).optional(),
            segments: z.array(z.number().int()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.excludedListIds === undefined
                    ? null
                    : { excludedListIds: v.excludedListIds }),
                ...(v.listIds === undefined ? null : { listIds: v.listIds }),
                ...(v.segments === undefined ? null : { segments: v.segments }),
            };
        });
}

/** @internal */
export namespace UpdateWhatsAppCampaign$ {
    export type Inbound = {
        campaignName?: string | undefined;
        campaignStatus?: UpdateWhatsAppCampaignCampaignStatus | undefined;
        recipients?: UpdateWhatsAppCampaignRecipients$.Inbound | undefined;
        rescheduleFor?: string | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateWhatsAppCampaign, z.ZodTypeDef, Inbound> = z
        .object({
            campaignName: z.string().optional(),
            campaignStatus: UpdateWhatsAppCampaignCampaignStatus$.optional(),
            recipients: z.lazy(() => UpdateWhatsAppCampaignRecipients$.inboundSchema).optional(),
            rescheduleFor: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.campaignName === undefined ? null : { campaignName: v.campaignName }),
                ...(v.campaignStatus === undefined ? null : { campaignStatus: v.campaignStatus }),
                ...(v.recipients === undefined ? null : { recipients: v.recipients }),
                ...(v.rescheduleFor === undefined ? null : { rescheduleFor: v.rescheduleFor }),
            };
        });

    export type Outbound = {
        campaignName?: string | undefined;
        campaignStatus?: UpdateWhatsAppCampaignCampaignStatus | undefined;
        recipients?: UpdateWhatsAppCampaignRecipients$.Outbound | undefined;
        rescheduleFor?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateWhatsAppCampaign> = z
        .object({
            campaignName: z.string().optional(),
            campaignStatus: UpdateWhatsAppCampaignCampaignStatus$.optional(),
            recipients: z.lazy(() => UpdateWhatsAppCampaignRecipients$.outboundSchema).optional(),
            rescheduleFor: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.campaignName === undefined ? null : { campaignName: v.campaignName }),
                ...(v.campaignStatus === undefined ? null : { campaignStatus: v.campaignStatus }),
                ...(v.recipients === undefined ? null : { recipients: v.recipients }),
                ...(v.rescheduleFor === undefined ? null : { rescheduleFor: v.rescheduleFor }),
            };
        });
}
