/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
 */
export enum GetSmtpReportQueryParamSort {
    Asc = "asc",
    Desc = "desc",
}

export type GetSmtpReportRequest = {
    /**
     * Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_
     *
     * @remarks
     *
     */
    days?: number | undefined;
    /**
     * **Mandatory if startDate is used.** Ending date of the report (YYYY-MM-DD)
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
     * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
     */
    sort?: GetSmtpReportQueryParamSort | undefined;
    /**
     * **Mandatory if endDate is used.** Starting date of the report (YYYY-MM-DD)
     *
     * @remarks
     *
     */
    startDate?: string | undefined;
    /**
     * Tag of the emails
     */
    tag?: string | undefined;
};

export type GetSmtpReportResponse = {
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
     * Aggregated report informations
     */
    getReports?: components.GetReports | undefined;
};

/** @internal */
export const GetSmtpReportQueryParamSort$ = z.nativeEnum(GetSmtpReportQueryParamSort);

/** @internal */
export namespace GetSmtpReportRequest$ {
    export type Inbound = {
        days?: number | undefined;
        endDate?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        sort?: GetSmtpReportQueryParamSort | undefined;
        startDate?: string | undefined;
        tag?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetSmtpReportRequest, z.ZodTypeDef, Inbound> = z
        .object({
            days: z.number().int().optional(),
            endDate: z.string().optional(),
            limit: z.number().int().default(10),
            offset: z.number().int().default(0),
            sort: GetSmtpReportQueryParamSort$.default(GetSmtpReportQueryParamSort.Desc),
            startDate: z.string().optional(),
            tag: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.days === undefined ? null : { days: v.days }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                limit: v.limit,
                offset: v.offset,
                sort: v.sort,
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });

    export type Outbound = {
        days?: number | undefined;
        endDate?: string | undefined;
        limit: number;
        offset: number;
        sort: GetSmtpReportQueryParamSort;
        startDate?: string | undefined;
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSmtpReportRequest> = z
        .object({
            days: z.number().int().optional(),
            endDate: z.string().optional(),
            limit: z.number().int().default(10),
            offset: z.number().int().default(0),
            sort: GetSmtpReportQueryParamSort$.default(GetSmtpReportQueryParamSort.Desc),
            startDate: z.string().optional(),
            tag: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.days === undefined ? null : { days: v.days }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                limit: v.limit,
                offset: v.offset,
                sort: v.sort,
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });
}

/** @internal */
export namespace GetSmtpReportResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getReports?: components.GetReports$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetSmtpReportResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getReports: components.GetReports$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getReports === undefined ? null : { getReports: v.getReports }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getReports?: components.GetReports$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSmtpReportResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getReports: components.GetReports$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getReports === undefined ? null : { getReports: v.getReports }),
            };
        });
}
