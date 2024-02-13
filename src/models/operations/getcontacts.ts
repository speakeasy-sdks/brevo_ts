/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
 */
export enum QueryParamSort {
    Asc = "asc",
    Desc = "desc",
}

export type GetContactsRequest = {
    /**
     * Filter (urlencoded) the contacts created after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.**
     *
     * @remarks
     *
     */
    createdSince?: string | undefined;
    /**
     * Number of documents per page
     */
    limit?: number | undefined;
    /**
     * Filter (urlencoded) the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.**
     *
     * @remarks
     *
     */
    modifiedSince?: string | undefined;
    /**
     * Index of the first document of the page
     */
    offset?: number | undefined;
    /**
     * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
     */
    sort?: QueryParamSort | undefined;
};

export type GetContactsResponse = {
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
     * All contacts listed
     */
    getContacts?: components.GetContacts | undefined;
};

/** @internal */
export const QueryParamSort$ = z.nativeEnum(QueryParamSort);

/** @internal */
export namespace GetContactsRequest$ {
    export type Inbound = {
        createdSince?: string | undefined;
        limit?: number | undefined;
        modifiedSince?: string | undefined;
        offset?: number | undefined;
        sort?: QueryParamSort | undefined;
    };

    export const inboundSchema: z.ZodType<GetContactsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            createdSince: z.string().optional(),
            limit: z.number().int().default(50),
            modifiedSince: z.string().optional(),
            offset: z.number().int().default(0),
            sort: QueryParamSort$.default(QueryParamSort.Desc),
        })
        .transform((v) => {
            return {
                ...(v.createdSince === undefined ? null : { createdSince: v.createdSince }),
                limit: v.limit,
                ...(v.modifiedSince === undefined ? null : { modifiedSince: v.modifiedSince }),
                offset: v.offset,
                sort: v.sort,
            };
        });

    export type Outbound = {
        createdSince?: string | undefined;
        limit: number;
        modifiedSince?: string | undefined;
        offset: number;
        sort: QueryParamSort;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetContactsRequest> = z
        .object({
            createdSince: z.string().optional(),
            limit: z.number().int().default(50),
            modifiedSince: z.string().optional(),
            offset: z.number().int().default(0),
            sort: QueryParamSort$.default(QueryParamSort.Desc),
        })
        .transform((v) => {
            return {
                ...(v.createdSince === undefined ? null : { createdSince: v.createdSince }),
                limit: v.limit,
                ...(v.modifiedSince === undefined ? null : { modifiedSince: v.modifiedSince }),
                offset: v.offset,
                sort: v.sort,
            };
        });
}

/** @internal */
export namespace GetContactsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getContacts?: components.GetContacts$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetContactsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getContacts: z.lazy(() => components.GetContacts$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getContacts === undefined ? null : { getContacts: v.getContacts }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getContacts?: components.GetContacts$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetContactsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getContacts: z.lazy(() => components.GetContacts$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getContacts === undefined ? null : { getContacts: v.getContacts }),
            };
        });
}
