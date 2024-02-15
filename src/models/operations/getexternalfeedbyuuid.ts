/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetExternalFeedByUUIDRequest = {
    /**
     * UUID of the feed to fetch
     */
    uuid: string;
};

export type GetExternalFeedByUUIDResponse = {
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
     * External feed
     */
    getExternalFeedByUUID?: components.GetExternalFeedByUUID | undefined;
};

/** @internal */
export namespace GetExternalFeedByUUIDRequest$ {
    export type Inbound = {
        uuid: string;
    };

    export const inboundSchema: z.ZodType<GetExternalFeedByUUIDRequest, z.ZodTypeDef, Inbound> = z
        .object({
            uuid: z.string(),
        })
        .transform((v) => {
            return {
                uuid: v.uuid,
            };
        });

    export type Outbound = {
        uuid: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetExternalFeedByUUIDRequest> = z
        .object({
            uuid: z.string(),
        })
        .transform((v) => {
            return {
                uuid: v.uuid,
            };
        });
}

/** @internal */
export namespace GetExternalFeedByUUIDResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getExternalFeedByUUID?: components.GetExternalFeedByUUID$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetExternalFeedByUUIDResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getExternalFeedByUUID: z
                .lazy(() => components.GetExternalFeedByUUID$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getExternalFeedByUUID === undefined
                    ? null
                    : { getExternalFeedByUUID: v.getExternalFeedByUUID }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getExternalFeedByUUID?: components.GetExternalFeedByUUID$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetExternalFeedByUUIDResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                getExternalFeedByUUID: z
                    .lazy(() => components.GetExternalFeedByUUID$.outboundSchema)
                    .optional(),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                    ...(v.getExternalFeedByUUID === undefined
                        ? null
                        : { getExternalFeedByUUID: v.getExternalFeedByUUID }),
                };
            });
}
