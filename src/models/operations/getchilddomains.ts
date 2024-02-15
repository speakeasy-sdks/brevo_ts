/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetChildDomainsRequest = {
    /**
     * Either auth key or id of reseller's child
     */
    childIdentifier: string;
};

export type GetChildDomainsResponse = {
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
     * Sender domains of the child
     */
    getChildDomains?: Array<components.GetChildDomains> | undefined;
};

/** @internal */
export namespace GetChildDomainsRequest$ {
    export type Inbound = {
        childIdentifier: string;
    };

    export const inboundSchema: z.ZodType<GetChildDomainsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            childIdentifier: z.string(),
        })
        .transform((v) => {
            return {
                childIdentifier: v.childIdentifier,
            };
        });

    export type Outbound = {
        childIdentifier: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChildDomainsRequest> = z
        .object({
            childIdentifier: z.string(),
        })
        .transform((v) => {
            return {
                childIdentifier: v.childIdentifier,
            };
        });
}

/** @internal */
export namespace GetChildDomainsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getChildDomains?: Array<components.GetChildDomains$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetChildDomainsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getChildDomains: z
                .array(z.lazy(() => components.GetChildDomains$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getChildDomains === undefined
                    ? null
                    : { getChildDomains: v.getChildDomains }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getChildDomains?: Array<components.GetChildDomains$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChildDomainsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getChildDomains: z
                .array(z.lazy(() => components.GetChildDomains$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getChildDomains === undefined
                    ? null
                    : { getChildDomains: v.getChildDomains }),
            };
        });
}
