/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetCategoryInfoRequest = {
    /**
     * Category ID
     */
    id: string;
};

export type GetCategoryInfoResponse = {
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
     * Category informations
     */
    getCategoryDetails?: components.GetCategoryDetails | undefined;
};

/** @internal */
export namespace GetCategoryInfoRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<GetCategoryInfoRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCategoryInfoRequest> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace GetCategoryInfoResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getCategoryDetails?: components.GetCategoryDetails$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetCategoryInfoResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getCategoryDetails: components.GetCategoryDetails$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getCategoryDetails === undefined
                    ? null
                    : { getCategoryDetails: v.getCategoryDetails }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getCategoryDetails?: components.GetCategoryDetails$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCategoryInfoResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getCategoryDetails: components.GetCategoryDetails$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getCategoryDetails === undefined
                    ? null
                    : { getCategoryDetails: v.getCategoryDetails }),
            };
        });
}
