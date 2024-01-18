/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetResellerChildsRequest = {
    /**
     * Number of documents for child accounts information per page
     */
    limit?: number | undefined;
    /**
     * Index of the first document in the page
     */
    offset?: number | undefined;
};

export type GetResellerChildsResponse = {
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
     * list of children
     */
    getChildrenList?: components.GetChildrenList | undefined;
};

/** @internal */
export namespace GetResellerChildsRequest$ {
    export type Inbound = {
        limit?: number | undefined;
        offset?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetResellerChildsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            limit: z.number().int().default(10),
            offset: z.number().int().default(0),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
            };
        });

    export type Outbound = {
        limit: number;
        offset: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetResellerChildsRequest> = z
        .object({
            limit: z.number().int().default(10),
            offset: z.number().int().default(0),
        })
        .transform((v) => {
            return {
                limit: v.limit,
                offset: v.offset,
            };
        });
}

/** @internal */
export namespace GetResellerChildsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getChildrenList?: components.GetChildrenList$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetResellerChildsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getChildrenList: components.GetChildrenList$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getChildrenList === undefined
                    ? null
                    : { getChildrenList: v.getChildrenList }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getChildrenList?: components.GetChildrenList$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetResellerChildsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getChildrenList: components.GetChildrenList$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getChildrenList === undefined
                    ? null
                    : { getChildrenList: v.getChildrenList }),
            };
        });
}
