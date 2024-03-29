/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Note:- **replicateTemplate** status will be available **only for template type campaigns.**
 *
 * @remarks
 *
 */
export enum UpdateCampaignStatusStatus {
    Suspended = "suspended",
    Archive = "archive",
    Darchive = "darchive",
    Sent = "sent",
    Queued = "queued",
    Replicate = "replicate",
    ReplicateTemplate = "replicateTemplate",
    Draft = "draft",
}

/**
 * Status of the campaign
 */
export type UpdateCampaignStatus = {
    /**
     * Note:- **replicateTemplate** status will be available **only for template type campaigns.**
     *
     * @remarks
     *
     */
    status?: UpdateCampaignStatusStatus | undefined;
};

/** @internal */
export const UpdateCampaignStatusStatus$ = z.nativeEnum(UpdateCampaignStatusStatus);

/** @internal */
export namespace UpdateCampaignStatus$ {
    export type Inbound = {
        status?: UpdateCampaignStatusStatus | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateCampaignStatus, z.ZodTypeDef, Inbound> = z
        .object({
            status: UpdateCampaignStatusStatus$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        status?: UpdateCampaignStatusStatus | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCampaignStatus> = z
        .object({
            status: UpdateCampaignStatusStatus$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });
}
