/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type GetSharedTemplateUrlRequest = {
    /**
     * Id of the campaign or template
     */
    campaignId: number;
};

export type GetSharedTemplateUrlResponse = {
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
     * Shared template URL information
     */
    getSharedTemplateUrl?: components.GetSharedTemplateUrl | undefined;
};

/** @internal */
export namespace GetSharedTemplateUrlRequest$ {
    export type Inbound = {
        campaignId: number;
    };

    export const inboundSchema: z.ZodType<GetSharedTemplateUrlRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSharedTemplateUrlRequest> = z
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
export namespace GetSharedTemplateUrlResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getSharedTemplateUrl?: components.GetSharedTemplateUrl$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetSharedTemplateUrlResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getSharedTemplateUrl: z
                .lazy(() => components.GetSharedTemplateUrl$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getSharedTemplateUrl === undefined
                    ? null
                    : { getSharedTemplateUrl: v.getSharedTemplateUrl }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getSharedTemplateUrl?: components.GetSharedTemplateUrl$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSharedTemplateUrlResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getSharedTemplateUrl: z
                .lazy(() => components.GetSharedTemplateUrl$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getSharedTemplateUrl === undefined
                    ? null
                    : { getSharedTemplateUrl: v.getSharedTemplateUrl }),
            };
        });
}
