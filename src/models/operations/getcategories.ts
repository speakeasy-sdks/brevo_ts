/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
 */
export enum GetCategoriesQueryParamSort {
    Asc = "asc",
    Desc = "desc",
}

export type GetCategoriesRequest = {
    /**
     * Filter by category ids
     */
    ids?: Array<string> | undefined;
    /**
     * Number of documents per page
     */
    limit?: number | undefined;
    /**
     * Filter by category name
     */
    name?: string | undefined;
    /**
     * Index of the first document in the page
     */
    offset?: number | undefined;
    /**
     * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
     */
    sort?: GetCategoriesQueryParamSort | undefined;
};

export type GetCategoriesResponse = {
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
     * All categories listed
     */
    getCategories?: components.GetCategories | undefined;
};

/** @internal */
export const GetCategoriesQueryParamSort$ = z.nativeEnum(GetCategoriesQueryParamSort);

/** @internal */
export namespace GetCategoriesRequest$ {
    export type Inbound = {
        ids?: Array<string> | undefined;
        limit?: number | undefined;
        name?: string | undefined;
        offset?: number | undefined;
        sort?: GetCategoriesQueryParamSort | undefined;
    };

    export const inboundSchema: z.ZodType<GetCategoriesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ids: z.array(z.string()).optional(),
            limit: z.number().int().default(50),
            name: z.string().optional(),
            offset: z.number().int().default(0),
            sort: GetCategoriesQueryParamSort$.default(GetCategoriesQueryParamSort.Desc),
        })
        .transform((v) => {
            return {
                ...(v.ids === undefined ? null : { ids: v.ids }),
                limit: v.limit,
                ...(v.name === undefined ? null : { name: v.name }),
                offset: v.offset,
                sort: v.sort,
            };
        });

    export type Outbound = {
        ids?: Array<string> | undefined;
        limit: number;
        name?: string | undefined;
        offset: number;
        sort: GetCategoriesQueryParamSort;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCategoriesRequest> = z
        .object({
            ids: z.array(z.string()).optional(),
            limit: z.number().int().default(50),
            name: z.string().optional(),
            offset: z.number().int().default(0),
            sort: GetCategoriesQueryParamSort$.default(GetCategoriesQueryParamSort.Desc),
        })
        .transform((v) => {
            return {
                ...(v.ids === undefined ? null : { ids: v.ids }),
                limit: v.limit,
                ...(v.name === undefined ? null : { name: v.name }),
                offset: v.offset,
                sort: v.sort,
            };
        });
}

/** @internal */
export namespace GetCategoriesResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getCategories?: components.GetCategories$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetCategoriesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getCategories: z.lazy(() => components.GetCategories$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getCategories === undefined ? null : { getCategories: v.getCategories }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getCategories?: components.GetCategories$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCategoriesResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getCategories: z.lazy(() => components.GetCategories$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getCategories === undefined ? null : { getCategories: v.getCategories }),
            };
        });
}
