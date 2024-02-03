/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type PostCorporateSubAccountKeyRequestBody = {
    /**
     * Id of the sub-account organization
     */
    id: number;
    /**
     * Name of the API key
     */
    name: string;
};

export type PostCorporateSubAccountKeyResponse = {
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
     * API key
     */
    createApiKeyResponse?: components.CreateApiKeyResponse | undefined;
};

/** @internal */
export namespace PostCorporateSubAccountKeyRequestBody$ {
    export type Inbound = {
        id: number;
        name: string;
    };

    export const inboundSchema: z.ZodType<
        PostCorporateSubAccountKeyRequestBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            id: z.number().int(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                name: v.name,
            };
        });

    export type Outbound = {
        id: number;
        name: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostCorporateSubAccountKeyRequestBody
    > = z
        .object({
            id: z.number().int(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                name: v.name,
            };
        });
}

/** @internal */
export namespace PostCorporateSubAccountKeyResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        createApiKeyResponse?: components.CreateApiKeyResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        PostCorporateSubAccountKeyResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            createApiKeyResponse: components.CreateApiKeyResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.createApiKeyResponse === undefined
                    ? null
                    : { createApiKeyResponse: v.createApiKeyResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        createApiKeyResponse?: components.CreateApiKeyResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostCorporateSubAccountKeyResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            createApiKeyResponse: components.CreateApiKeyResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.createApiKeyResponse === undefined
                    ? null
                    : { createApiKeyResponse: v.createApiKeyResponse }),
            };
        });
}
