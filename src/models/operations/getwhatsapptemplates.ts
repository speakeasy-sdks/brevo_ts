/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

/**
 * Sort the results in the ascending/descending order of record modification. Default order is **descending** if `sort` is not passed
 */
export enum GetWhatsAppTemplatesQueryParamSort {
    Asc = "asc",
    Desc = "desc",
}

export type GetWhatsAppTemplatesRequest = {
    /**
     * **Mandatory if startDate is used**. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the templates created.
     *
     * @remarks
     * **Prefer to pass your timezone in date-time format for accurate result**
     *
     */
    endDate?: string | undefined;
    /**
     * Number of documents per page
     */
    limit?: number | undefined;
    /**
     * Index of the first document in the page
     */
    offset?: number | undefined;
    /**
     * Sort the results in the ascending/descending order of record modification. Default order is **descending** if `sort` is not passed
     */
    sort?: GetWhatsAppTemplatesQueryParamSort | undefined;
    /**
     * **Mandatory if endDate is used**. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the templates created.
     *
     * @remarks
     * **Prefer to pass your timezone in date-time format for accurate result**
     *
     */
    startDate?: string | undefined;
};

export type GetWhatsAppTemplatesResponse = {
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
     * WhatsApp templates informations
     */
    getWhatsappTemplates?: components.GetWhatsappTemplates | undefined;
};

/** @internal */
export const GetWhatsAppTemplatesQueryParamSort$ = z.nativeEnum(GetWhatsAppTemplatesQueryParamSort);

/** @internal */
export namespace GetWhatsAppTemplatesRequest$ {
    export type Inbound = {
        endDate?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        sort?: GetWhatsAppTemplatesQueryParamSort | undefined;
        startDate?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetWhatsAppTemplatesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            endDate: z.string().optional(),
            limit: z.number().int().default(50),
            offset: z.number().int().default(0),
            sort: GetWhatsAppTemplatesQueryParamSort$.default(
                GetWhatsAppTemplatesQueryParamSort.Desc
            ),
            startDate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
                ...(v.sort === undefined ? null : { sort: v.sort }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
            };
        });

    export type Outbound = {
        endDate?: string | undefined;
        limit: number;
        offset: number;
        sort: GetWhatsAppTemplatesQueryParamSort;
        startDate?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWhatsAppTemplatesRequest> = z
        .object({
            endDate: z.string().optional(),
            limit: z.number().int().default(50),
            offset: z.number().int().default(0),
            sort: GetWhatsAppTemplatesQueryParamSort$.default(
                GetWhatsAppTemplatesQueryParamSort.Desc
            ),
            startDate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                limit: v.limit,
                offset: v.offset,
                sort: v.sort,
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
            };
        });
}

/** @internal */
export namespace GetWhatsAppTemplatesResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getWhatsappTemplates?: components.GetWhatsappTemplates$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetWhatsAppTemplatesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getWhatsappTemplates: components.GetWhatsappTemplates$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getWhatsappTemplates === undefined
                    ? null
                    : { getWhatsappTemplates: v.getWhatsappTemplates }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getWhatsappTemplates?: components.GetWhatsappTemplates$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWhatsAppTemplatesResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getWhatsappTemplates: components.GetWhatsappTemplates$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getWhatsappTemplates === undefined
                    ? null
                    : { getWhatsappTemplates: v.getWhatsappTemplates }),
            };
        });
}
