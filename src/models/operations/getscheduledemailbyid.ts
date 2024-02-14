/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { RFCDate } from "../../types";
import { z } from "zod";

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed. Not valid when identifier is `messageId`.
 */
export enum GetScheduledEmailByIdQueryParamSort {
    Asc = "asc",
    Desc = "desc",
}

/**
 * Filter the records by `status` of the scheduled email batch or message. Not valid when identifier is `messageId`.
 */
export enum GetScheduledEmailByIdQueryParamStatus {
    Processed = "processed",
    InProgress = "inProgress",
    Queued = "queued",
}

export type GetScheduledEmailByIdRequest = {
    /**
     * Mandatory if `startDate` is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month.
     */
    endDate?: RFCDate | undefined;
    /**
     * The `batchId` of scheduled emails batch (Should be a valid UUIDv4) or the `messageId` of scheduled email.
     */
    identifier: string;
    /**
     * Number of documents returned per page. Not valid when identifier is `messageId`.
     */
    limit?: number | undefined;
    /**
     * Index of the first document on the page.  Not valid when identifier is `messageId`.
     */
    offset?: number | undefined;
    /**
     * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed. Not valid when identifier is `messageId`.
     */
    sort?: GetScheduledEmailByIdQueryParamSort | undefined;
    /**
     * Mandatory if `endDate` is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Can be maximum 30 days older tha current date.
     */
    startDate?: RFCDate | undefined;
    /**
     * Filter the records by `status` of the scheduled email batch or message. Not valid when identifier is `messageId`.
     */
    status?: GetScheduledEmailByIdQueryParamStatus | undefined;
};

/**
 * Scheduled email batches
 */
export type GetScheduledEmailByIdResponseBody =
    | components.GetScheduledEmailByBatchId
    | components.GetScheduledEmailByMessageId;

export type GetScheduledEmailByIdResponse = {
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
     * Scheduled email batches
     */
    oneOf?:
        | components.GetScheduledEmailByBatchId
        | components.GetScheduledEmailByMessageId
        | undefined;
};

/** @internal */
export const GetScheduledEmailByIdQueryParamSort$ = z.nativeEnum(
    GetScheduledEmailByIdQueryParamSort
);

/** @internal */
export const GetScheduledEmailByIdQueryParamStatus$ = z.nativeEnum(
    GetScheduledEmailByIdQueryParamStatus
);

/** @internal */
export namespace GetScheduledEmailByIdRequest$ {
    export type Inbound = {
        endDate?: string | undefined;
        identifier: string;
        limit?: number | undefined;
        offset?: number | undefined;
        sort?: GetScheduledEmailByIdQueryParamSort | undefined;
        startDate?: string | undefined;
        status?: GetScheduledEmailByIdQueryParamStatus | undefined;
    };

    export const inboundSchema: z.ZodType<GetScheduledEmailByIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            endDate: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            identifier: z.string(),
            limit: z.number().int().default(100),
            offset: z.number().int().default(0),
            sort: GetScheduledEmailByIdQueryParamSort$.default(
                GetScheduledEmailByIdQueryParamSort.Desc
            ),
            startDate: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            status: GetScheduledEmailByIdQueryParamStatus$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                identifier: v.identifier,
                limit: v.limit,
                offset: v.offset,
                sort: v.sort,
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        endDate?: string | undefined;
        identifier: string;
        limit: number;
        offset: number;
        sort: GetScheduledEmailByIdQueryParamSort;
        startDate?: string | undefined;
        status?: GetScheduledEmailByIdQueryParamStatus | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetScheduledEmailByIdRequest> = z
        .object({
            endDate: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            identifier: z.string(),
            limit: z.number().int().default(100),
            offset: z.number().int().default(0),
            sort: GetScheduledEmailByIdQueryParamSort$.default(
                GetScheduledEmailByIdQueryParamSort.Desc
            ),
            startDate: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            status: GetScheduledEmailByIdQueryParamStatus$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                identifier: v.identifier,
                limit: v.limit,
                offset: v.offset,
                sort: v.sort,
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });
}

/** @internal */
export namespace GetScheduledEmailByIdResponseBody$ {
    export type Inbound =
        | components.GetScheduledEmailByBatchId$.Inbound
        | components.GetScheduledEmailByMessageId$.Inbound;

    export type Outbound =
        | components.GetScheduledEmailByBatchId$.Outbound
        | components.GetScheduledEmailByMessageId$.Outbound;

    export const inboundSchema: z.ZodType<
        GetScheduledEmailByIdResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z.union([
        components.GetScheduledEmailByBatchId$.inboundSchema,
        components.GetScheduledEmailByMessageId$.inboundSchema,
    ]);

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetScheduledEmailByIdResponseBody
    > = z.union([
        components.GetScheduledEmailByBatchId$.outboundSchema,
        components.GetScheduledEmailByMessageId$.outboundSchema,
    ]);
}

/** @internal */
export namespace GetScheduledEmailByIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        oneOf?:
            | components.GetScheduledEmailByBatchId$.Inbound
            | components.GetScheduledEmailByMessageId$.Inbound
            | undefined;
    };

    export const inboundSchema: z.ZodType<GetScheduledEmailByIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            oneOf: z
                .union([
                    components.GetScheduledEmailByBatchId$.inboundSchema,
                    components.GetScheduledEmailByMessageId$.inboundSchema,
                ])
                .optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.oneOf === undefined ? null : { oneOf: v.oneOf }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        oneOf?:
            | components.GetScheduledEmailByBatchId$.Outbound
            | components.GetScheduledEmailByMessageId$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetScheduledEmailByIdResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                oneOf: z
                    .union([
                        components.GetScheduledEmailByBatchId$.outboundSchema,
                        components.GetScheduledEmailByMessageId$.outboundSchema,
                    ])
                    .optional(),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                    ...(v.oneOf === undefined ? null : { oneOf: v.oneOf }),
                };
            });
}
