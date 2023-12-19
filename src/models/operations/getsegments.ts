/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
 */
export enum GetSegmentsQueryParamSort {
    Asc = "asc",
    Desc = "desc",
}

export type GetSegmentsRequest = {
    /**
     * Number of documents per page
     */
    limit?: number | undefined;
    /**
     * Index of the first document of the page
     */
    offset?: number | undefined;
    /**
     * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
     */
    sort?: GetSegmentsQueryParamSort | undefined;
};

export type GetSegmentsResponse = {
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
     * Segments informations
     */
    getSegments?: components.GetSegments | undefined;
};

/** @internal */
export const GetSegmentsQueryParamSort$ = z.nativeEnum(GetSegmentsQueryParamSort);

/** @internal */
export namespace GetSegmentsRequest$ {
    export type Inbound = {
        limit?: number | undefined;
        offset?: number | undefined;
        sort?: GetSegmentsQueryParamSort | undefined;
    };

    export const inboundSchema: z.ZodType<GetSegmentsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
            sort: GetSegmentsQueryParamSort$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
                ...(v.sort === undefined ? null : { sort: v.sort }),
            };
        });

    export type Outbound = {
        limit?: number | undefined;
        offset?: number | undefined;
        sort?: GetSegmentsQueryParamSort | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSegmentsRequest> = z
        .object({
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
            sort: GetSegmentsQueryParamSort$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
                ...(v.sort === undefined ? null : { sort: v.sort }),
            };
        });
}

/** @internal */
export namespace GetSegmentsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getSegments?: components.GetSegments$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetSegmentsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getSegments: z.lazy(() => components.GetSegments$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getSegments === undefined ? null : { getSegments: v.getSegments }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getSegments?: components.GetSegments$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSegmentsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getSegments: z.lazy(() => components.GetSegments$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getSegments === undefined ? null : { getSegments: v.getSegments }),
            };
        });
}
