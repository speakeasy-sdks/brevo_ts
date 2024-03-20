/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
 */
export enum GetTransacBlockedContactsQueryParamSort {
    Asc = "asc",
    Desc = "desc",
}

export type GetTransacBlockedContactsRequest = {
    /**
     * **Mandatory if startDate is used.** Ending date (YYYY-MM-DD) till which you want to fetch the blocked or unsubscribed contacts
     *
     * @remarks
     *
     */
    endDate?: string | undefined;
    /**
     * Number of documents returned per page
     */
    limit?: number | undefined;
    /**
     * Index of the first document on the page
     */
    offset?: number | undefined;
    /**
     * Comma separated list of emails of the senders from which contacts are blocked or unsubscribed
     */
    senders?: Array<string> | undefined;
    /**
     * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
     */
    sort?: GetTransacBlockedContactsQueryParamSort | undefined;
    /**
     * **Mandatory if endDate is used.** Starting date (YYYY-MM-DD) from which you want to fetch the blocked or unsubscribed contacts
     *
     * @remarks
     *
     */
    startDate?: string | undefined;
};

export type GetTransacBlockedContactsResponse = {
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
     * List of blocked or unsubscribed transactional contacts
     */
    getTransacBlockedContacts?: components.GetTransacBlockedContacts | undefined;
};

/** @internal */
export const GetTransacBlockedContactsQueryParamSort$ = z.nativeEnum(
    GetTransacBlockedContactsQueryParamSort
);

/** @internal */
export namespace GetTransacBlockedContactsRequest$ {
    export type Inbound = {
        endDate?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        senders?: Array<string> | undefined;
        sort?: GetTransacBlockedContactsQueryParamSort | undefined;
        startDate?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetTransacBlockedContactsRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                endDate: z.string().optional(),
                limit: z.number().int().default(50),
                offset: z.number().int().default(0),
                senders: z.array(z.string()).optional(),
                sort: GetTransacBlockedContactsQueryParamSort$.default(
                    GetTransacBlockedContactsQueryParamSort.Desc
                ),
                startDate: z.string().optional(),
            })
            .transform((v) => {
                return {
                    ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                    limit: v.limit,
                    offset: v.offset,
                    ...(v.senders === undefined ? null : { senders: v.senders }),
                    sort: v.sort,
                    ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                };
            });

    export type Outbound = {
        endDate?: string | undefined;
        limit: number;
        offset: number;
        senders?: Array<string> | undefined;
        sort: GetTransacBlockedContactsQueryParamSort;
        startDate?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetTransacBlockedContactsRequest
    > = z
        .object({
            endDate: z.string().optional(),
            limit: z.number().int().default(50),
            offset: z.number().int().default(0),
            senders: z.array(z.string()).optional(),
            sort: GetTransacBlockedContactsQueryParamSort$.default(
                GetTransacBlockedContactsQueryParamSort.Desc
            ),
            startDate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                limit: v.limit,
                offset: v.offset,
                ...(v.senders === undefined ? null : { senders: v.senders }),
                sort: v.sort,
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
            };
        });
}

/** @internal */
export namespace GetTransacBlockedContactsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getTransacBlockedContacts?: components.GetTransacBlockedContacts$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetTransacBlockedContactsResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getTransacBlockedContacts: z
                .lazy(() => components.GetTransacBlockedContacts$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getTransacBlockedContacts === undefined
                    ? null
                    : { getTransacBlockedContacts: v.getTransacBlockedContacts }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getTransacBlockedContacts?: components.GetTransacBlockedContacts$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetTransacBlockedContactsResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getTransacBlockedContacts: z
                .lazy(() => components.GetTransacBlockedContacts$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getTransacBlockedContacts === undefined
                    ? null
                    : { getTransacBlockedContacts: v.getTransacBlockedContacts }),
            };
        });
}
