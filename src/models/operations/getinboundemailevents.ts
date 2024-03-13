/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

/**
 * Sort the results in the ascending/descending order of record creation
 */
export enum GetInboundEmailEventsQueryParamSort {
    Asc = "asc",
    Desc = "desc",
}

export type GetInboundEmailEventsRequest = {
    /**
     * Mandatory if startDate is used. Ending date (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss.SSSZ) till which you want to fetch the list. Maximum time period that can be selected is one month.
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
     * Email address of the sender.
     */
    sender?: string | undefined;
    /**
     * Sort the results in the ascending/descending order of record creation
     */
    sort?: GetInboundEmailEventsQueryParamSort | undefined;
    /**
     * Mandatory if endDate is used. Starting date (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss.SSSZ) from which you want to fetch the list. Maximum time period that can be selected is one month.
     */
    startDate?: string | undefined;
};

export type GetInboundEmailEventsResponse = {
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
     * List of events for received emails.
     */
    getInboundEmailEvents?: components.GetInboundEmailEvents | undefined;
};

/** @internal */
export const GetInboundEmailEventsQueryParamSort$ = z.nativeEnum(
    GetInboundEmailEventsQueryParamSort
);

/** @internal */
export namespace GetInboundEmailEventsRequest$ {
    export type Inbound = {
        endDate?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        sender?: string | undefined;
        sort?: GetInboundEmailEventsQueryParamSort | undefined;
        startDate?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetInboundEmailEventsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            endDate: z.string().optional(),
            limit: z.number().int().default(100),
            offset: z.number().int().default(0),
            sender: z.string().optional(),
            sort: GetInboundEmailEventsQueryParamSort$.default(
                GetInboundEmailEventsQueryParamSort.Desc
            ),
            startDate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                limit: v.limit,
                offset: v.offset,
                ...(v.sender === undefined ? null : { sender: v.sender }),
                sort: v.sort,
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
            };
        });

    export type Outbound = {
        endDate?: string | undefined;
        limit: number;
        offset: number;
        sender?: string | undefined;
        sort: GetInboundEmailEventsQueryParamSort;
        startDate?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetInboundEmailEventsRequest> = z
        .object({
            endDate: z.string().optional(),
            limit: z.number().int().default(100),
            offset: z.number().int().default(0),
            sender: z.string().optional(),
            sort: GetInboundEmailEventsQueryParamSort$.default(
                GetInboundEmailEventsQueryParamSort.Desc
            ),
            startDate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                limit: v.limit,
                offset: v.offset,
                ...(v.sender === undefined ? null : { sender: v.sender }),
                sort: v.sort,
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
            };
        });
}

/** @internal */
export namespace GetInboundEmailEventsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getInboundEmailEvents?: components.GetInboundEmailEvents$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetInboundEmailEventsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getInboundEmailEvents: z
                .lazy(() => components.GetInboundEmailEvents$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getInboundEmailEvents === undefined
                    ? null
                    : { getInboundEmailEvents: v.getInboundEmailEvents }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getInboundEmailEvents?: components.GetInboundEmailEvents$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetInboundEmailEventsResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                getInboundEmailEvents: z
                    .lazy(() => components.GetInboundEmailEvents$.outboundSchema)
                    .optional(),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                    ...(v.getInboundEmailEvents === undefined
                        ? null
                        : { getInboundEmailEvents: v.getInboundEmailEvents }),
                };
            });
}
