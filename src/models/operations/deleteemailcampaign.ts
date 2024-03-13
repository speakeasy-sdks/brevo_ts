/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteEmailCampaignRequest = {
    /**
     * id of the campaign
     */
    campaignId: number;
};

export type DeleteEmailCampaignResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace DeleteEmailCampaignRequest$ {
    export type Inbound = {
        campaignId: number;
    };

    export const inboundSchema: z.ZodType<DeleteEmailCampaignRequest, z.ZodTypeDef, Inbound> = z
        .object({
            campaignId: z.number().int(),
        })
        .transform((v) => {
            return {
                campaignId: v.campaignId,
            };
        });

    export type Outbound = {
        campaignId: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteEmailCampaignRequest> = z
        .object({
            campaignId: z.number().int(),
        })
        .transform((v) => {
            return {
                campaignId: v.campaignId,
            };
        });
}

/** @internal */
export namespace DeleteEmailCampaignResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<DeleteEmailCampaignResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteEmailCampaignResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
