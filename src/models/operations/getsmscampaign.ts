/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type GetSmsCampaignRequest = {
    /**
     * id of the SMS campaign
     */
    campaignId: number;
};

export type GetSmsCampaignResponse = {
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
    /**
     * SMS campaign informations
     */
    getSmsCampaign?: components.GetSmsCampaign | undefined;
};

/** @internal */
export namespace GetSmsCampaignRequest$ {
    export type Inbound = {
        campaignId: number;
    };

    export const inboundSchema: z.ZodType<GetSmsCampaignRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSmsCampaignRequest> = z
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
export namespace GetSmsCampaignResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getSmsCampaign?: components.GetSmsCampaign$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetSmsCampaignResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getSmsCampaign: z.lazy(() => components.GetSmsCampaign$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getSmsCampaign === undefined ? null : { getSmsCampaign: v.getSmsCampaign }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getSmsCampaign?: components.GetSmsCampaign$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSmsCampaignResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getSmsCampaign: z.lazy(() => components.GetSmsCampaign$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getSmsCampaign === undefined ? null : { getSmsCampaign: v.getSmsCampaign }),
            };
        });
}
