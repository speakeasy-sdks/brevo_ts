/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
 */
export enum GetContactsFromListQueryParamSort {
    Asc = "asc",
    Desc = "desc",
}

export type GetContactsFromListRequest = {
    /**
     * Number of documents per page
     */
    limit?: number | undefined;
    /**
     * Id of the list
     */
    listId: number;
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
    sort?: GetContactsFromListQueryParamSort | undefined;
};

export type GetContactsFromListResponse = {
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
     * Contact informations
     */
    getContacts?: components.GetContacts | undefined;
};

/** @internal */
export const GetContactsFromListQueryParamSort$ = z.nativeEnum(GetContactsFromListQueryParamSort);

/** @internal */
export namespace GetContactsFromListRequest$ {
    export type Inbound = {
        limit?: number | undefined;
        listId: number;
        modifiedSince?: string | undefined;
        offset?: number | undefined;
        sort?: GetContactsFromListQueryParamSort | undefined;
    };

    export const inboundSchema: z.ZodType<GetContactsFromListRequest, z.ZodTypeDef, Inbound> = z
        .object({
            limit: z.number().int().default(50),
            listId: z.number().int(),
            modifiedSince: z.string().optional(),
            offset: z.number().int().default(0),
            sort: GetContactsFromListQueryParamSort$.default(
                GetContactsFromListQueryParamSort.Desc
            ),
        })
        .transform((v) => {
            return {
                limit: v.limit,
                listId: v.listId,
                ...(v.modifiedSince === undefined ? null : { modifiedSince: v.modifiedSince }),
                offset: v.offset,
                sort: v.sort,
            };
        });

    export type Outbound = {
        limit: number;
        listId: number;
        modifiedSince?: string | undefined;
        offset: number;
        sort: GetContactsFromListQueryParamSort;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetContactsFromListRequest> = z
        .object({
            limit: z.number().int().default(50),
            listId: z.number().int(),
            modifiedSince: z.string().optional(),
            offset: z.number().int().default(0),
            sort: GetContactsFromListQueryParamSort$.default(
                GetContactsFromListQueryParamSort.Desc
            ),
        })
        .transform((v) => {
            return {
                limit: v.limit,
                listId: v.listId,
                ...(v.modifiedSince === undefined ? null : { modifiedSince: v.modifiedSince }),
                offset: v.offset,
                sort: v.sort,
            };
        });
}

/** @internal */
export namespace GetContactsFromListResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getContacts?: components.GetContacts$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetContactsFromListResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getContacts: components.GetContacts$.inboundSchema.optional(),
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetContactsFromListResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getContacts: components.GetContacts$.outboundSchema.optional(),
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
