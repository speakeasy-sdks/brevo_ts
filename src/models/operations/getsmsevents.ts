/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

/**
 * Filter the report for specific events
 */
export enum Event {
    Bounces = "bounces",
    HardBounces = "hardBounces",
    SoftBounces = "softBounces",
    Delivered = "delivered",
    Sent = "sent",
    Accepted = "accepted",
    Unsubscription = "unsubscription",
    Replies = "replies",
    Blocked = "blocked",
    Rejected = "rejected",
}

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
 */
export enum GetSmsEventsQueryParamSort {
    Asc = "asc",
    Desc = "desc",
}

export type GetSmsEventsRequest = {
    /**
     * Number of days in the past including today (positive integer). **Not compatible with 'startDate' and 'endDate'**
     *
     * @remarks
     *
     */
    days?: number | undefined;
    /**
     * **Mandatory if startDate is used.** Ending date (YYYY-MM-DD) of the report
     *
     * @remarks
     *
     */
    endDate?: string | undefined;
    /**
     * Filter the report for specific events
     */
    event?: Event | undefined;
    /**
     * Number of documents per page
     */
    limit?: number | undefined;
    /**
     * Index of the first document of the page
     */
    offset?: number | undefined;
    /**
     * Filter the report for a specific phone number
     */
    phoneNumber?: string | undefined;
    /**
     * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
     */
    sort?: GetSmsEventsQueryParamSort | undefined;
    /**
     * **Mandatory if endDate is used.** Starting date (YYYY-MM-DD) of the report
     *
     * @remarks
     *
     */
    startDate?: string | undefined;
    /**
     * Filter the report for specific tags passed as a serialized urlencoded array
     */
    tags?: string | undefined;
};

export type GetSmsEventsResponse = {
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
     * Sms events report informations
     */
    getSmsEventReport?: components.GetSmsEventReport | undefined;
};

/** @internal */
export const Event$ = z.nativeEnum(Event);

/** @internal */
export const GetSmsEventsQueryParamSort$ = z.nativeEnum(GetSmsEventsQueryParamSort);

/** @internal */
export namespace GetSmsEventsRequest$ {
    export type Inbound = {
        days?: number | undefined;
        endDate?: string | undefined;
        event?: Event | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        phoneNumber?: string | undefined;
        sort?: GetSmsEventsQueryParamSort | undefined;
        startDate?: string | undefined;
        tags?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetSmsEventsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            days: z.number().int().optional(),
            endDate: z.string().optional(),
            event: Event$.optional(),
            limit: z.number().int().default(50),
            offset: z.number().int().default(0),
            phoneNumber: z.string().optional(),
            sort: GetSmsEventsQueryParamSort$.default(GetSmsEventsQueryParamSort.Desc),
            startDate: z.string().optional(),
            tags: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.days === undefined ? null : { days: v.days }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.event === undefined ? null : { event: v.event }),
                limit: v.limit,
                offset: v.offset,
                ...(v.phoneNumber === undefined ? null : { phoneNumber: v.phoneNumber }),
                sort: v.sort,
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
            };
        });

    export type Outbound = {
        days?: number | undefined;
        endDate?: string | undefined;
        event?: Event | undefined;
        limit: number;
        offset: number;
        phoneNumber?: string | undefined;
        sort: GetSmsEventsQueryParamSort;
        startDate?: string | undefined;
        tags?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSmsEventsRequest> = z
        .object({
            days: z.number().int().optional(),
            endDate: z.string().optional(),
            event: Event$.optional(),
            limit: z.number().int().default(50),
            offset: z.number().int().default(0),
            phoneNumber: z.string().optional(),
            sort: GetSmsEventsQueryParamSort$.default(GetSmsEventsQueryParamSort.Desc),
            startDate: z.string().optional(),
            tags: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.days === undefined ? null : { days: v.days }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.event === undefined ? null : { event: v.event }),
                limit: v.limit,
                offset: v.offset,
                ...(v.phoneNumber === undefined ? null : { phoneNumber: v.phoneNumber }),
                sort: v.sort,
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
            };
        });
}

/** @internal */
export namespace GetSmsEventsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getSmsEventReport?: components.GetSmsEventReport$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetSmsEventsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getSmsEventReport: components.GetSmsEventReport$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getSmsEventReport === undefined
                    ? null
                    : { getSmsEventReport: v.getSmsEventReport }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getSmsEventReport?: components.GetSmsEventReport$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSmsEventsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getSmsEventReport: components.GetSmsEventReport$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getSmsEventReport === undefined
                    ? null
                    : { getSmsEventReport: v.getSmsEventReport }),
            };
        });
}
