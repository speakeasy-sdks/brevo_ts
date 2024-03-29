/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetAbTestCampaignResultRequest = {
    /**
     * Id of the A/B test campaign
     */
    campaignId: number;
};

export type GetAbTestCampaignResultResponse = {
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
     * A/B test email campaign Result
     */
    abTestCampaignResult?: components.AbTestCampaignResult | undefined;
};

/** @internal */
export namespace GetAbTestCampaignResultRequest$ {
    export type Inbound = {
        campaignId: number;
    };

    export const inboundSchema: z.ZodType<GetAbTestCampaignResultRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAbTestCampaignResultRequest> =
        z
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
export namespace GetAbTestCampaignResultResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        abTestCampaignResult?: components.AbTestCampaignResult$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetAbTestCampaignResultResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ContentType: z.string(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
                abTestCampaignResult: components.AbTestCampaignResult$.inboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    contentType: v.ContentType,
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                    ...(v.abTestCampaignResult === undefined
                        ? null
                        : { abTestCampaignResult: v.abTestCampaignResult }),
                };
            });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        abTestCampaignResult?: components.AbTestCampaignResult$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAbTestCampaignResultResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            abTestCampaignResult: components.AbTestCampaignResult$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.abTestCampaignResult === undefined
                    ? null
                    : { abTestCampaignResult: v.abTestCampaignResult }),
            };
        });
}
