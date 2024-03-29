/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * Attributes for company update
 */
export type Attributes = {};

/**
 * Updated company details.
 */
export type PatchCompaniesIdRequestBody = {
    /**
     * Attributes for company update
     */
    attributes?: Attributes | undefined;
    /**
     * Country code if phone_number is passed in attributes.
     */
    countryCode?: number | undefined;
    /**
     * Name of company
     */
    name?: string | undefined;
};

export type PatchCompaniesIdRequest = {
    /**
     * Updated company details.
     */
    requestBody: PatchCompaniesIdRequestBody;
    id: string;
};

export type PatchCompaniesIdResponse = {
    /**
     * Company updated successfully
     */
    company?: components.Company | undefined;
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
};

/** @internal */
export namespace Attributes$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Attributes, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Attributes> = z.object({});
}

/** @internal */
export namespace PatchCompaniesIdRequestBody$ {
    export type Inbound = {
        attributes?: Attributes$.Inbound | undefined;
        countryCode?: number | undefined;
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<PatchCompaniesIdRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            attributes: z.lazy(() => Attributes$.inboundSchema).optional(),
            countryCode: z.number().int().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.attributes === undefined ? null : { attributes: v.attributes }),
                ...(v.countryCode === undefined ? null : { countryCode: v.countryCode }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        attributes?: Attributes$.Outbound | undefined;
        countryCode?: number | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchCompaniesIdRequestBody> = z
        .object({
            attributes: z.lazy(() => Attributes$.outboundSchema).optional(),
            countryCode: z.number().int().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.attributes === undefined ? null : { attributes: v.attributes }),
                ...(v.countryCode === undefined ? null : { countryCode: v.countryCode }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}

/** @internal */
export namespace PatchCompaniesIdRequest$ {
    export type Inbound = {
        RequestBody: PatchCompaniesIdRequestBody$.Inbound;
        id: string;
    };

    export const inboundSchema: z.ZodType<PatchCompaniesIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.lazy(() => PatchCompaniesIdRequestBody$.inboundSchema),
            id: z.string(),
        })
        .transform((v) => {
            return {
                requestBody: v.RequestBody,
                id: v.id,
            };
        });

    export type Outbound = {
        RequestBody: PatchCompaniesIdRequestBody$.Outbound;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchCompaniesIdRequest> = z
        .object({
            requestBody: z.lazy(() => PatchCompaniesIdRequestBody$.outboundSchema),
            id: z.string(),
        })
        .transform((v) => {
            return {
                RequestBody: v.requestBody,
                id: v.id,
            };
        });
}

/** @internal */
export namespace PatchCompaniesIdResponse$ {
    export type Inbound = {
        Company?: components.Company$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PatchCompaniesIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            Company: components.Company$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.Company === undefined ? null : { company: v.Company }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        Company?: components.Company$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchCompaniesIdResponse> = z
        .object({
            company: components.Company$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.company === undefined ? null : { Company: v.company }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
