/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type GetAccountActivityRequest = {
    /**
     * Mandatory if startDate is used. Enter end date in UTC date (YYYY-MM-DD) format to filter the activity in your account. Maximum time period that can be selected is one month.
     */
    endDate?: string | undefined;
    /**
     * Number of documents per page
     */
    limit?: number | undefined;
    /**
     * Index of the first document in the page.
     */
    offset?: number | undefined;
    /**
     * Mandatory if endDate is used. Enter start date in UTC date (YYYY-MM-DD) format to filter the activity in your account. Maximum time period that can be selected is one month. Additionally, you can retrieve activity logs from the past 12 months from the date of your search.
     */
    startDate?: string | undefined;
};

export type GetAccountActivityResponse = {
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
     * list of user activity logs
     */
    getAccountActivity?: components.GetAccountActivity | undefined;
};

/** @internal */
export namespace GetAccountActivityRequest$ {
    export type Inbound = {
        endDate?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        startDate?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetAccountActivityRequest, z.ZodTypeDef, Inbound> = z
        .object({
            endDate: z.string().optional(),
            limit: z.number().int().default(10),
            offset: z.number().int().default(0),
            startDate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                limit: v.limit,
                offset: v.offset,
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
            };
        });

    export type Outbound = {
        endDate?: string | undefined;
        limit: number;
        offset: number;
        startDate?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAccountActivityRequest> = z
        .object({
            endDate: z.string().optional(),
            limit: z.number().int().default(10),
            offset: z.number().int().default(0),
            startDate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                limit: v.limit,
                offset: v.offset,
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
            };
        });
}

/** @internal */
export namespace GetAccountActivityResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getAccountActivity?: components.GetAccountActivity$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetAccountActivityResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getAccountActivity: z
                .lazy(() => components.GetAccountActivity$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getAccountActivity === undefined
                    ? null
                    : { getAccountActivity: v.getAccountActivity }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getAccountActivity?: components.GetAccountActivity$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAccountActivityResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getAccountActivity: z
                .lazy(() => components.GetAccountActivity$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getAccountActivity === undefined
                    ? null
                    : { getAccountActivity: v.getAccountActivity }),
            };
        });
}
