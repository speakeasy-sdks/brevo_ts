/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

/**
 * Use this flag to exclude htmlContent from the response body. If set to **true**, htmlContent field will be returned as empty string in the response body
 */
export enum ExcludeHtmlContent {
    True = "true",
    False = "false",
}

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
 */
export enum GetEmailCampaignsQueryParamSort {
    Asc = "asc",
    Desc = "desc",
}

/**
 * Filter on the type of statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response.
 */
export enum QueryParamStatistics {
    GlobalStats = "globalStats",
    LinksStats = "linksStats",
    StatsByDomain = "statsByDomain",
}

/**
 * Filter on the status of the campaign
 */
export enum Status {
    Suspended = "suspended",
    Archive = "archive",
    Sent = "sent",
    Queued = "queued",
    Draft = "draft",
    InProcess = "inProcess",
}

/**
 * Filter on the type of the campaigns
 */
export enum Type {
    Classic = "classic",
    Trigger = "trigger",
}

export type GetEmailCampaignsRequest = {
    /**
     * **Mandatory if startDate is used**. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns.
     *
     * @remarks
     * **Prefer to pass your timezone in date-time format for accurate result** ( only available if either 'status' not passed and if passed is set to 'sent' )
     *
     */
    endDate?: string | undefined;
    /**
     * Use this flag to exclude htmlContent from the response body. If set to **true**, htmlContent field will be returned as empty string in the response body
     */
    excludeHtmlContent?: ExcludeHtmlContent | undefined;
    /**
     * Number of documents per page
     */
    limit?: number | undefined;
    /**
     * Index of the first document in the page
     */
    offset?: number | undefined;
    /**
     * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
     */
    sort?: GetEmailCampaignsQueryParamSort | undefined;
    /**
     * **Mandatory if endDate is used**. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns.
     *
     * @remarks
     * **Prefer to pass your timezone in date-time format for accurate result** ( only available if either 'status' not passed and if passed is set to 'sent' )
     *
     */
    startDate?: string | undefined;
    /**
     * Filter on the type of statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response.
     */
    statistics?: QueryParamStatistics | undefined;
    /**
     * Filter on the status of the campaign
     */
    status?: Status | undefined;
    /**
     * Filter on the type of the campaigns
     */
    type?: Type | undefined;
};

export type GetEmailCampaignsResponse = {
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
     * Email campaigns informations
     */
    getEmailCampaigns?: components.GetEmailCampaigns | undefined;
};

/** @internal */
export const ExcludeHtmlContent$ = z.nativeEnum(ExcludeHtmlContent);

/** @internal */
export const GetEmailCampaignsQueryParamSort$ = z.nativeEnum(GetEmailCampaignsQueryParamSort);

/** @internal */
export const QueryParamStatistics$ = z.nativeEnum(QueryParamStatistics);

/** @internal */
export const Status$ = z.nativeEnum(Status);

/** @internal */
export const Type$ = z.nativeEnum(Type);

/** @internal */
export namespace GetEmailCampaignsRequest$ {
    export type Inbound = {
        endDate?: string | undefined;
        excludeHtmlContent?: ExcludeHtmlContent | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        sort?: GetEmailCampaignsQueryParamSort | undefined;
        startDate?: string | undefined;
        statistics?: QueryParamStatistics | undefined;
        status?: Status | undefined;
        type?: Type | undefined;
    };

    export const inboundSchema: z.ZodType<GetEmailCampaignsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            endDate: z.string().optional(),
            excludeHtmlContent: ExcludeHtmlContent$.optional(),
            limit: z.number().int().default(50),
            offset: z.number().int().default(0),
            sort: GetEmailCampaignsQueryParamSort$.default(GetEmailCampaignsQueryParamSort.Desc),
            startDate: z.string().optional(),
            statistics: QueryParamStatistics$.optional(),
            status: Status$.optional(),
            type: Type$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.excludeHtmlContent === undefined
                    ? null
                    : { excludeHtmlContent: v.excludeHtmlContent }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
                ...(v.sort === undefined ? null : { sort: v.sort }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.statistics === undefined ? null : { statistics: v.statistics }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        endDate?: string | undefined;
        excludeHtmlContent?: ExcludeHtmlContent | undefined;
        limit: number;
        offset: number;
        sort: GetEmailCampaignsQueryParamSort;
        startDate?: string | undefined;
        statistics?: QueryParamStatistics | undefined;
        status?: Status | undefined;
        type?: Type | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetEmailCampaignsRequest> = z
        .object({
            endDate: z.string().optional(),
            excludeHtmlContent: ExcludeHtmlContent$.optional(),
            limit: z.number().int().default(50),
            offset: z.number().int().default(0),
            sort: GetEmailCampaignsQueryParamSort$.default(GetEmailCampaignsQueryParamSort.Desc),
            startDate: z.string().optional(),
            statistics: QueryParamStatistics$.optional(),
            status: Status$.optional(),
            type: Type$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.excludeHtmlContent === undefined
                    ? null
                    : { excludeHtmlContent: v.excludeHtmlContent }),
                limit: v.limit,
                offset: v.offset,
                sort: v.sort,
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.statistics === undefined ? null : { statistics: v.statistics }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}

/** @internal */
export namespace GetEmailCampaignsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getEmailCampaigns?: components.GetEmailCampaigns$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetEmailCampaignsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getEmailCampaigns: z.lazy(() => components.GetEmailCampaigns$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getEmailCampaigns === undefined
                    ? null
                    : { getEmailCampaigns: v.getEmailCampaigns }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getEmailCampaigns?: components.GetEmailCampaigns$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetEmailCampaignsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getEmailCampaigns: z
                .lazy(() => components.GetEmailCampaigns$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getEmailCampaigns === undefined
                    ? null
                    : { getEmailCampaigns: v.getEmailCampaigns }),
            };
        });
}
